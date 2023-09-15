import { MantineThemeOverride } from '@mantine/core';
import {
  laraAquamarine, laraBlue, laraGreen, laraGray, laraOrange, laraPink,
  laraRed, laraSuccess, laraYellow, laraPurple,
} from './colors';

const GlobalTheme: MantineThemeOverride = {
  colors: {
    violet: laraPurple,
    gray: laraGray,
    indigo: laraAquamarine,
    blue: laraBlue,
    green: laraGreen,
    orange: laraOrange,
    pink: laraPink,
    red: laraRed,
    teal: laraSuccess,
    yellow: laraYellow,
  },
  primaryColor: 'violet',
  colorScheme: 'light',
  components: {
    ActionIcon: {
      defaultProps: {
        radius: '10px',
      },
    },
    Button: {
      defaultProps: {
        color: 'violet.0',
      },
      styles: {
        root: {
          borderRadius: '30px',
          minWidth: '7.5rem',
          '&[data-loading]': {
            '.mantine-Button-label': {
              display: 'none',
              fontFamily: 'Nunito',
            },
          },
        },
      },
    },
    TextInput: {
      defaultProps: {
        radius: '8px',
        variant: 'default',
      },
      styles: (theme) => ({
        label: {
          fontSize: '1rem',
          fontWeight: 700,
          color: theme.colors.violet[4],
          span: {
            color: theme.colors.violet[4],
          },
        },
        input: {
          height: '2.81rem',
          border: `1px solid ${theme.colors.gray[2]}`,
          ':focus': {
            border: `1px solid ${theme.colors.violet[4]}`,
          },
          '&[data-invalid]': {
            border: `1px solid ${theme.colors.red[4]}`,
          },
        },
        error: {
          fontSize: '.9rem',
          fontWeight: 600,
          color: theme.colors.red[4],
        },
      }),
    },
    Select: {
      defaultProps: {
        radius: '8px',
        variant: 'default',
      },
      styles: (theme) => ({
        label: {
          fontSize: '1rem',
          fontWeight: 700,
          color: theme.colors.violet[4],
          span: {
            color: theme.colors.violet[4],
          },
        },
        input: {
          height: '2.81rem',
          border: `1px solid ${theme.colors.gray[2]}`,
          ':focus': {
            border: `1px solid ${theme.colors.violet[4]}`,
          },
          '&[data-invalid]': {
            border: `1px solid ${theme.colors.red[4]}`,
          },
        },
        error: {
          fontSize: '.9rem',
          fontWeight: 600,
          color: theme.colors.red[4],
        },
        dropdown: {
          border: 0,
        },
        item: {
          fontFamily: 'Nunito',
          fontWeight: 700,
          ':hover': {
            backgroundColor: theme.colors.violet[0],
          },
        },
      }),
    },
    ColorInput: {
      defaultProps: {
        radius: '8px',
        variant: 'default',
      },
      styles: (theme) => ({
        label: {
          fontSize: '1rem',
          fontWeight: 700,
          color: theme.colors.violet[4],
          span: {
            color: theme.colors.violet[4],
          },
        },
        input: {
          height: '2.81rem',
          border: `1px solid ${theme.colors.gray[2]}`,
          ':focus': {
            border: `1px solid ${theme.colors.violet[4]}`,
          },
          '&[data-invalid]': {
            border: `1px solid ${theme.colors.red[4]}`,
          },
        },
        error: {
          fontSize: '.9rem',
          fontWeight: 600,
          color: theme.colors.red[4],
        },
      }),
    },
    DateInput: {
      defaultProps: {
        radius: '8px',
        variant: 'default',
      },
      styles: (theme) => ({
        label: {
          fontSize: '1rem',
          fontWeight: 700,
          color: theme.colors.violet[4],
          span: {
            color: theme.colors.violet[4],
          },
        },
        input: {
          height: '2.81rem',
          border: `1px solid ${theme.colors.gray[2]}`,
          ':focus': {
            border: `1px solid ${theme.colors.violet[4]}`,
          },
          '&[data-invalid]': {
            border: `1px solid ${theme.colors.red[4]}`,
          },
        },
        error: {
          fontSize: '.9rem',
          fontWeight: 600,
          color: theme.colors.red[4],
        },
        root: {
          '.mantine-Popover-dropdown': {
            border: 0,
            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.05), 0px 10px 15px -5px rgba(0, 0, 0, 0.05), 0px 7px 7px -5px rgba(0, 0, 0, 0.04)',
          },
        },
        calendarHeaderControl: {
          color: theme.colors.violet[4],
          borderRadius: '50%',
          ':hover': {
            backgroundColor: theme.colors.violet[5],
            color: theme.colors.violet[0],
          },
        },
        calendarHeaderLevel: {
          color: theme.colors.violet[4],
          borderRadius: '30px',
          ':hover': {
            backgroundColor: theme.colors.violet[5],
            color: theme.colors.violet[0],
          },
        },
        day: {
          borderRadius: '4px',
          '&[data-selected]': {
            backgroundColor: theme.colors.violet[4],
            ':hover': {
              backgroundColor: theme.colors.violet[4],
            },
          },
          ':hover': {
            backgroundColor: theme.colors.violet[5],
            color: theme.colors.violet[0],
          },
        },
        monthPickerControl: {
          ':hover': {
            backgroundColor: theme.colors.violet[5],
          },
        },
        monthPickerControlActive: {
          backgroundColor: theme.colors.violet[4],
          ':hover': {
            backgroundColor: theme.colors.violet[4],
          },
        },
        yearPickerControl: {
          ':hover': {
            backgroundColor: theme.colors.violet[5],
          },
        },
        yearPickerControlActive: {
          backgroundColor: theme.colors.violet[4],
          ':hover': {
            backgroundColor: theme.colors.violet[4],
          },
        },
      }),
    },
    Textarea: {
      defaultProps: {
        radius: '8px',
        variant: 'default',
      },
      styles: (theme) => ({
        label: {
          fontSize: '1rem',
          fontWeight: 700,
          color: theme.colors.violet[4],
          span: {
            color: theme.colors.violet[4],
          },
        },
        input: {
          minHeight: '7rem',
          border: `1px solid ${theme.colors.gray[2]}`,
          ':focus': {
            border: `1px solid ${theme.colors.violet[4]}`,
          },
          '&[data-invalid]': {
            border: `1px solid ${theme.colors.red[4]}`,
          },
        },
        error: {
          fontSize: '.9rem',
          fontWeight: 600,
          color: theme.colors.red[4],
        },
      }),
    },
    PasswordInput: {
      defaultProps: {
        radius: '8px',
        variant: 'default',
      },
      styles: (theme) => ({
        label: {
          fontSize: '1rem',
          fontWeight: 700,
          color: theme.colors.violet[4],
          span: {
            color: theme.colors.violet[4],
          },
        },
        input: {
          height: '2.81rem',
          border: `1px solid ${theme.colors.gray[2]}`,
          ':focus': {
            border: `1px solid ${theme.colors.violet[4]}`,
          },
          '&[data-invalid]': {
            border: `1px solid ${theme.colors.red[4]}`,
          },
        },
        error: {
          fontSize: '.9rem',
          fontWeight: 600,
          color: theme.colors.red[4],
        },
      }),
    },
    Title: {
      defaultProps: {
        color: 'violet.4',
      },
      styles: {
        root: {
          '&:is(h1)': {
            fontFamily: 'Nunito',
            fontSize: '2.5rem',
          },
        },
      },
    },
    Loader: {
      defaultProps: {
        color: 'violet.4',
      },
    },
  },
  loader: 'dots',
  fontFamily: 'Nunito',
  headings: { fontFamily: 'Nunito' },
};

export default GlobalTheme;
