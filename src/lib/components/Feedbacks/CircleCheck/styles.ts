import { createStyles } from '@mantine/core';

interface IStyles {
  color?: string
}

const useStyles = createStyles((_, { color = '#700DFF' }: IStyles) => ({
  checkmark: {
    '@keyframes fill': {
      '100%': {
        boxShadow: `inset 0px 0px 0px 30px ${color}`,
        backgroundColor: `${color}`,
      },
    },
    '@keyframes scale': {
      '0%:': {
        transform: 'none',
      },
      '100%': {
        transform: 'none',
      },
      '50%': {
        transform: 'scale3d(1.1, 1.1, 1)',
      },
    },
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    strokeWidth: 2,
    stroke: `${color}`,
    strokeMiterlimit: 10,
    margin: 'auto',
    boxShadow: `inset 0px 0px 0px ${color}`,
    animation: 'fill .6s ease-in-out .4s forwards, scale .5s ease-in-out .11s both',
  },
  check: {
    '@keyframes stroke': {
      '100%': {
        strokeDashoffset: 0,
      },
    },
    transformOrigin: '50% 50%',
    strokeDasharray: 48,
    strokeDashoffset: 48,
    animation: 'stroke 0.5s cubic-bezier(0.65, 0, 0.45, 1) 1s forwards',
  },
}));

export default useStyles;
