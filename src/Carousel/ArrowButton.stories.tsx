import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArrowButton from './ArrowButton';

export default {
  title: 'ArrowButton',
  component: ArrowButton,
  argTypes: {
    parameters: {
      a11y: { element: '#root' },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      defaultValue: 'primary',
    },
    arrowButtonsBorder: {
      options: [true, false],
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Add border around the arrow button.',
    },
    arrowButtonSize: {
      control: 'text',
      defaultValue: '0 0',
      description:
        'Size of arrow button in px. First value is top, bottom and second value left, right.',
    },
    arrowButtonBackgroundColor: {
      control: 'color',
      defaultValue: 'transparent',
      description: 'Color of the background.',
    },
    arrowButtonsBorderSize: {
      control: 'number',
      description: 'The width of the border around the button.',
    },
    arrowButtonsColor: {
      control: 'color',
      defaultValue: '#ffffff',
      description: 'The color of the arrow/icon.',
    },
    arrowButtonBorderRadius: {
      control: 'number',
      arrowButtonBorderRadius: 12,
      description: 'The color of the arrow/icon.',
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
  <div
    className='buttons-wrapper'
    style={{ width: 'auto', height: '100px', position: 'relative' }}
  >
    <ArrowButton {...args} />
  </div>
);
export const ArrowButtonPrimary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ArrowButtonPrimary.args = {
  variant: 'primary',
  arrowButtonsBorder: true,
  arrowButtonSize: '0 0',
  arrowButtonBackgroundColor: 'transparent',
  arrowButtonsColor: '#ffffff',
  arrowButtonBorderRadius: 50,
  arrowButtonMargin: '1 1',
  arrowColor: '#000000',
};
