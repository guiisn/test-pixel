import {
  AppShell as MantineAppShell,
} from '@mantine/core';
import AppShellHeader, { AppShellHeaderProps } from '../AppShelHeader';
import AppShellNavbar, { AppShellNavbarProps } from '../AppShellNavbar';

export interface AppShellProps {
  navbarProps: AppShellNavbarProps
  headerProps: AppShellHeaderProps
  children?: JSX.Element
}

export default function AppShell({ navbarProps, headerProps, children }: AppShellProps): JSX.Element {
  return (
    <MantineAppShell
      padding="md"
      navbar={(
        <AppShellNavbar
          {...navbarProps}
        />
      )}
      header={(
        <AppShellHeader
          {...headerProps}
        />
        )}
      styles={{
        main: {
          maxHeight: '100%',
        },
      }}
    >
      {children}
    </MantineAppShell>
  );
}
