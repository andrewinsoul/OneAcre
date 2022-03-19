import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useStyles} from '../../styles';
import {CustomText} from './text';

export const Button = ({buttonText, disabled, onPress, btnStyle, txtStyle}) => {
  const styles = useStyles();
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        ...styles.justifyContentCenter,
        ...styles.alignItemCenter,
        ...btnStyle,
      }}>
      <CustomText style={txtStyle}>{buttonText}</CustomText>
    </TouchableOpacity>
  );
};

export const ButtonWithIcon = ({name, onPress, color, style}) => {
  const styles = useStyles();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.roundBorderRadius,
        ...styles.whiteBackground,
        ...styles.justifyContentCenter,
        ...styles.alignItemCenter,
        ...style,
      }}>
      <MaterialIcon size={28} name={name} color={color} />
    </TouchableOpacity>
  );
};
