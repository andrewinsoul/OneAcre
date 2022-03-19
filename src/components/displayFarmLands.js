import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useStyles} from '../styles';
import {palette} from '../styles/palette';
import {ButtonWithIcon} from './common/button';
import {CustomText} from './common/text';
import {readFromStorage} from '../utils/localStorage';

export const DisplayFarmLands = ({addFarmLand}) => {
  const [listOfFarm, setListOfFarm] = useState([]);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const styles = useStyles();
  const toggleOptionsVisibility = () => setOptionsVisible(!optionsVisible);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await readFromStorage('farmLand');
        setListOfFarm(data);
      } catch (err) {
        Alert.alert('Error', 'An error occured while loading data');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [refreshing]);

  const ListHeaderComponent = (
    <>
      <View
        style={{
          ...styles.row,
          ...styles.spacedContainer,
          ...styles.justifyContentSpaceBtwn,
          ...styles['mv-16'],
          ...styles.alignItemCenter,
        }}>
        <CustomText style={styles.textSize16}>FarmList</CustomText>
        <TouchableOpacity onPress={toggleOptionsVisibility}>
          <MaterialIcon size={24} name="dots-vertical" color={palette.black} />
        </TouchableOpacity>
      </View>
      <View style={styles_.headerLine} />
      <View
        style={{
          ...styles.row,
          ...styles.justifyContentSpaceBtwn,
          ...styles.spacedContainer,
          ...styles['mv-16'],
        }}>
        <CustomText>#ID</CustomText>
        <CustomText>Label</CustomText>
        <CustomText>Size</CustomText>
      </View>
    </>
  );

  const refreshHandler = () => {
    setOptionsVisible(false);
    setRefreshing(!refreshing);
  };

  const optionsArray = [
    {
      name: 'Refresh',
      action: refreshHandler,
      icon: <MaterialIcon size={24} name="refresh" color={palette.black} />,
    },
    {
      name: 'Send',
      action: () => {
        setOptionsVisible(false);
        Alert.alert('SEND CLICKED', 'send clicked');
      },
      icon: <MaterialIcon size={24} name="send" color={palette.black} />,
    },
    {
      name: 'Delete',
      action: () => {
        setOptionsVisible(false);
        Alert.alert('DELETE CLICKED', 'delete clicked');
      },
      icon: (
        <MaterialIcon size={24} name="trash-can-outline" color={palette.red} />
      ),
    },
  ];

  const OptionsComponent = (
    <View style={styles_.optionsContainer}>
      {optionsArray.map((item, index) => (
        <TouchableOpacity
          onPress={item.action}
          style={
            index === 1
              ? {...styles_.optionsLink, ...styles['mv-16']}
              : {...styles_.optionsLink}
          }>
          {item.icon}
          <CustomText style={styles['ml-10']}>{item.name}</CustomText>
        </TouchableOpacity>
      ))}
    </View>
  );
  return (
    <View
      style={{...styles.whiteBackground, ...styles_.h60, ...styles.bottomView}}>
      {ListHeaderComponent}
      {optionsVisible ? OptionsComponent : null}
      {loading ? (
        <ActivityIndicator size={40} />
      ) : (
        <>
          <FlatList
            data={listOfFarm}
            contentContainerStyle={{
              ...styles.bottomView,
            }}
            style={{height: hp('60%')}}
            renderItem={({item}) => {
              return (
                <View
                  key={item.id}
                  style={{
                    ...styles.row,
                    ...styles.spacedContainer,
                    ...styles.justifyContentSpaceBtwn,
                    ...styles_.farmListContainer,
                  }}>
                  <CustomText style={styles_.idTextColor}>{item.id}</CustomText>
                  <CustomText
                    style={{...styles.w56p, ...styles.alignTextCenter}}>
                    {item.label}
                  </CustomText>
                  <CustomText>{`${Number(item.size).toFixed(
                    2,
                  )} Acre`}</CustomText>
                </View>
              );
            }}
          />
          <ButtonWithIcon
            name="plus"
            onPress={addFarmLand}
            color={palette.white}
            style={{
              ...styles.oliveGreenBackground,
              ...styles.absolutePosition,
              ...styles.bottom40,
              ...styles.right20,
            }}
          />
        </>
      )}
    </View>
  );
};

const styles_ = StyleSheet.create({
  farmListContainer: {
    backgroundColor: '#F2F9F7',
    borderRadius: 8,
    padding: 20,
    marginVertical: 9,
  },
  idTextColor: {
    color: palette.faintOliveGreen,
  },
  btnStyle: {
    borderRadius: 8,
    width: '45%',
    padding: 15,
  },
  h60: {
    height: hp('60%'),
  },
  optionsContainer: {
    width: wp('39%'),
    borderRadius: 8,
    right: 22,
    padding: 22,
    backgroundColor: 'white',
    elevation: 3,
    position: 'absolute',
    bottom: hp('37%'),
    zIndex: 3,
  },
  headerLine: {
    backgroundColor: 'rgba(99, 99, 99, 0.3)',
    height: 1,
    width: '92%',
    marginHorizontal: '4%',
  },
  optionsLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
