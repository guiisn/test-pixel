import {
  AppShell as MantineAppShell, useMantineTheme,
} from '@mantine/core';
import AppShellHeader, { AppShellHeaderProps } from '../AppShelHeader';
import AppShellNavbar, { AppShellNavbarProps } from '../AppShellNavbar';

export interface AppShellProps {
  navbarProps: AppShellNavbarProps
  headerProps: AppShellHeaderProps
  children?: JSX.Element
}

export default function AppShell({ navbarProps, headerProps, children }: AppShellProps): JSX.Element {
  const theme = useMantineTheme();

  return (
    <MantineAppShell
      padding="md"
      // navbar={(
      //   <AppShellNavbar
      //     {...navbarProps}
      //   />
      // )}
      // header={(
        // <AppShellHeader
        //   {...headerProps}
        // />
      //   )}
      styles={{
        main: {
          maxHeight: '100%',
        },
      }}
    >
      <AppShellNavbar
        {...navbarProps}
      />

      <MantineAppShell.Header
        ml={headerProps.headerMarginLeft}
        h="7.5rem"
        style={{
          backgroundColor: theme.colors.violet[0],
          border: 0,
          maxHeight: '7.5rem',
          display: 'flex',
          alignItems: 'center',
          padding: '0 2.5rem',
        }}
      >
        <AppShellHeader
          {...headerProps}
        />
      </MantineAppShell.Header>

      <MantineAppShell.Main>
        {children}
      </MantineAppShell.Main>
    </MantineAppShell>
  );
}
