import React, {useState, useEffect} from 'react';
import {View, Dimensions, StyleSheet, BackHandler, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE, Marker, Polygon} from 'react-native-maps';
import {mapStyle} from '../constants/mapStyle';
import {CustomText} from '../components/common/text';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useStyles} from '../styles';
import {palette} from '../styles/palette';
import {ButtonWithIcon} from '../components/common/button';
import {checkIfAreaCanBeCalculated, calculateSizeOfLand} from '../utils';
import {SaveFarmLandAlert} from '../components/saveFarmLand';
import {readFromStorage, writeToStorage} from '../utils/localStorage';
import {DisplayFarmLands} from '../components/displayFarmLands';
import {FarmDetails} from '../components/farmDetails';

export const MapScreen = () => {
  const styles_ = useStyles();
  let watchId_;

  const [geoData, setGeoData] = useState({
    latitude: -1.940278,
    longitude: 29.873888,
    coordinates: [],
  });

  const [sizeOfLand, setSizeOfLand] = useState(0);
  const [showSaveFarmModal, setShowSaveFarmModal] = useState(false);
  const [showFarmDetails, setShowFarmDetails] = useState(false);
  const [showListOfFarm, setShowListOfFarm] = useState(true);
  const [showRecordingControl, setShowRecordingControl] = useState(true);
  const [recording, setRecording] = useState(false);
  const [farmInfo, setFarmInfo] = useState(null);

  const handleBackButton = () => {
    if (showListOfFarm) {
      BackHandler.exitApp();
    } else {
      setShowFarmDetails(false);
      setShowListOfFarm(true);
    }
  };

  /**
   * @description - this function is called as soon as the user starts recording / surveying the farmland by touching the record button on the screen
   */
  const handleLandRecording = async () => {
    const recordingStatus = !recording;
    setRecording(recordingStatus);
    if (recordingStatus) {
      watchId_ = await Geolocation.watchPosition(
        position => {
          setGeoData(state => ({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            coordinates: state.coordinates.concat({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }),
          }));
        },
        error => Alert.alert('Error', error.message.toString()),
        {
          showLocationDialog: true,
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 0,
          distanceFilter: 0,
        },
      );
    } else {
      await Geolocation.clearWatch(watchId_);
    }
  };

  const addFarmLand = () => {
    setShowRecordingControl(true);
    setShowListOfFarm(false);
  };

  const displayFarmLandDetails = farmInfo_ => () => {
    setFarmInfo(farmInfo_);
    setShowListOfFarm(false);
    setShowFarmDetails(true);
  };

  const discardAction = () => {
    setShowRecordingControl(true);
    setShowSaveFarmModal(false);
  };

  const onSaveAction = async farmLabel => {
    try {
      const data = await readFromStorage('farmLand');
      const existingFarm = data.filter(
        item => item.label.toLowerCase() === farmLabel.toLowerCase(),
      );
      if (existingFarm.length) {
        Alert.alert(
          'Farm Exists',
          'A farm with that label has already been created, choose a different label',
        );
        return;
      }
      data.push({
        id: `RWA-0${data.length + 1}`,
        label: farmLabel,
        size: sizeOfLand,
        dateCreated: JSON.stringify(new Date()).split('T')[0].slice(1),
      });
      await writeToStorage('farmLand', data);
      setShowRecordingControl(false);
      setShowSaveFarmModal(false);
      setShowListOfFarm(true);
    } catch (err) {
      console.log('err');
      Alert.alert('Error', 'An error occured');
    }
  };

  const handleCheckMarkBtn = async () => {
    try {
      if (!coordinates.length) {
        Alert.alert('Error', 'Cover an enclosed area of your farmland');
        return;
      }
      const canCalculateArea = checkIfAreaCanBeCalculated(coordinates);
      if (canCalculateArea) {
        if (watchId_ || watchId_ == 0) {
          await Geolocation.clearWatch(watchId_);
          watchId_ = null;
        }
        setRecording(false);
        const areaOfLand = calculateSizeOfLand(coordinates);
        setSizeOfLand(areaOfLand);
        setShowSaveFarmModal(true);
      } else {
        Alert.alert(
          'Complete Perimeter',
          'Complete perimeter of the farm before saving',
        );
      }
    } catch (error) {
      console.log('error >>>>>>>>>>>>>>> ', error);
      Alert.alert('Error', 'An error occured');
    }
  };

  useEffect(() => {
    const componentDidMount = async () => {
      await Geolocation.getCurrentPosition(
        position => {
          setGeoData(state => ({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            coordinates: state.coordinates.concat({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }),
          }));
        },
        error => {
          Alert.alert(error.message.toString());
        },
        {
          showLocationDialog: true,
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 0,
        },
      );
    };
    componentDidMount();
  }, []);

  const {latitude, longitude, coordinates} = geoData;

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.mapViewBtnContainer,
          ...styles.topView,
        }}>
        <ButtonWithIcon
          name="arrow-left"
          onPress={handleBackButton}
          color={palette.black}
        />
        {recording ? (
          <View
            style={{
              ...styles_.row,
              ...styles_.redBackground,
              ...styles_['ph-4p'],
              ...styles_.h45,
              ...styles_.alignItemCenter,
              ...styles_.smallBorderRadius,
            }}>
            <MaterialIcon
              name="record-circle-outline"
              color={palette.white}
              size={27}
            />
            <CustomText style={{...styles_['ml-3'], ...styles_.whiteTextColor}}>
              Recording
            </CustomText>
          </View>
        ) : null}
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        mapType="satellite"
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
        />
        <Polygon
          coordinates={
            coordinates.length
              ? coordinates
              : [{latitude: -1.940278, longitude: 29.873888}]
          }
          strokeColor={palette.yellowShade}
          fillColor={palette.faintOliveGreen}
          strokeWidth={1}
        />
      </MapView>
      {showSaveFarmModal ||
      showFarmDetails ||
      showListOfFarm ||
      !showRecordingControl ? null : (
        <View style={styles.mapViewBtnContainer}>
          <ButtonWithIcon name="trash-can-outline" color={palette.black} />
          <ButtonWithIcon
            onPress={handleLandRecording}
            color={palette.red}
            name={recording ? 'pause' : 'record-circle'}
          />
          <ButtonWithIcon
            onPress={handleCheckMarkBtn}
            color={palette.green}
            name="check"
          />
        </View>
      )}
      {showSaveFarmModal ? (
        <View>
          <SaveFarmLandAlert
            onSaveAction={onSaveAction}
            discardAction={discardAction}
            farmSize={sizeOfLand}
          />
        </View>
      ) : null}
      {showFarmDetails ? (
        <View>
          <FarmDetails farmInfo={farmInfo} />
        </View>
      ) : null}
      {showListOfFarm ? (
        <View>
          <DisplayFarmLands
            displayFarmLandDetails={displayFarmLandDetails}
            addFarmLand={addFarmLand}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -8,
  },
  mapViewBtnContainer: {
    width: '92%',
    marginHorizontal: '4%',
    backgroundColor: 'rgba(4,4,4,0)',
    flexDirection: 'row',
    bottom: 22,
    justifyContent: 'space-between',
  },
  topView: {
    top: 22,
    position: 'absolute',
  },
});
