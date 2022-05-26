import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ onPress, text, color }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={[
          styles.buttonContainer,
          {
            backgroundColor: color ? color : 'white',
            borderColor: color ? color : 'black',
          },
        ]}
      >
        <Text style={[styles.buttonText, { color: color ? 'white' : color }]}>
          {text ? text : 'Click me!'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
  },
});
