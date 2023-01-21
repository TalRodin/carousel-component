import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArrowButton from './ArrowButton';

export default {
  title: 'ArrowButton',
  component: ArrowButton,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      defaultValue: 'primary',
    },
    arrowButtonsBorder: {
      options: [true, false],
      control: { type: 'boolean' },
      defaultValue: false,
    },
    arrowButtonSize: {
      control: 'text',
      defaultValue: '0 0',
    },
    arrowButtonBackgroundColor: {
      control: 'color',
      defaultValue: 'transparent',
    },
    arrowButtonsBorderSize: {
      control: 'number',
    },
    arrowButtonsColor: {
      control: 'color',
      defaultValue: '#ffffff',
    },
    arrowButtonBorderRadius: {
      control: 'number',
      arrowButtonBorderRadius: 12,
    },
    arrowButtonMargin: {
      control: 'text',
      defaultValue: '0 0',
    },
    arrowColor: {
      control: 'color',
      defaultValue: '#000000',
    },
  },
} as ComponentMeta<typeof ArrowButton>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArrowButton> = (args) => (
  <ArrowButton {...args} />
);
export const ArrowButtonPrimary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ArrowButtonPrimary.args = {
  variant: 'primary',
  arrowButtonsBorder: false,
  arrowButtonSize: '0 0',
  arrowButtonBackgroundColor: 'transparent',
  arrowButtonsColor: '#ffffff',
  arrowButtonBorderRadius: 50,
  arrowButtonMargin: '1 1',
  arrowColor: '#000000',
};
