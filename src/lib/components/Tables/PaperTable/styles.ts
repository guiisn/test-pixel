import { MantineColor, createStyles } from '@mantine/core';
// import { ExtendedCustomColors } from '@src/@types/mantine-colors';

interface IStyles {
  tableTitleColor?: MantineColor
}

const useStyles = createStyles((theme, { tableTitleColor }: IStyles) => ({
  table: {
    border: 'none',
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'Nunito',
    padding: 0,
    textAlign: 'left',
    thead: {
      tr: {
        th: {
          fontWeight: 400,
          fontSize: '.875rem',
          color: theme.colors.gray[4],
          padding: 0,
          [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            fontSize: '.7rem',
          },
        },
      },
    },
    tbody: {
      tr: {
        td: {
          fontWeight: 700,
          fontSize: '1.25rem',
          [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            fontSize: '1rem',
          },
          color: theme.colors.gray[9],
          padding: 0,
        },
      },
    },
  },
  tableTitle: {
    fontWeight: 700,
    fontSize: '1.25rem',
    color: !tableTitleColor ? theme.colors.laraPurple[4] : tableTitleColor,
  },
  tableContainer: {
    padding: '0 10rem',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      padding: '0 5rem',
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      padding: '0 2.5rem',
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: '0 1.25rem',
    },
  },
}));

export default useStyles;
