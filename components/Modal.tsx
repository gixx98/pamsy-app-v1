import React, { useState } from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const ModalComponent = ({ isVisible, onClose, onElementClick }:any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => onElementClick('Medicine')}>
            <Text>Medicine</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onElementClick('Vaccination')}>
            <Text>Vaccination</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onElementClick('Vitamin')}>
            <Text>Vitamin</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onElementClick('Groom')}>
            <Text>Groom</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
});

export default ModalComponent;
