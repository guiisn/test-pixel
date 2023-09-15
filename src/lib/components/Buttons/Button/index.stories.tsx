import { Meta, StoryObj } from '@storybook/react';

import Button, { CustomButtonProps } from '.';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
    display: {
      options: ['block', 'none'],
      control: { type: 'inline-radio' },
    },
    radius: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
  },
  decorators: [
    (Story) => <div>{Story()}</div>,
  ],
} as Meta<CustomButtonProps>;

const defaultProps = {
  size: 'md',
  radius: 'md',
  disabled: false,
  color: 'violet.4',
  display: 'block',
  w: '10rem',
  loading: false,
};

export const PrimaryButton: StoryObj<CustomButtonProps> = {
  args: {
    children: 'Button',
    ...defaultProps,
  },
};

export const OutlineButton: StoryObj<CustomButtonProps> = {
  args: {
    children: 'Button',
    variant: 'outline',
    ...defaultProps,
  },
};

export const LightButton: StoryObj<CustomButtonProps> = {
  args: {
    children: 'Button',
    variant: 'light',
    ...defaultProps,
  },
};

export const SubtleButton: StoryObj<CustomButtonProps> = {
  args: {
    children: 'Button',
    variant: 'subtle',
    ...defaultProps,
  },
};
