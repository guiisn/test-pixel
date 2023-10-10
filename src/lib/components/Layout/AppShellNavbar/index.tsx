import { Group, Navbar, Stack } from '@mantine/core';
import logoBlack from '../../../assets/logo.svg';

export interface AppShellNavbarProps {
    navbarWidths: {
        md: number;
        lg: number;
        xl: number;
        sm: number;
        xs: number;
    }
    options?: JSX.Element
    footer?: JSX.Element
}

export default function AppShellNavbar({ navbarWidths, options, footer }: AppShellNavbarProps): JSX.Element {
  return (
    <Navbar
      data-testid="app-shell-navbar"
      width={navbarWidths}
      height="100%"
      sx={{
        top: 0,
        border: 0,
        boxShadow: '3px 0px 28px 0px rgba(95, 90, 97, 0.14)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Navbar.Section
        sx={(theme) => ({
          borderBottom: `1px solid ${theme.colors.violet[4]}`,
        })}
      >
        <Group
          position="center"
          align="center"
          sx={{ height: '7.5rem' }}
        >
          <img src={logoBlack} alt="LARA" style={{ width: '9rem' }} />
        </Group>
      </Navbar.Section>
      <Navbar.Section>
        <Stack sx={{ height: 'calc(100vh - 15rem)' }}>
          {options && options}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack sx={(theme) => ({ height: '7.5rem', borderTop: `1px solid ${theme.colors.gray[1]}` })}>
          {footer && footer}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
