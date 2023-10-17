/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Anchor,
  Box,
  Center, Group, Menu, Stack, Text, Tooltip, useMantineTheme,
} from '@mantine/core';
import { useState } from 'react';
import { Bell, Dots } from 'tabler-icons-react';
import { Button, NoResults } from '../../..';
import './index.css';
import { NotificationType, PendingFilterType, RecentFilterType } from './types/filter';
import Loader from '../../Feedbacks/Loader';
import NotificationButton from '../../Buttons/Notifications';
import classes from './Notifications.module.css';

export interface NotificationsMenuProps {
    isLoading?: boolean
    unreadNotificationsCount: number
    recentFilter: RecentFilterType
    pendingFilter: PendingFilterType
    notifications: NotificationType[]
    onChangeFilter: (filter: any) => void
    onDetailsClick: () => void
}

export type OptionTypes = 'recent' | 'pending'

export default function NotificationsMenu({
  isLoading,
  unreadNotificationsCount,
  pendingFilter,
  recentFilter,
  notifications,
  onChangeFilter,
  onDetailsClick,
}: NotificationsMenuProps): JSX.Element {
  const [open, setOpen] = useState<number>(0);
  const [selectedOption, setOption] = useState<OptionTypes>('recent');
  const { colors } = useMantineTheme();

  const filters = [
    { key: 'recent', label: 'Recentes' },
    { key: 'pending', label: 'Pendentes' },
  ];

  return (
    <Menu
      position="left-start"
      shadow="lg"
      radius="lg"
      width="36.75rem"
      offset={10}
      onOpen={() => {
        //   const el = document.createElement('div');
        //   el.id = 'notification_widget_overlay';
        //   document.body.prepend(el);
        setOpen(1);
      }}
      onClose={() => {
        setOpen(0);
        //   const el = document.getElementById('notification_widget_overlay');
        //   if (el) el.remove();
      }}
    >
      <Menu.Target>
        <Group m={0}>
          <Center inline className={`${classes.notificationButton} ${open ? classes.violetBackground : ''}`}>
            <Bell color={open ? 'white' : colors.violet[4]} size={30} />

            {unreadNotificationsCount > 0 && (
              <Box className={classes.badge}>
                {!isLoading ? unreadNotificationsCount : '...'}
              </Box>
            )}
          </Center>
        </Group>
      </Menu.Target>

      <Menu.Dropdown className={classes.dropdown}>
        <Stack h="41.875rem" style={{ gap: 0 }}>
          <Stack className={classes.header} id="header">
            <Group justify="space-between">
              <Text className={classes.heading}>Titulo</Text>
              <Tooltip label="Detalhes">
                <Anchor role="button" onClick={onDetailsClick}>
                  <Dots color={colors.gray[4]} />
                </Anchor>
              </Tooltip>
            </Group>

            <Group>
              {filters?.map((item, index) => {
                const key = item.key as OptionTypes;
                const props = {
                  onClick: () => {
                    setOption(key);
                    if (key === 'recent') {
                      onChangeFilter(recentFilter);
                    } else {
                      onChangeFilter(pendingFilter);
                    }
                  },
                };
                return (
                  <Button
                    variant={selectedOption === key ? 'filled' : 'light'}
                    c="violet.4"
                    key={index}
                    {...props}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Group>
          </Stack>

          <Box className={classes.scroll} id="teste">
            {(isLoading && !notifications?.length) ? (
              <Group h="100%" align="center" justify="center">
                <Loader variant="dots" />
              </Group>
            ) : notifications?.map((notification, index) => (
              <NotificationButton
                key={index}
                id={notification?.id ?? '-'}
                isVisualized={notification?.isVisualized ?? false}
                message={notification?.message ?? '-'}
                prize={notification?.prize ?? '-'}
                reason={notification?.reason ?? '-'}
                title={notification?.title ?? '-'}
              />
            )) }

            {(!notifications?.length && !isLoading) && (
              <NoResults variant="notifications" />
            )}
          </Box>
          <Box
            style={{
              borderTop: '1px solid blue',
              height: '15%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Anchor
              fz="1.3125rem"
              fw={700}
              c="violet.4"
              className={classes.anchor}
              onClick={onDetailsClick}
              role="button"
              target="_self"
            >
              Ver todas
            </Anchor>
          </Box>
        </Stack>
      </Menu.Dropdown>
    </Menu>
  );
}
