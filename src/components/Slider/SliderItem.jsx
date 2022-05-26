import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  useWindowDimensions,
} from 'react-native';
import SliderStyles from './Slider.styles';

const SliderItem = ({ item }) => {
  const { width } = useWindowDimensions(); // Horizontal: width , Vertical: height
  return (
    <SafeAreaView style={[SliderStyles.container, { width }]}>
      <Image
        source={item.image}
        style={[SliderStyles.image, { width, resizeMode: 'contain' }]}
      />

      <View style={SliderStyles.textContainer}>
        <Text style={SliderStyles.title}>{item.title}</Text>
        <Text style={SliderStyles.description}>{item.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SliderItem;
