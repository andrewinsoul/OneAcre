import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {palette} from './palette';
import {useTheme} from './themes';

export const useStyles = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    spacedContainer: {
      width: theme.width['92p'],
      marginHorizontal: theme.spacing['4p'],
      backgroundColor: palette.white,
    },
    whiteBackground: {
      backgroundColor: palette.white,
    },
    h60p: {
      height: hp('60%'),
    },
    redBackground: {
      backgroundColor: palette.red,
    },
    oliveGreenBackground: {
      backgroundColor: palette.oliveGreenShade,
    },
    bottomView: {
      bottom: 0,
      borderTopStartRadius: 18,
      borderTopEndRadius: 18,
      backgroundColor: '#ffffff',
    },
    container: {
      flex: 1,
    },
    flexGrow1: {
      flexGrow: 1,
    },
    xtraSmallBorderRadius: {borderRadius: 5},
    smallBorderRadius: {borderRadius: 8},
    roundBorderRadius: {
      width: 59,
      height: 59,
      borderRadius: 50,
    },
    mediumBorderRadius: {borderRadius: 24},
    row: {
      flexDirection: 'row',
    },
    fullWidth: {
      width: theme.width['100p'],
    },
    fullHeight: {
      height: theme.height['100p'],
    },
    lineHeight32: {
      lineHeight: 32,
    },
    w150: {
      width: 150,
    },
    w50: {
      width: 50,
    },
    w56p: {
      width: '56%',
    },
    h150: {
      height: 150,
    },
    h45: {
      height: 45,
    },
    h1: {
      height: 1,
    },
    h3: {
      height: 3,
    },
    h220: {
      height: 220,
    },
    borderWidth1: {
      borderWidth: 1,
    },
    borderWidth2: {
      borderWidth: 2,
    },
    flex0: {
      flex: 0,
    },
    flex1: {
      flex: 1,
    },
    'flex0.24': {
      flex: 0.24,
    },
    'flex0.5': {
      flex: 0.5,
    },
    borderBottomWidth2: {
      borderBottomWidth: 2,
    },
    noBorder: {
      borderWidth: 0,
    },
    borderBottomWidth1: {
      borderBottomWidth: 1,
    },
    halfWidth: {
      width: theme.width['50p'],
    },
    quarterWidth: {
      width: theme.width['25p'],
    },
    smallWidth: {
      width: theme.width['10p'],
    },
    '75pWidth': {
      width: theme.width['75p'],
    },
    centerSelf: {
      alignSelf: 'center',
    },
    startSelf: {
      alignSelf: 'flex-start',
    },
    xtraSmallWidth: {
      width: theme.width['2p'],
    },
    alignItemStart: {
      alignItems: 'flex-start',
    },
    alignItemEnd: {
      alignItems: 'flex-end',
    },
    squareImg120: {
      width: 120,
      height: 120,
    },
    alignItemCenter: {
      alignItems: 'center',
    },
    justifyContentSpaceBtwn: {
      justifyContent: 'space-between',
    },
    containerCenter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    appLoadingImg: {
      width: 57,
      height: 47,
      transform: [{scale: 1.5}],
      marginBottom: 30,
    },
    justifyContentSpaceAround: {
      justifyContent: 'space-around',
    },
    justifyContentCenter: {
      justifyContent: 'center',
    },
    justifyContentSpaceEvenly: {
      justifyContent: 'space-evenly',
    },
    'ml-2p': {
      marginLeft: theme.spacing['2p'],
    },
    'ml-6': {
      marginLeft: 6,
    },
    'ml-10': {
      marginLeft: 10,
    },
    'ml-3': {
      marginLeft: 3,
    },
    'mr-2p': {
      marginRight: theme.spacing['2p'],
    },
    'mh-2p': {
      marginHorizontal: theme.spacing['2p'],
    },
    'mt-2p': {
      marginTop: theme.spacing['2p'],
    },
    'mb-2p': {
      marginBottom: theme.spacing['2p'],
    },
    'mv-2p': {
      marginVertical: theme.spacing['2p'],
    },
    'mv-4': {
      marginVertical: 4,
    },
    'ml-4p': {
      marginLeft: theme.spacing['4p'],
    },
    'mr-4p': {
      marginRight: theme.spacing['4p'],
    },
    'mr-8': {
      marginRight: 8,
    },
    'mh-4p': {
      marginHorizontal: theme.spacing['4p'],
    },
    'mt-4p': {
      marginTop: theme.spacing['4p'],
    },
    'mb-4p': {
      marginBottom: theme.spacing['4p'],
    },
    'mv-4p': {
      marginVertical: theme.spacing['4p'],
    },
    'ml-6p': {
      marginLeft: theme.spacing['6p'],
    },
    'mr-6p': {
      marginRight: theme.spacing['6p'],
    },
    'mh-6p': {
      marginHorizontal: theme.spacing['6p'],
    },
    'mt-6p': {
      marginTop: theme.spacing['6p'],
    },
    'mt-84': {
      marginTop: 84,
    },
    'mb-6p': {
      marginBottom: theme.spacing['6p'],
    },
    'mv-6p': {
      marginVertical: theme.spacing['6p'],
    },
    'ml-8p': {
      marginLeft: theme.spacing['8p'],
    },
    'mr-8p': {
      marginRight: theme.spacing['8p'],
    },
    'mh-8p': {
      marginHorizontal: theme.spacing['8p'],
    },
    'mh-8': {
      marginHorizontal: 8,
    },
    'mt-8p': {
      marginTop: theme.spacing['8p'],
    },
    'mb-8p': {
      marginBottom: theme.spacing['8p'],
    },
    'mv-8p': {
      marginVertical: theme.spacing['8p'],
    },
    'ml-10p': {
      marginLeft: theme.spacing['10p'],
    },
    'mr-10p': {
      marginRight: theme.spacing['10p'],
    },
    'mh-10p': {
      marginHorizontal: theme.spacing['10p'],
    },
    'mt-10p': {
      marginTop: theme.spacing['10p'],
    },
    'mb-10p': {
      marginBottom: theme.spacing['10p'],
    },
    'mv-10p': {
      marginVertical: theme.spacing['10p'],
    },
    'mv-12': {
      marginVertical: 12,
    },
    'ml-14p': {
      marginLeft: theme.spacing['14p'],
    },
    'mr-14p': {
      marginRight: theme.spacing['14p'],
    },
    'mh-14p': {
      marginHorizontal: theme.spacing['14p'],
    },
    'mt-14p': {
      marginTop: theme.spacing['14p'],
    },
    'mb-14p': {
      marginBottom: theme.spacing['14p'],
    },
    'mv-14p': {
      marginVertical: theme.spacing['14p'],
    },

    'pl-2p': {
      paddingLeft: theme.spacing['2p'],
    },
    'pr-2p': {
      paddingRight: theme.spacing['2p'],
    },
    'ph-2p': {
      paddingHorizontal: theme.spacing['2p'],
    },
    'pt-2p': {
      paddingTop: theme.spacing['2p'],
    },
    'pb-2p': {
      paddingBottom: theme.spacing['2p'],
    },
    'pv-2p': {
      paddingVertical: theme.spacing['2p'],
    },
    'pl-4p': {
      paddingLeft: theme.spacing['4p'],
    },
    'pr-4p': {
      paddingRight: theme.spacing['4p'],
    },
    'ph-4p': {
      paddingHorizontal: theme.spacing['4p'],
    },
    'pt-4p': {
      paddingTop: theme.spacing['4p'],
    },
    'pb-4p': {
      paddingBottom: theme.spacing['4p'],
    },
    'pv-4p': {
      paddingVertical: theme.spacing['4p'],
    },
    'pl-6p': {
      paddingLeft: theme.spacing['6p'],
    },
    'pr-6p': {
      paddingRight: theme.spacing['6p'],
    },
    'ph-6p': {
      paddingHorizontal: theme.spacing['6p'],
    },
    'pt-6p': {
      paddingTop: theme.spacing['6p'],
    },
    'pb-6p': {
      paddingBottom: theme.spacing['6p'],
    },
    'pv-6p': {
      paddingVertical: theme.spacing['6p'],
    },
    'pl-8p': {
      paddingLeft: theme.spacing['8p'],
    },
    'pr-8p': {
      paddingRight: theme.spacing['8p'],
    },
    'ph-8p': {
      paddingHorizontal: theme.spacing['8p'],
    },
    'pt-8p': {
      paddingTop: theme.spacing['8p'],
    },
    'pb-8p': {
      paddingBottom: theme.spacing['8p'],
    },
    'pv-8p': {
      paddingVertical: theme.spacing['8p'],
    },
    'pl-10p': {
      paddingLeft: theme.spacing['10p'],
    },
    'pr-10p': {
      paddingRight: theme.spacing['10p'],
    },
    'ph-10p': {
      paddingHorizontal: theme.spacing['10p'],
    },
    'pt-10p': {
      paddingTop: theme.spacing['10p'],
    },
    'pb-10p': {
      paddingBottom: theme.spacing['10p'],
    },
    'pv-10p': {
      paddingVertical: theme.spacing['10p'],
    },
    'pl-14p': {
      paddingLeft: theme.spacing['14p'],
    },
    'pr-14p': {
      paddingRight: theme.spacing['14p'],
    },
    'ph-14p': {
      paddingHorizontal: theme.spacing['14p'],
    },
    'pt-14p': {
      paddingTop: theme.spacing['14p'],
    },
    'pb-14p': {
      paddingBottom: theme.spacing['14p'],
    },
    'pv-14p': {
      paddingVertical: theme.spacing['14p'],
    },
    'pv-8': {
      paddingVertical: 8,
    },
    'pv-12': {
      paddingVertical: 12,
    },
    'pv-1': {
      paddingVertical: 1,
    },
    'p-12': {
      padding: 12,
    },
    'p-14': {
      padding: 14,
    },
    'p-15': {
      padding: 15,
    },
    'p-8': {
      padding: 8,
    },
    'p-4': {
      padding: 4,
    },
    'p-2': {
      padding: 2,
    },
    'mv-16': {
      marginVertical: 16,
    },
    'mb-32': {
      marginBottom: 32,
    },
    'mb-24': {
      marginBottom: 24,
    },
    'mb-30': {
      marginBottom: 30,
    },
    'mb-20': {
      marginBottom: 20,
    },
    'mb-10': {
      marginBottom: 10,
    },
    'mb-5': {
      marginBottom: 5,
    },
    'mb-1': {marginBottom: 1},
    'mt-30': {
      marginBottom: 30,
    },
    'mb-12': {
      marginBottom: 12,
    },
    'mb-8': {
      marginBottom: 8,
    },
    'mt-4': {
      marginTop: 4,
    },
    'mt-1': {
      marginTop: 1,
    },
    'mt-8': {
      marginTop: 8,
    },
    'mt-12': {
      marginTop: 12,
    },
    'mt-32': {
      marginTop: 32,
    },
    'mb-54': {
      marginBottom: 54,
    },
    'mt-54': {
      marginTop: 54,
    },
    'mv-26': {
      marginVertical: 26,
    },
    // text
    alignTextCenter: {
      textAlign: 'center',
    },
    alignTextLeft: {
      textAlign: 'left',
    },
    textAlignVerticalTop: {
      textAlignVertical: 'top',
    },
    absolutePosition: {
      position: 'absolute',
    },
    bottom40: {
      bottom: 40,
    },
    right20: {
      right: 20,
    },
    bottom0: {
      bottom: 0,
    },
    bottom200: {
      bottom: 200,
    },
    bottom64: {
      bottom: 64,
    },
    textSize8: {fontSize: 8},
    textColor: {color: '#0C1231'},
    whiteTextColor: {color: '#FFFFFF'},
    grayTextColor: {color: palette.grey},
    oliveGreenTextColor: {color: palette.oliveGreenShade},
    blackTextColor: {color: palette.black},
    blackerTextColor: {color: palette.strongBlack},
    textSize12: {fontSize: 12},
    textSize16: {fontSize: 16},
    textSize18: {fontSize: 18},
    textSize24: {fontSize: 24},
    boldWeight: {fontWeight: 'bold'},
    fontFamily: {fontFamily: 'Roboto'},
    fontFamilyBold: {fontFamily: 'Roboto'},
  });
  return styles;
};
