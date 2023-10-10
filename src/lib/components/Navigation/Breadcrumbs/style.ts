import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  separator: {
    color: theme.colors.violet[4],
    fontWeight: 400,
    fontSize: '1.25rem',
    lineHeight: 0,
  },
  breadcrumb: {
    color: theme.colors.violet[4],
    fontWeight: 400,
    fontSize: '1.25rem',
    lineHeight: 0,
    ':last-child': {
      fontWeight: 800,
      fontSize: '2.5rem',
      lineHeight: 0,
    },
  },
}));

export default useStyles;
