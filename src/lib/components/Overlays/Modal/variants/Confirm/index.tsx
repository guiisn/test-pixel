import {
  Grid, Group, Stack, Text,
} from '@mantine/core';
import React from 'react';
import Button from '../../../../Buttons/Button';

export interface ConfirmModal {
    title?: string
    subtitle?: string
    onClose: () => void
    onConfirm?: () => void
    icon?: React.ReactNode
}

export default function ConfirmModal({
  title, subtitle, onClose, onConfirm, icon,
}: ConfirmModal): JSX.Element {
  return (
    <Stack>
      <Grid m={0}>
        <Grid.Col
          m={0}
          p={0}
          span={2}
          style={{
            svg: {
              width: '6rem',
              height: '6rem',
            },
          }}
        >
          {icon}
        </Grid.Col>
        <Grid.Col
          span={10}
          m={0}
          p={0}
        >
          <Stack style={{ gap: 0 }}>
            <Text fz="1.75rem" fw={700}>
              {title ?? '-'}
            </Text>
            <Text fz="1.125rem" fw={500}>
              {subtitle ?? '-'}
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>
      <Group justify="space-between">
        <Button
          variant="light"
          c="violet.4"
          w="12.5rem"
          onClick={onClose}
        >
          Não
        </Button>
        <Button
          variant="filled"
          c="violet.4"
          w="12.5rem"
          onClick={onConfirm}
        >
          Sim
        </Button>
      </Group>
    </Stack>
  );
}
