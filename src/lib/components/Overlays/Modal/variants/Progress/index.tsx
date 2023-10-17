import { Stack, Text } from '@mantine/core';
import Loader from '../../../../Feedbacks/Loader';

export interface ProgressModalProps {
    title?: string
    subtitle?: string
    percentage?: number
}

export default function ProgressModal({ title, subtitle, percentage }: ProgressModalProps): JSX.Element {
  return (
    <Stack align="center">
      <Loader variant="percentage" value={percentage} />
      <Stack style={{ gap: 0 }} align="center">
        <Text fz="1.75rem" fw={700}>
          {title ?? '-'}
        </Text>
        <Text fz="1.125rem" fw={500}>
          {subtitle ?? '-'}
        </Text>
      </Stack>
    </Stack>
  );
}
