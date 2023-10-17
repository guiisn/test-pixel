import { Box, Stack, Text } from '@mantine/core';
import Button from '../../../../Buttons/Button';
import CircleCheck from '../../../../Feedbacks/CircleCheck';

export interface FeedbackModalProps {
  title?: string
  subtitle?: string
  type?: 'ERROR' | 'SUCCESS'
  onClose?: () => void
}

export default function FeedbackModal({
  title, subtitle, type = 'SUCCESS', onClose,
}: FeedbackModalProps): JSX.Element {
  return (
    <Stack
      style={{
        gap: '2.08rem',
      }}
      align="center"
      justify="center"
    >
      <Box>
        <CircleCheck mode={type} />
      </Box>
      <Stack style={{ gap: 0 }} align="center">
        <Text fz="1.75rem" fw={700}>
          {title ?? '-'}
        </Text>
        <Text fz="1.125rem" fw={500}>
          {subtitle ?? '-'}
        </Text>
      </Stack>
      <Button variant="filled" c="violet.4" w="18.75rem" onClick={onClose}>
        Ok
      </Button>
    </Stack>
  );
}
