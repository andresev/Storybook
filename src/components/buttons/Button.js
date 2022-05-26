import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const BlueButton = ({ onPress, text, color }) => {
  const bgColor = 'red';
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
        <Text>{text ? text : 'Click me!'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BlueButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderWidth: 2,
    borderRadius: 50,
  },
});
