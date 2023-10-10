import { Group, Header } from '@mantine/core';
import { Breadcrumbs } from '../../..';
import HeaderReturnButton, { HeaderReturnButtonProps } from '../../Buttons/HeaderReturnButton';
import CurrentCompanyCard, { CurrentCompanyCardProps } from '../../DataDisplay/Cards/CurrentCompany';
import { BreadcrumbsProps } from '../../Navigation/Breadcrumbs';
import NotificationsMenu, { NotificationsMenuProps } from '../../Overlays/Notifications';
import ProfileMenu from '../../Overlays/ProfileMenu';

export interface AppShellHeaderProps {
    headerMarginLeft: {md: number;lg: number;xl: number;sm: number;xs: number;}
    returnButtonProps: HeaderReturnButtonProps
    notificationButtonProps: NotificationsMenuProps
    currentCompanyCardProps: CurrentCompanyCardProps
    breadcrumbsProps: BreadcrumbsProps
}

export default function AppShellHeader(props: AppShellHeaderProps): JSX.Element {
  const {
    headerMarginLeft,
    returnButtonProps,
    currentCompanyCardProps,
    notificationButtonProps,
    breadcrumbsProps,
  } = props;

  return (
    <Header
      data-testid="app-shell-header"
      ml={headerMarginLeft}
      height="7.5rem"
      sx={(theme) => ({
        backgroundColor: theme.colors.violet[0],
        border: 0,
        maxHeight: '7.5rem',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2.5rem',
      })}
    >
      <Group position="apart" w="100%">
        <Group>
          <HeaderReturnButton {...returnButtonProps} />
          <Breadcrumbs
            {...breadcrumbsProps}
          />
        </Group>
        <Group>
          <CurrentCompanyCard {...currentCompanyCardProps} />
          <ProfileMenu />
          <NotificationsMenu {...notificationButtonProps} />
        </Group>
      </Group>
    </Header>
  );
}
