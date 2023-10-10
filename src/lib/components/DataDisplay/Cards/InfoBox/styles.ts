import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    boxShadow: '3px 0px 28px 0px rgba(95, 90, 97, 0.14)',
    borderRadius: '20px',
    padding: '1.3rem 1.5rem',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      padding: '.5rem 1.5rem',
    },
  },

  highlight: {
    color: theme.colors.violet[4],
    lineHeight: '0.8em',
    fontSize: '2.75rem',
    fontFamily: 'Nunito',
    fontWeight: 800,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: '2.2rem',
    },
  },

  value: {
    color: theme.colors.gray[4],
    fontFamily: 'Nunito',
    lineHeight: '0.8em',
    fontSize: '1.56rem',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: '1.248rem',
    },
    fontWeight: 400,
  },
}));

export default useStyles;
