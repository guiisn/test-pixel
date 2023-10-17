import {
  Avatar, CloseButton, Divider, Group, Menu, Stack, Title,
  UnstyledButton,
} from '@mantine/core';
import { BuildingStore, Key, Logout } from 'tabler-icons-react';
import Button from '../../Buttons/Button';
import classes from './ProfileMenu.module.css';

export interface ProfileMenuProps {
    userName?: string
    userEmail?: string
    userRole?: string
    userLogin?: string
    showChangeUnitButton?: boolean
    onCloseMenu?: () => void
    onChangePassword?: () => void
    onChangeCompany?: () => void
    activeCompany?: string
    showActiveCompany?: boolean
    showChangePasswordButton?: boolean
    onLogoutClick: () => void
  }

export default function ProfileMenu({
  onChangePassword,
  onCloseMenu,
  userEmail,
  userLogin,
  userName,
  userRole,
  onChangeCompany,
  showChangeUnitButton,
  activeCompany,
  showActiveCompany,
  showChangePasswordButton,
  onLogoutClick,
}: ProfileMenuProps): JSX.Element {
  return (
    <Menu
      width="30rem"
      offset={10}
      position="left-start"
      closeOnClickOutside
      closeOnEscape
      // onOpen={addOverlay}
      // onClose={removeOverlay}
      shadow="xl"
      classNames={{
        dropdown: classes.dropdown,
      }}
    >
      <Menu.Target>
        <UnstyledButton
          data-testid="profile-button"
        >
          <Avatar
            data-testid="avatar"
            alt={userName}
            className={classes.avatar}
            c="red.4"
          >
            {userName ? userName[0] : ''}
          </Avatar>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Stack className={classes.dropdownContent}>
          <Group justify="space-between">
            <Title order={6} fw={700} c="gray">DADOS DO USUÁRIO</Title>
            <CloseButton onClick={onCloseMenu} />
          </Group>
          <Divider c="gray.1" />
          <Stack style={{ gap: '.5rem' }}>
            <Group align="flex-start">
              <Avatar
                data-testid="avatar"
                alt={userName}
                className={classes.largeAvatar}
                c="red.4"
              >
                {userName ? userName[0] : ''}
              </Avatar>
              <Stack style={{ gap: '.5rem' }}>
                <Stack style={{ gap: '.25rem' }}>
                  <Title order={6} fw={800} c="violet.4">Bem-vinda(o)</Title>
                  <Title order={5} fw={800} c="gray.9">{userName}</Title>
                </Stack>
                <Stack style={{ gap: '.25rem' }}>
                  <Title order={6} fw={800} c="violet.4">Tipo de usuário</Title>
                  <Title order={5} fw={500} c="violet.9">{userRole}</Title>
                </Stack>
              </Stack>
            </Group>
            {showActiveCompany && (
            <Stack style={{ gap: '.25rem' }}>
              <Title order={6} fw={800} c="gray.5">Unidade</Title>
              <Title order={5} fw={500} c="gray.8">{activeCompany}</Title>
            </Stack>
            )}
            {showChangeUnitButton && (
            <Button
              variant="light"
              c="violet.4"
              leftSection={<BuildingStore />}
              onClick={onChangeCompany}
            >
              Alterar Unidade
            </Button>
            )}

            <Divider c="gray.1" />
          </Stack>

          <Stack style={{ gap: '.25rem' }}>
            <Title order={6} fw={800} c="gray.5">E-mail</Title>
            <Title order={5} fw={500} c="gray.8">{userEmail}</Title>
          </Stack>
          <Stack style={{ gap: '.25rem' }}>
            <Title order={6} fw={800} c="gray.5">Usuário</Title>
            <Title order={5} fw={500} c="gray.8">{userLogin}</Title>
          </Stack>

          <Divider c="gray.1" w="100%" />

          <Group justify={showChangePasswordButton ? 'right' : 'apart'}>
            {showChangePasswordButton && (
            <Button
              variant="light"
              w="11rem"
              c="violet.4"
              leftSection={<Key />}
              onClick={onChangePassword}
            >
              Alterar senha
            </Button>
            )}
            <Button
              variant="light"
              w="11rem"
              c="laraRed.4"
              leftSection={<Logout />}
              style={(theme) => ({ backgroundColor: theme.colors.laraRed[0] })}
              onClick={onLogoutClick}
            >
              Sair do sistema
            </Button>
          </Group>
        </Stack>
      </Menu.Dropdown>
    </Menu>
  );
}
