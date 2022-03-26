import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {LineChart, BarChart} from 'react-native-chart-kit';
import {useStyles} from '../styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CustomText} from './common/text';
import {palette} from '../styles/palette';

export const FarmDetails = ({farmInfo}) => {
  const [focusHarvest, setFocusHarvest] = useState(true);
  const [focusWeather, setFocusWeather] = useState(false);
  const {label: name, size, dateCreated} = farmInfo;
  const styles = useStyles();
  const onFocusWeather = () => {
    setFocusHarvest(false);
    setFocusWeather(true);
  };
  const onFocusHarvest = () => {
    setFocusHarvest(true);
    setFocusWeather(false);
  };
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => palette.oliveGreenShade, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Rainy Days'], // optional
  };
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.5,
    fillShadowGradient: palette.oliveGreenShade,
    fillShadowGradientOpacity: 0,
    color: (opacity = 1) => palette.oliveGreenShade,
    labelColor: (opacity = 1) => '#333',
    strokeWidth: 2,

    useShadowColorFromDataset: false,
    decimalPlaces: 0,
  };
  return (
    <View style={{...styles.bottomView}}>
      <View
        style={{
          ...styles.spacedContainer,
          ...styles.row,
          ...styles.justifyContentSpaceBtwn,
          ...styles['mv-12'],
        }}>
        <CustomText style={{...styles.textSize18}}>{name}</CustomText>
        <View>
          <CustomText
            style={{...styles.textSize16}}>{`${size} Acre`}</CustomText>
          <CustomText>{dateCreated}</CustomText>
        </View>
      </View>
      <View style={styles_.divider} />
      <View>
        <View
          style={{
            ...styles.row,
            ...styles.spacedContainer,
            ...styles.justifyContentSpaceBtwn,
          }}>
          <TouchableOpacity
            onPress={onFocusHarvest}
            style={
              focusHarvest
                ? {...styles['pb-2p'], ...styles_.tabOnFocus}
                : styles['pb-2p']
            }>
            <CustomText
              style={
                focusHarvest
                  ? {
                      ...styles.alignTextCenter,
                      ...styles.oliveGreenTextColor,
                    }
                  : {...styles.blackTextColor, ...styles.alignTextCenter}
              }>
              Harvest History
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onFocusWeather}
            style={
              focusWeather
                ? {...styles['pb-2p'], ...styles_.tabOnFocus}
                : styles['pb-2p']
            }>
            <CustomText
              style={
                focusWeather
                  ? {
                      ...styles.alignTextCenter,
                      ...styles.oliveGreenTextColor,
                    }
                  : {...styles.alignTextCenter, ...styles.blackTextColor}
              }>
              Weather History
            </CustomText>
          </TouchableOpacity>
        </View>
        {focusWeather ? (
          <LineChart
            withVerticalLines={false}
            data={data}
            height={hp('35%')}
            width={wp('100%')}
            chartConfig={{
              ...chartConfig,
              propsForDots: {fill: palette.oliveGreenShade},
            }}
          />
        ) : (
          <BarChart
            data={data}
            withVerticalLines={false}
            height={hp('35%')}
            width={wp('100%')}
            chartConfig={{
              ...chartConfig,
              propsForDots: {fill: palette.oliveGreenShade},
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles_ = StyleSheet.create({
  divider: {
    backgroundColor: palette.grey,
    width: '100%',
    height: 2,
    marginVertical: 12,
  },
  tabOnFocus: {
    color: palette.oliveGreenShade,
    borderBottomColor: palette.oliveGreenShade,
    borderBottomWidth: 1,
    width: '50%',
  },
});
