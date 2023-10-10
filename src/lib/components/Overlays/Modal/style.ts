import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  root: {
    '.mantine-Paper-root': {
      width: '39.37rem',
      borderRadius: '30px',
      margin: 0,
      padding: '1.75rem',
      boxShadow: '0px 7px 21px 0px rgba(8, 73, 132, 0.18)',
    },
  },
  header: {
    display: 'none',
  },
  body: {
    padding: 0,
  },
}));

export default useStyles;
