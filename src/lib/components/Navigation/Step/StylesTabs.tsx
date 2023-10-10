import { Tabs, TabsProps } from '@mantine/core';

export default function StyledTabs(props: TabsProps): JSX.Element {
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        tab: {
          minWidth: '12rem',
          [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            minWidth: '6rem',
          },
          height: '2.625rem',
          backgroundColor: theme.colors.violet[0],
          color: theme.colors.violet[4],
          border: 0,
          padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 700,
          lineHeight: '150%',
          fontFamily: 'Nunito',
          '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
          },

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&:first-of-type': {
            borderTopLeftRadius: '30px',
            borderBottomLeftRadius: '30px',
          },

          '&:last-of-type': {
            borderTopRightRadius: '30px',
            borderBottomRightRadius: '30px',
          },
          '&[data-active]': {
            background: theme.colors.violet[4],
            color: theme.colors.gray[0],
          },
        },
        panel: {
          padding: '1rem 0',
        },
      })}
      {...props}
    />
  );
}
