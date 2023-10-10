import {
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import { Bell, ChevronLeft } from 'tabler-icons-react';
import AppShell from '.';
import NoResults from '../../Feedbacks/NoResults';
import { appShellFooter } from '../AppShellNavbar/mock/appShellFooter';
import { mockOptions } from '../AppShellNavbar/mock/permissions';
import NavLinkList from '../NavLinkList';

export default {
  title: 'Components/Layout/AppShell',
  component: AppShell,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box>
        {Story()}
      </Box>
    ),
  ],
} as Meta<typeof AppShell>;

const options = <NavLinkList options={mockOptions()} />;

const footer = <NavLinkList options={appShellFooter} variant="footer" />;

const navbarWidths = {
  md: 187.5, lg: 225, xl: 262.5, sm: 150, xs: 93.75,
};

export const Component: StoryObj<typeof AppShell> = {
  args: {
    children: (<NoResults />),
    navbarProps: {
      options,
      footer,
      navbarWidths,
    },
    headerProps: {
      headerMarginLeft: navbarWidths,
      pageTitle: 'Page title',
      returnButtonProps: {
        leftIcon: <ChevronLeft />,
        children: 'Back',
      },
      currentCompanyCardProps: {
        activeCompany: 'Sorridents (Setor Garavelo) Aparecida de Goiânia/GO',
      },
      notificationButtonProps: {
        tooltipTitle: 'Notifications',
        actionsCounter: '01',
        children: <Bell />,
        color: 'violet.4',
        variant: 'outline',
        radius: '50%',
      },
    },
  },
};
