import {
  Group,
  Text, UnstyledButton, useMantineTheme,
} from '@mantine/core';

import { MapPin } from 'tabler-icons-react';
import classes from './CurrentCompany.module.css';

export interface CurrentCompanyCardProps {
    activeCompany?: string
    onCardClick?: () => void
}

export default function CurrentCompanyCard({ activeCompany, onCardClick }: CurrentCompanyCardProps): JSX.Element {
  const mantineTheme = useMantineTheme();

  return (
    <UnstyledButton
      onClick={onCardClick}
    >
      <Group
        justify="flex-start"
        className={classes.group}
      >
        <MapPin style={{ height: '100%' }} color={mantineTheme.colors.violet[4]} />
        <Text style={{ height: '100%', width: '80%' }} fw={700} fz=".875rem" c="violet.8">
          {activeCompany ?? '-'}
        </Text>
      </Group>
    </UnstyledButton>
  );
}
