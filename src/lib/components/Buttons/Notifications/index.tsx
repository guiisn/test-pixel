import {
  Anchor, Badge, Box, Grid, Group, Stack, Text,
} from '@mantine/core';
import { Bell } from 'tabler-icons-react';
import useStyles from './styles';

export interface NotificationButtonProps {
    id: string
    title?: string
    prize?: string
    isVisualized?: boolean
    message?: string
    reason?: string
}

export default function NotificationButton({
  id,
  isVisualized,
  message,
  prize,
  reason,
  title,
}: NotificationButtonProps): JSX.Element {
  const { classes } = useStyles();
  const uri = `/notifications/${id}/details`;

  return (
    <Anchor
      role="link"
      href={uri}
      target="_self"
      className={classes.anchor}
      data-testid="widget-notification-item-wrapper"
    >
      <Box w="100%">
        <Grid m={0} className={classes.content}>
          <Grid.Col
            span={3}
            sx={{
              display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}
          >
            <Group
              w="5.625rem"
              h="5.625rem"
              bg="laraPurple.0"
              className={classes.icon}
              align="center"
              position="center"
            >
              <Bell />
            </Group>
          </Grid.Col>

          <Grid.Col span={9}>
            <Stack sx={{ gap: 0 }}>
              <Group position="apart">
                <Text
                  role="heading"
                  fz="1.15rem"
                  weight={800}
                  color="gray.6"
                  w="70%"
                  className={classes.title}
                >
                  {title}
                </Text>
                <Group sx={{ gap: '.5rem' }}>
                  {!isVisualized ? (
                    <Box
                      w="10px"
                      h="10px"
                      bg="red.4"
                      sx={{ borderRadius: '50%' }}
                    />
                  ) : null}
                  <Text data-testid="expiration-date" fz=".75rem" weight={700} color="gray.6">
                    {`${prize} Dias.`}
                  </Text>
                </Group>
              </Group>

              <Text role="contentinfo" fz=".875rem" weight={400} color="gray.4">
                {message}
              </Text>

              {reason && (
              <Box mt=".875rem">
                <Badge role="definition" size="md" className={classes.badge}>
                  {reason}
                </Badge>
              </Box>
              )}

            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </Anchor>
  );
}
