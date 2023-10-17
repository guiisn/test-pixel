import { Group } from '@mantine/core';
import { Breadcrumbs } from '../../..';
import HeaderReturnButton, { HeaderReturnButtonProps } from '../../Buttons/HeaderReturnButton';
import CurrentCompanyCard, { CurrentCompanyCardProps } from '../../DataDisplay/Cards/CurrentCompany';
import { BreadcrumbsProps } from '../../Navigation/Breadcrumbs';
import NotificationsMenu, { NotificationsMenuProps } from '../../Overlays/Notifications';
import ProfileMenu, { ProfileMenuProps } from '../../Overlays/ProfileMenu';

export interface AppShellHeaderProps {
    headerMarginLeft: {md: number;lg: number;xl: number;sm: number;xs: number;}
    returnButtonProps: HeaderReturnButtonProps
    notificationButtonProps: NotificationsMenuProps
    currentCompanyCardProps: CurrentCompanyCardProps
    breadcrumbsProps: BreadcrumbsProps
    profileMenuProps: ProfileMenuProps
}

export default function AppShellHeader(props: AppShellHeaderProps): JSX.Element {
  const {
    returnButtonProps,
    currentCompanyCardProps,
    notificationButtonProps,
    breadcrumbsProps,
    profileMenuProps,
  } = props;

  return (
    <Group justify="space-between" w="100%">
      <Group>
        <HeaderReturnButton {...returnButtonProps} />
        <Breadcrumbs
          {...breadcrumbsProps}
        />
      </Group>
      <Group>
        <CurrentCompanyCard {...currentCompanyCardProps} />
        <ProfileMenu {...profileMenuProps} />
        <NotificationsMenu {...notificationButtonProps} />
      </Group>
    </Group>
  );
}
