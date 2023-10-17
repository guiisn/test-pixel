import {
  Box, Code, Space, Title,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import LaraProvider from '.';

const code = `
function App() {
  return (
    <LaraProvider>
        {/* rest of the code */}
    </LaraProvider>
  );
}

export default App;
`;

export default {
  title: 'Theming/Provider',
  component: LaraProvider,
  tags: ['autodocs'],
  decorators: [
    () => (
      <Box>
        <Title order={5} fw={500} c="gray">
          The LaraProvider component must be inserted in the
          {' '}
          <Code>App.tsx</Code>
          {' '}
          file to use the custom theme.
        </Title>
        <Space h="lg" />
        <Title order={2} fw={800} c="grey.9">Use:</Title>
        <Space h="lg" />
        <Code block c="gray">{code}</Code>
      </Box>
    ),
  ],
} as Meta<typeof LaraProvider>;

export const Component: StoryObj<typeof LaraProvider> = {};
