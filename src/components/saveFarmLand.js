import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, Keyboard} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useStyles} from '../styles';
import {palette} from '../styles/palette';
import {Button} from './common/button';
import {CustomText} from './common/text';

export const SaveFarmLandAlert = ({farmSize, onSaveAction, discardAction}) => {
  const styles = useStyles();
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [farmLabel, setFarmLabel] = useState('');
  const [disableSaveBtn, setDisableSaveBtn] = useState(true);
  const [discardPressed, setDiscardPressed] = useState(false);

  const handleTextInputChange = event => {
    const {text} = event;
    text ? setDisableSaveBtn(false) : setDisableSaveBtn(true);
    setFarmLabel(text);
  };

  const onSave = async () => {
    onSaveAction(farmLabel);
  };

  const keyboardDidShow = () => {
    setIsKeyboardVisible(true);
  };

  const keyboardDidHide = () => {
    setIsKeyboardVisible(false);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );
    const componentWillUnmount = () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
    return componentWillUnmount;
  }, []);

  const now = JSON.stringify(new Date()).split('T')[0].substring(1);

  return (
    <>
      {discardPressed ? null : (
        <View
          style={{
            ...styles.row,
            ...styles.bottom40,
            ...styles.spacedContainer,
            ...styles.spacedContainer,
            ...styles.smallBorderRadius,
            ...styles.justifyContentSpaceBtwn,
            ...styles['p-15'],
          }}>
          <View>
            <CustomText style={{...styles.blackTextColor}}>Size</CustomText>
            <CustomText
              style={{...styles.blackerTextColor, ...styles.fontFamilyBold}}>
              {farmSize}
            </CustomText>
          </View>
          <View>
            <CustomText style={{...styles.blackTextColor}}>
              Date Registered
            </CustomText>
            <CustomText
              style={{...styles.blackerTextColor, ...styles.fontFamilyBold}}>
              {now}
            </CustomText>
          </View>
        </View>
      )}
      <View
        style={{
          ...styles.bottomView,
          height: isKeyboardVisible ? hp('28%') : hp('25%'),
        }}>
        {discardPressed ? (
          <View style={{...styles.spacedContainer, ...styles['mt-10p']}}>
            <CustomText>
              Note that your data will be lost{'\n\n'}Are you sure you want to
              stop this recording?
            </CustomText>
          </View>
        ) : (
          <View style={{...styles.spacedContainer, ...styles['mt-12']}}>
            <CustomText style={{...styles.grayTextColor, ...styles['mb-10']}}>
              Farm Label *
            </CustomText>
            <TextInput
              placeholderTextColor={palette.black}
              placeholder="Label your farm"
              onChangeText={text => handleTextInputChange({text})}
              value={farmLabel}
              style={styles_.inputStyle}
            />
          </View>
        )}
        <View
          style={{
            ...styles.row,
            ...styles.spacedContainer,
            ...styles.absolutePosition,
            ...styles.bottom40,
            ...styles.justifyContentSpaceBtwn,
          }}>
          <Button
            buttonText={discardPressed ? 'Yes, Got it!' : 'Discard'}
            onPress={
              discardPressed ? discardAction : () => setDiscardPressed(true)
            }
            txtStyle={{...styles.whiteTextColor, ...styles.boldWeight}}
            btnStyle={{
              ...styles_.btnStyle,
              ...styles.redBackground,
            }}
          />

          <Button
            buttonText={discardPressed ? 'No, keep on' : 'Save'}
            disabled={discardPressed ? false : disableSaveBtn}
            onPress={discardPressed ? () => setDiscardPressed(false) : onSave}
            txtStyle={{...styles.whiteTextColor, ...styles.boldWeight}}
            btnStyle={
              discardPressed
                ? {
                    ...styles_.btnStyle,
                    backgroundColor: palette.oliveGreenShade,
                  }
                : {
                    ...styles_.btnStyle,
                    backgroundColor: disableSaveBtn
                      ? palette.faintOliveGreen
                      : palette.oliveGreenShade,
                  }
            }
          />
        </View>
      </View>
    </>
  );
};

const styles_ = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#EFF5F4',
    padding: 8,
    borderRadius: 6,
    borderColor: '#EFF5F4',
    color: 'black',
    borderWidth: 1,
  },
  btnStyle: {
    borderRadius: 8,
    width: '45%',
    padding: 15,
  },
});
