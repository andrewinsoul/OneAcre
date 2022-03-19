import React from 'react';
import {Text} from 'react-native';
import {useStyles} from '../../styles';

export const CustomText = ({children, style}) => {
  const styles = useStyles();
  return (
    <Text
      style={{
        ...styles.fontFamily,
        ...styles.textColor,
        ...styles.textSize12,
        ...style,
      }}>
      {children}
    </Text>
  );
};
