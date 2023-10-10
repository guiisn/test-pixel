import { Meta, StoryObj } from '@storybook/react';

import FileDropzone from '.';

export default {
  title: 'Components/Inputs/FileDropzone',
  component: FileDropzone,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    error: {
      type: 'string',
    },
    variant: {
      options: ['dashed', 'solid'],
      control: { type: 'inline-radio' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        {Story()}
      </div>
    ),
  ],
} as Meta<typeof FileDropzone>;

export const Component: StoryObj<typeof FileDropzone> = {
  args: {
    title: 'Procedure files',
    subtitle: 'Drag drop the file, or click here to select directly from your files.',
    sizeText: 'Maximum size 5mb, we accept png, pdf, and jpg',
    onDrop: (files) => console.log('accepted files', files),
    onReject: (files) => console.log('rejected files', files),
    maxSize: 3 * 1024 ** 2,
    fileName: 'File.png',
  },
};
