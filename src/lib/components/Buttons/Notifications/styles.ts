import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  anchor: {
    height: '9.735rem',
    ':hover': {
      textDecoration: 'none',
    },
  },

  content: {
    padding: '1rem',
    borderTop: `1px solid ${theme.colors.violet[4]}`,
    ':hover': {
      backgroundColor: theme.colors.violet[0],
    },
  },

  badge: {
    fontSize: '0.7em',
    backgroundColor: theme.colors.gray[1],
    color: theme.colors.gray[8],
    fontWeight: 700,
  },

  icon: {
    borderRadius: '50%',
    svg: {
      width: '3.6875rem',
      height: '3.6875rem',
      color: theme.colors.violet[4],
    },
  },

  title: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
}));

export default useStyles;
