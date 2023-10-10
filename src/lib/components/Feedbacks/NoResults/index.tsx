import {
  Box,
  Stack, Title, useMantineTheme,
} from '@mantine/core';
import { BellX, MoodSad } from 'tabler-icons-react';
import useStyles from './style';

export interface NoResultsProps {
  variant?: 'default' | 'notifications'
}

export default function NoResults({ variant = 'default' }: NoResultsProps): JSX.Element {
  const { classes } = useStyles();
  const { colors } = useMantineTheme();

  return (
    <>
      {variant === 'default' && (
        <Box className={classes.component} data-testid="noResultsContainer">
          <Stack align="center">
            <MoodSad className={classes.icon} />
            <Title order={2} weight={800}>
              Nenhum resultado encontrado!
            </Title>
          </Stack>
        </Box>
      )}

      {variant === 'notifications' && (
        <Stack h="100%" align="center" justify="center">
          <BellX
            color={colors.violet[4]}
            width="7rem"
            height="7rem"
          />
          <Title order={3} weight={700} color="gray.4">
            Não há notificações.
          </Title>
        </Stack>
      )}
    </>

  );
}
