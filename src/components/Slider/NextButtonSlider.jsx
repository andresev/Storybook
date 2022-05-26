import React, { useRef, useEffect } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Animated,
  View,
  Text,
} from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import SliderStyles from './Slider.styles';

const NextButtonSlider = ({
  percentage,
  scrollTo,
  currentIndex,
  lastIndex,
  lastNextButton,
  lastNextButtonText,
  progressWidth,
}) => {
  const size = 128;
  const strokeWidth = progressWidth || 3;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius; // last Index before 'Get Started'/lastIndex - 1

  const progressAnimation = useRef(new Animated.Value(0)).current; // initial value for opacity.
  const progressRef = useRef(null);

  const animation = (toValue) => Animated.timing(progressAnimation, {
    toValue,
    duration: 250, // duration of progress
    useNativeDriver: true,
  }).start();

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      (value) => {
        const strokeDashoffset = circumference - (circumference * value.value) / 100;

        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage],
    );

    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  if (currentIndex === lastIndex) {
    return (
      <View style={SliderStyles.touchableOpacityContainer}>
        <TouchableOpacity
          style={SliderStyles.touchableOpacity}
          activeOpacity={0.7}
          onPress={lastNextButton}
        >
          <Text style={SliderStyles.touchableOpacityText}>
            {lastNextButtonText || 'NEXT'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={SliderStyles.nextButtonContainer}>
      <Svg width={size} height={size}>
        <G rotation={-90} origin={center}>
          <Circle
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke="#F4338F"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity
        onPress={scrollTo}
        style={SliderStyles.nextButton}
        activeOpacity={0.7}
      >
        <AntDesign name="arrowright" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NextButtonSlider;
