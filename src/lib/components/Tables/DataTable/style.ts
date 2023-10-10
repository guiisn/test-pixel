import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  component: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '.5rem',
    height: '100%',
    width: '100%',
  },

  tableContainer: {
    height: '100%',
    maxHeight: '100%',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.07)',
    borderRadius: '8px',
    overflow: 'hidden',
  },

  table: {
    borderCollapse: 'collapse',
    maxHeight: '100%',
    width: '100%',
    borderRadius: '8px',

    thead: {
      position: 'sticky',
      top: 0,
      textTransform: 'uppercase',
      backgroundColor: theme.colors.violet[0],
      height: '3.75rem',
      borderRadius: '.5rem .5rem 0 0',
      textAlign: 'center',

      tr: {
        th: {
          color: theme.colors.violet[4],
          fontFamily: 'Nunito',
          fontWeight: 800,
          fontSize: '.875rem',
          textAlign: 'left',
          padding: '.5rem',
        },
      },
    },

    tbody: {
      height: '3.75rem',
      fontFamily: 'Nunito ',

      tr: {
        ':nth-of-type(even)': {
          backgroundColor: 'rgb(248, 248, 248)',
        },

        td: {
          color: theme.colors.gray[9],
          fontFamily: 'Nunito',
          fontWeight: 600,
          fontSize: '.875rem',
          height: '2.96rem',
          textAlign: 'left',
          padding: '.5rem',
        },
      },
    },
  },
}));

export default useStyles;
