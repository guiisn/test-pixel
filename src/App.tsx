import { Stack } from '@mantine/core';
import { LaraProvider } from './lib';
import NotificationsMenu from './lib/components/Overlays/Notifications';

function App(): JSX.Element {
  return (
    <Stack align="center" justify="center" h="100vh" w="100vw">
      <LaraProvider>
        <NotificationsMenu
          unreadNotificationsCount={0}
          pendingFilter={{
            and: [
              {
                isInternal: {
                  is: false,
                },
              },
              {
                dateToExpire: {
                  gte: new Date()?.toISOString(),
                },
              },
            ],
          }}
          recentFilter={{
            and: [
              {
                isInternal: {
                  is: false,
                },
                createdAt: undefined,
              },
            ],
          }}
        />
      </LaraProvider>
    </Stack>
  );
}

export default App;
