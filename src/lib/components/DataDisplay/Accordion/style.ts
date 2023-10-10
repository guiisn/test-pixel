import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    boxShadow: '0px 2px 26px rgba(0, 0, 0, 0.11)',
    borderRadius: '10px',
    overflow: 'auto',
  },
  item: {
    border: 'none',
    ':not(:last-child)': {
      borderBottom: `1px solid ${theme.colors.gray[0]}`,
    },
  },
  control: {
    backgroundColor: 'white',
    ':hover': {
      backgroundColor: theme.colors.violet[0],
    },
    fontFamily: 'Nunito',
  },
}));

export default useStyles;
