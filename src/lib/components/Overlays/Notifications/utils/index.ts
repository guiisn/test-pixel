export const pendingFilter = {
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
};

export const recentFilter = {
  and: [
    {
      isInternal: {
        is: false,
      },
      createdAt: undefined,
    },
  ],
};

export const mockNotifications = [
  {
    id: '2',
    isVisualized: false,
    message: 'Message test',
    title: 'Notification test',
    reason: 'NOTIFICATION',
    prize: '3',
  },
  {
    id: '3',
    isVisualized: false,
    message: 'Message test 2',
    title: 'Notification test 2',
    reason: 'NOTIFICATION',
    prize: '3',
  },
  {
    id: '4',
    isVisualized: false,
    message: 'Message test 3',
    title: 'Notification test 3',
    reason: 'NOTIFICATION',
    prize: '3',
  },
  {
    id: '5',
    isVisualized: false,
    message: 'Message test 4',
    title: 'Notification test 4',
    reason: 'NOTIFICATION',
    prize: '3',
  },
];
