import React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {palette} from '../../styles/palette';

const ModalAlert = ({
  isModalVisible,
  modalContent,
  toggleModalVisibility,
  animationIn,
  animationOut,
  backdropColor,
  modalStyle = {},
  styleOnModal = {},
  backdropOpacity,
}) => (
  <Modal
    isVisible={isModalVisible}
    onBackButtonPress={toggleModalVisibility}
    onBackdropPress={toggleModalVisibility}
    backdropColor={backdropColor || palette.black}
    backdropOpacity={backdropOpacity || 0.35}
    useNativeDriver
    animationIn={animationIn || 'slideInLeft'}
    animationOut={animationOut || 'slideOutRight'}
    style={styleOnModal}
    animationInTiming={1000}
    animationOutTiming={1000}>
    <View style={[styles.modalViewWrapper, modalStyle]}>{modalContent}</View>
  </Modal>
);

const styles = StyleSheet.create({
  modalViewWrapper: {
    backgroundColor: palette.white,
    justifyContent: 'flex-end',
    bottom: -20,
    marginBottom: 0,

    width: wp('75%'),
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default ModalAlert;
