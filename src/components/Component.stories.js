import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../storybook/stories/CenterView';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import TestComponent from './buttons/TestComponent';
import Button from './buttons/Button';
import MainSlider from './Slider/MainSlider';

storiesOf('Test Component', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('example', () => <TestComponent />);

storiesOf('Buttons', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Blue Button', () => (
    <Button onPress={action('onPress')} text={text('Hello')} color="blue" />
  ))
  .add('Red Button', () => (
    <Button onPress={action('onPress')} text={text('Hello')} color="red" />
  ));

storiesOf('Sliders', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Main Slider', () => (
    <MainSlider
      lastNextButton={action('Last button pressed!')}
      lastNextButtonText={text('Submit')}
      progressWidth={10}
    />
  ));
