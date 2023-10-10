import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    borderRadius: '4px 0 0 4px',
  },
  viewport: {
    width: '100%',
    height: '100vh',
  },
  slide: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '45rem',
  },
  indicator: {
    width: '10px',
    height: '10px',
    borderRadius: '100%',
  },
}));

export default useStyles;
