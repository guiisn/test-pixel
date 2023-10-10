import {
  Avatar, CloseButton, Divider, Group, Menu, Stack, Title,
  UnstyledButton,
} from '@mantine/core';
import { BuildingStore, Key, Logout } from 'tabler-icons-react';
import Button from '../../Buttons/Button';
import useStyles from './style';

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
  const { classes } = useStyles();

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
            color="red.4"
          >
            {userName ? userName[0] : ''}
          </Avatar>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Stack className={classes.dropdownContent}>
          <Group position="apart">
            <Title order={6} weight={700} color="gray">DADOS DO USUÁRIO</Title>
            <CloseButton onClick={onCloseMenu} />
          </Group>
          <Divider color="gray.1" />
          <Stack sx={{ gap: '.5rem' }}>
            <Group align="flex-start">
              <Avatar
                data-testid="avatar"
                alt={userName}
                className={classes.largeAvatar}
                color="red.4"
              >
                {userName ? userName[0] : ''}
              </Avatar>
              <Stack sx={{ gap: '.5rem' }}>
                <Stack sx={{ gap: '.25rem' }}>
                  <Title order={6} weight={800} color="violet.4">Bem-vinda(o)</Title>
                  <Title order={5} weight={800} color="gray.9">{userName}</Title>
                </Stack>
                <Stack sx={{ gap: '.25rem' }}>
                  <Title order={6} weight={800} color="violet.4">Tipo de usuário</Title>
                  <Title order={5} weight={500} color="violet.9">{userRole}</Title>
                </Stack>
              </Stack>
            </Group>
            {showActiveCompany && (
            <Stack sx={{ gap: '.25rem' }}>
              <Title order={6} weight={800} color="gray.5">Unidade</Title>
              <Title order={5} weight={500} color="gray.8">{activeCompany}</Title>
            </Stack>
            )}
            {showChangeUnitButton && (
            <Button
              variant="light"
              color="violet.4"
              leftIcon={<BuildingStore />}
              onClick={onChangeCompany}
            >
              Alterar Unidade
            </Button>
            )}

            <Divider color="gray.1" />
          </Stack>

          <Stack sx={{ gap: '.25rem' }}>
            <Title order={6} weight={800} color="gray.5">E-mail</Title>
            <Title order={5} weight={500} color="gray.8">{userEmail}</Title>
          </Stack>
          <Stack sx={{ gap: '.25rem' }}>
            <Title order={6} weight={800} color="gray.5">Usuário</Title>
            <Title order={5} weight={500} color="gray.8">{userLogin}</Title>
          </Stack>

          <Divider color="gray.1" w="100%" />

          <Group position={showChangePasswordButton ? 'right' : 'apart'}>
            {showChangePasswordButton && (
            <Button
              variant="light"
              w="11rem"
              color="violet.4"
              leftIcon={<Key />}
              onClick={onChangePassword}
            >
              Alterar senha
            </Button>
            )}
            <Button
              variant="light"
              w="11rem"
              color="laraRed.4"
              leftIcon={<Logout />}
              sx={(theme) => ({ backgroundColor: theme.colors.laraRed[0] })}
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
