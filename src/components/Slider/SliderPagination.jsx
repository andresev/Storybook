import React from 'react';
import { SafeAreaView, Animated, useWindowDimensions } from 'react-native';
import SliderStyles from './Slider.styles';

const SliderPagination = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={SliderStyles.paginationContainer}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]; // Range of indicators
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 15, 10],
          extrapolate: 'clamp', // clamping allows it to be the values we provide(slides/pages)
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp', // clamping allows it to be the values we provide(slides/pages)
        });
        return (
          <Animated.View
            key={i.toString()}
            style={[SliderStyles.paginationDot, { width: dotWidth, opacity }]}
          />
        );
      })}
    </SafeAreaView>
  );
};

export default SliderPagination;
