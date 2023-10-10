import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '180px',
    height: '180px',
    borderRadius: '50%',
  },
  box: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 'calc(100% - 3.125rem)',
    height: 'calc(100% - 3.125rem)',
    borderRadius: '50%',
    '::before': {
      position: 'absolute',
      content: "''",
      width: ' calc(100% + 1.75rem)',
      height: 'calc(100% + 1.75rem)',
      borderRadius: '50%',
    },
    p: {
      span: {
        color: theme.colors.gray[6],
        fontFamily: 'Nunito',
        fontSize: '2.75rem',
        fontWeight: 700,
      },
    },
  },
  svg: {
    position: 'absolute',
    width: ' 100%',
    height: '100%',
    fill: 'none',
    transform: 'rotate(-90deg)',
  },
  thumb: {
    stroke: theme.colors.violet[0],
    strokeWidth: '1rem',
  },
  circle: {
    stroke: theme.colors.violet[4],
    strokeWidth: '1rem',
    strokeDasharray: 503,
    strokeDashoffset: 503,
    animationDuration: '2s',
    animationTimingFunction: 'linear',
    animationFillMode: 'forwards',
    transition: ' 2s stroke-dashoffset',
    borderRadius: '30px',
  },
}));

export default useStyles;
