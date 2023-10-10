import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  component: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  control: {
    border: 0,
    backgroundColor: 'transparent',
    fontFamily: 'Nunito',
    fontSize: '1.15rem',
    fontWeight: 400,
    color: theme.colors.gray[4],
    '&[data-active]': {
      backgroundColor: theme.colors.violet[4],
      fontWeight: 800,
    },
  },
}));

export default useStyles;
