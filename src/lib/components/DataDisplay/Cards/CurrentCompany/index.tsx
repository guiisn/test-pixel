import {
  Group,
  Text, UnstyledButton, useMantineTheme,
} from '@mantine/core';

import { MapPin } from 'tabler-icons-react';
import useStyles from './styles';

export interface CurrentCompanyCardProps {
    activeCompany?: string
    onCardClick?: () => void
}

export default function CurrentCompanyCard({ activeCompany, onCardClick }: CurrentCompanyCardProps): JSX.Element {
  const { classes } = useStyles();
  const mantineTheme = useMantineTheme();

  return (
    <UnstyledButton
      onClick={onCardClick}
    >
      <Group
        position="left"
        className={classes.group}
      >
        <MapPin style={{ height: '100%' }} color={mantineTheme.colors.violet[4]} />
        <Text sx={{ height: '100%', width: '80%' }} weight={700} fz=".875rem" color="violet.8">
          {activeCompany ?? '-'}
        </Text>
      </Group>
    </UnstyledButton>
  );
}
