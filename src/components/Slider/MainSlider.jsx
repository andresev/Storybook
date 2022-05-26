import React, { useState, useRef } from 'react';
import { View, FlatList, Animated, SafeAreaView } from 'react-native';
import SliderItem from './SliderItem';
import SliderPagination from './SliderPagination';
import NextButtonSlider from './NextButtonSlider';
import SliderStyles from './Slider.styles';

import slides from './slides';

const MainSlider = ({
  lastNextButton,
  lastNextButtonText,
  progressWidth,
  //slides,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const onViewableItemsChanged = useRef(({ viewableItems, changed }) => {
    if (changed && changed.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
    waitForInteraction: true,
    // minimumViewTime: 5,
  }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1); // Only change made, to fix the 'stuttering' issue.
    } else {
      console.log('last item.');
    }
  };

  return (
    <SafeAreaView style={SliderStyles.container}>
      <View>
        <FlatList
          data={slides}
          renderItem={({ item }) => <SliderItem item={item} />}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          ref={slidesRef}
          scrollEnabled
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
        />
        <SliderPagination data={slides} scrollX={scrollX} />

        <NextButtonSlider
          scrollTo={scrollTo}
          percentage={(currentIndex + 1) * (100 / (slides.length - 1))}
          currentIndex={currentIndex}
          lastIndex={slides.length - 1} // This helps determine last slide before new button
          lastNextButton={lastNextButton}
          lastNextButtonText={lastNextButtonText}
          progressWidth={progressWidth}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainSlider;
