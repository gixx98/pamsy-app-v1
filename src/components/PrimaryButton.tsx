import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import colors from '../assets/colors';

const PrimaryButton = (props:any) => {
  const {onPress, title, disabled} = props
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, disabled && styles.disabledbutton]} disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: colors.light.primary,
    width: '100%',
    marginTop: 16
  },
  buttonText: {
    fontFamily: "inter-semiBold",
    fontSize: 16,
    fontWeight: '600', // Semibold
    color: 'white', // Text color
    textAlign: 'center',
  },
  disabledbutton: {
    backgroundColor: colors.light.subtle,
    opacity: 0.4
  }
});

export default PrimaryButton;
