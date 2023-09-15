import type { Preview } from '@storybook/react';
import { decorators } from './customPreview';
import '../src/styles/global.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,

      },
    },
  },
  decorators
};

export default preview;
