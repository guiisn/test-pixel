import { createStyles } from '@mantine/core';

interface IStyles {
  open: number,
}

const useStyles = createStyles((theme, { open }: IStyles) => ({
  wrapper: {
    position: 'absolute',
    zIndex: 2,
    right: 0,
    top: 0,
  },

  notificationButton: {
    cursor: 'pointer',
    background: open ? theme.colors.violet[4] : 'transparent',
    transition: '0.5s ease',
    borderRadius: 100,
    padding: 8,
  },

  badge: {
    position: 'absolute',
    top: -12,
    right: -12,
    padding: 12,
    overflow: 'hidden',
    width: '0.4rem',
    height: '0.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    background: theme.colors.red[4],
    borderRadius: '100%',
    fontSize: '1em',
    fontWeight: 800,
  },

  dropdown: {
    padding: 0,
    width: '36.75rem',
    height: '41.875rem',
    maxHeight: '41.875rem',
    overflow: 'hidden',
    border: 0,
    boxShadow: '0px 2px 26px 0px rgba(0, 0, 0, 0.11)',
  },

  header: {
    padding: '1.25rem',
    gap: '1.25rem',
    position: 'sticky',
    top: 0,
    zIndex: 10,

  },

  heading: {
    color: theme.colors.gray[9],
    fontFamily: 'Nunito',
    fontSize: '2rem',
    fontWeight: 700,
  },

  scroll: {
    height: '85%',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.5rem',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.colors.gray[0],
      borderRadius: '30px',
    },
  },

  buttonWrapper: {
    padding: '0.3rem 1rem 1.2rem',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  notificationsWrapper: {
    overflowY: 'auto',
    maxHeight: '610px',
  },

  anchor: {
    transition: 'all .4s',
    ':hover': {
      textDecoration: 'none',
      color: theme.colors.violet[6],
      transform: 'scale(1.1)',
    },
  },

}));

export default useStyles;
