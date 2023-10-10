import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  navlinkDeadLabel: {
    fontFamily: 'Nunito',
    fontSize: '1rem',
    fontWeight: 700,
  },
  navlinkDeadRoot: {
    color: theme.colors.gray[3],
    borderRadius: '8px',
    '&[data-active]': {
      color: theme.colors.violet[4],
      backgroundColor: theme.colors.violet[0],
      ':hover': {
        backgroundColor: theme.colors.violet[1],
      },
    },
    ':hover': {
      backgroundColor: theme.colors.violet[1],
    },
  },
  navlinkSonRoot: {
    fontSize: '1rem',
    fontWeight: 500,
    color: theme.colors.gray[3],
    borderLeft: `2px solid ${theme.colors.violet[4]}`,
    '&[data-active]': {
      backgroundColor: 'transparent',
      color: theme.colors.violet[4],
      ':hover': {
        backgroundColor: 'transparent',
      },
    },
    ':hover': {
      backgroundColor: 'transparent',
      color: theme.colors.violet[6],
    },
  },
  navlinkSonLabel: {
    fontFamily: 'Nunito',
  },
  navlinkFooterLabel: {
    fontFamily: 'Nunito',
    fontSize: '1rem',
    fontWeight: 700,
  },
  navlinkFooterRoot: {
    color: theme.colors.gray[4],
    borderRadius: '8px',
    '&[data-active]': {
      color: theme.colors.gray[4],
      backgroundColor: 'transparent',
      ':hover': {
        backgroundColor: theme.colors.gray[0],
      },
    },
    ':hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },
}));

export default useStyles;
