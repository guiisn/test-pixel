import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  component: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    color: theme.colors.violet[4],
    height: '5rem',
    width: '5rem',
  },

  title: {
    fontSize: '1.75rem', fontWeight: 700, lineHeight: '1.75rem',
  },
}));

export default useStyles;
