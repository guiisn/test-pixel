import { createTheme } from '@mantine/core';
import {
  laraAquamarine, laraBlue,
  laraGray,
  laraGreen,
  laraOrange, laraPink,
  laraPurple,
  laraRed, laraSuccess, laraYellow,
} from './colors';

const GlobalTheme = createTheme({
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
  // primaryColor: 'violet.4',
  components: {
    ActionIcon: {
      defaultProps: {
        radius: '10px',
      },
    },
    Button: {
      defaultProps: {
        color: 'violet.4',
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
      styles: {
        label: {
          fontSize: '1rem',
          fontWeight: 700,
          color: laraPurple[4],
          span: {
            color: laraPurple[4],
          },
        },
        input: {
          height: '2.81rem',
          border: `1px solid ${laraGray[2]}`,
          ':focus': {
            border: `1px solid ${laraPurple[4]}`,
          },
          '&[data-invalid]': {
            border: `1px solid ${laraRed[4]}`,
          },
        },
        error: {
          fontSize: '.9rem',
          fontWeight: 600,
          color: laraRed[4],
        },
      },
    },
    Anchor: {
      styles: {
        root: {
          fontWeight: 700,
          fontSize: '1rem',
          lineHeight: '1.125em',
          color: laraPurple[4],
          textDecoration: 'none',
          '&:hover': {
            color: laraPurple[6],
          },
        },
      },
    },
    Checkbox: {
      defaultProps: {
        c: 'violet.4',
      },
      styles: {
        label: {
          fontFamily: 'Nunito',
          fontWeight: 600,
          fontSize: '1rem',
          lineHeight: '1.1625rem',
          userSelect: 'none',
        },
        input: {
          backgroundColor: 'white',
          ':checked': {
            backgroundColor: laraPurple[4],
          },
        },
      },
    },
    Select: {
      defaultProps: {
        radius: '8px',
        variant: 'default',
      },
      styles: {
        label: {
          fontSize: '1rem',
          fontWeight: 700,
          color: laraPurple[4],
          span: {
            color: laraPurple[4],
          },
        },
        input: {
          height: '2.81rem',
          border: `1px solid ${laraGray[2]}`,
          ':focus': {
            border: `1px solid ${laraPurple[4]}`,
          },
          '&[data-invalid]': {
            border: `1px solid ${laraRed[4]}`,
          },
        },
        error: {
          fontSize: '.9rem',
          fontWeight: 600,
          color: laraRed[4],
        },
        dropdown: {
          border: 0,
        },
        item: {
          fontFamily: 'Nunito',
          fontWeight: 700,
          ':hover': {
            backgroundColor: laraPurple[0],
          },
        },
      },
    },
    ColorInput: {
      defaultProps: {
        radius: '8px',
        variant: 'default',
      },
      styles: {
        label: {
          fontSize: '1rem',
          fontWeight: 700,
          color: laraPurple[4],
          span: {
            color: laraPurple[4],
          },
        },
        input: {
          height: '2.81rem',
          border: `1px solid ${laraGray[2]}`,
          ':focus': {
            border: `1px solid ${laraPurple[4]}`,
          },
          '&[data-invalid]': {
            border: `1px solid ${laraRed[4]}`,
          },
        },
        error: {
          fontSize: '.9rem',
          fontWeight: 600,
          color: laraRed[4],
        },
      },
    },
    DateInput: {
      defaultProps: {
        radius: '8px',
        variant: 'default',
      },
      styles: {
        label: {
          fontSize: '1rem',
          fontWeight: 700,
          color: laraPurple[4],
          span: {
            color: laraPurple[4],
          },
        },
        input: {
          height: '2.81rem',
          border: `1px solid ${laraGray[2]}`,
          ':focus': {
            border: `1px solid ${laraPurple[4]}`,
          },
          '&[data-invalid]': {
            border: `1px solid ${laraRed[4]}`,
          },
        },
        error: {
          fontSize: '.9rem',
          fontWeight: 600,
          color: laraRed[4],
        },
        root: {
          '.mantine-Popover-dropdown': {
            border: 0,
            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.05), 0px 10px 15px -5px rgba(0, 0, 0, 0.05), 0px 7px 7px -5px rgba(0, 0, 0, 0.04)',
          },
        },
        calendarHeaderControl: {
          color: laraPurple[4],
          borderRadius: '50%',
          ':hover': {
            backgroundColor: laraPurple[5],
            color: laraPurple[0],
          },
        },
        calendarHeaderLevel: {
          color: laraPurple[4],
          borderRadius: '30px',
          ':hover': {
            backgroundColor: laraPurple[5],
            color: laraPurple[0],
          },
        },
        day: {
          borderRadius: '4px',
          '&[data-selected]': {
            backgroundColor: laraPurple[4],
            ':hover': {
              backgroundColor: laraPurple[4],
            },
          },
          ':hover': {
            backgroundColor: laraPurple[5],
            color: laraPurple[0],
          },
        },
        monthPickerControl: {
          ':hover': {
            backgroundColor: laraPurple[5],
          },
        },
        monthPickerControlActive: {
          backgroundColor: laraPurple[4],
          ':hover': {
            backgroundColor: laraPurple[4],
          },
        },
        yearPickerControl: {
          ':hover': {
            backgroundColor: laraPurple[5],
          },
        },
        yearPickerControlActive: {
          backgroundColor: laraPurple[4],
          ':hover': {
            backgroundColor: laraPurple[4],
          },
        },
      },
    },
    DatePicker: {
      defaultProps: {
        radius: '8px',
        variant: 'default',
      },
      styles: {
        label: {
          fontSize: '1rem',
          fontWeight: 700,
          color: laraPurple[4],
          span: {
            color: laraPurple[4],
          },
        },
        input: {
          border: `1px solid ${laraGray[2]}`,
          ':focus': {
            border: `1px solid ${laraPurple[4]}`,
          },
          '&[data-invalid]': {
            border: `1px solid ${laraRed[4]}`,
          },
        },
        error: {
          fontSize: '.9rem',
          fontWeight: 600,
          color: laraRed[4],
        },
        root: {
          '.mantine-Popover-dropdown': {
            border: 0,
            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.05), 0px 10px 15px -5px rgba(0, 0, 0, 0.05), 0px 7px 7px -5px rgba(0, 0, 0, 0.04)',
          },
        },
        calendarHeaderControl: {
          color: laraPurple[4],
          borderRadius: '50%',
          ':hover': {
            backgroundColor: laraPurple[5],
            color: laraPurple[0],
          },
        },
        calendarHeaderLevel: {
          color: laraPurple[4],
          borderRadius: '30px',
          ':hover': {
            backgroundColor: laraPurple[5],
            color: laraPurple[0],
          },
        },
        day: {
          borderRadius: '4px',
          '&[data-selected]': {
            backgroundColor: laraPurple[4],
            ':hover': {
              backgroundColor: laraPurple[4],
            },
          },
          ':hover': {
            backgroundColor: laraPurple[5],
            color: laraPurple[0],
          },
        },
        monthPickerControl: {
          ':hover': {
            backgroundColor: laraPurple[5],
          },
        },
        monthPickerControlActive: {
          backgroundColor: laraPurple[4],
          ':hover': {
            backgroundColor: laraPurple[4],
          },
        },
        yearPickerControl: {
          ':hover': {
            backgroundColor: laraPurple[5],
          },
        },
        yearPickerControlActive: {
          backgroundColor: laraPurple[4],
          ':hover': {
            backgroundColor: laraPurple[4],
          },
        },
      },
    },
    Textarea: {
      defaultProps: {
        radius: '8px',
        variant: 'default',
      },
      styles: {
        label: {
          fontSize: '1rem',
          fontWeight: 700,
          color: laraPurple[4],
          span: {
            color: laraPurple[4],
          },
        },
        input: {
          minHeight: '7rem',
          border: `1px solid ${laraGray[2]}`,
          ':focus': {
            border: `1px solid ${laraPurple[4]}`,
          },
          '&[data-invalid]': {
            border: `1px solid ${laraRed[4]}`,
          },
        },
        error: {
          fontSize: '.9rem',
          fontWeight: 600,
          color: laraRed[4],
        },
      },
    },
    PasswordInput: {
      defaultProps: {
        radius: '8px',
        variant: 'default',
      },
      styles: {
        label: {
          fontSize: '1rem',
          fontWeight: 700,
          color: laraPurple[4],
          span: {
            color: laraPurple[4],
          },
        },
        input: {
          height: '2.81rem',
          border: `1px solid ${laraGray[2]}`,
          ':focus': {
            border: `1px solid ${laraPurple[4]}`,
          },
          '&[data-invalid]': {
            border: `1px solid ${laraRed[4]}`,
          },
        },
        error: {
          fontSize: '.9rem',
          fontWeight: 600,
          color: laraRed[4],
        },
      },
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
  fontFamily: 'Nunito',
  headings: { fontFamily: 'Nunito' },
});

export default GlobalTheme;
