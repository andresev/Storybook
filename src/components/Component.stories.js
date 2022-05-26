import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../storybook/stories/CenterView';
import { action } from '@storybook/addon-actions';
import { button, knob, object, text } from '@storybook/addon-knobs';

import TestComponent from './buttons/TestComponent';
import Button from './buttons/Button';
import MainSlider from './Slider/MainSlider';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import CalendarPicker from 'react-native-calendar-picker';

storiesOf('Test Component', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('example', () => (
    <CalendarPicker onDateChange={action('onDateChange')} />
  ));

storiesOf('Buttons', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Blue Button', () => (
    <Button
      onPress={action('Button Pressed')}
      text={text('Button text')}
      color={text('Color')}
    />
  ));

storiesOf('Sliders', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Main Slider', () => (
    <MainSlider
      lastNextButton={action('Last button pressed!')}
      lastNextButtonText={text('Last button text')}
      progressWidth={10}
    />
  ));
