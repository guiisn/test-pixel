import { Group, Title } from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import Tabs, { CustomTabsProps } from '.';
import NoResults from '../../Feedbacks/NoResults';
import DataTable from '../../Tables/DataTable';
import { tableColumns, tableRows } from '../../Tables/DataTable/index.stories';

export default {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        {Story()}
      </div>
    ),
  ],
} as Meta<CustomTabsProps>;

export const Component: StoryObj<CustomTabsProps> = {
  args: {
    tabs: [
      { text: 'Gallery', value: 'gallery' },
      { text: 'Messages', value: 'messages' },
      { text: 'Settings', value: 'settings' },
    ],
    defaultValue: 'gallery',
    panels: [
      { value: 'gallery', component: (<Group><NoResults /></Group>) },
      { value: 'messages', component: (<Group><DataTable rows={tableRows} columns={tableColumns} /></Group>) },
      { value: 'settings', component: <Title order={2}>Settings</Title> },
    ],
  },
};
