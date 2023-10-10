import {
  Group, Title, UnstyledButton, UnstyledButtonProps,
} from '@mantine/core';

export interface ActionButtonProps extends UnstyledButtonProps {
    variant: 'thin' | 'thick' | 'small'
    icon: React.ReactNode
    label: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ActionButton({
  variant, icon, label, ...rest
}: ActionButtonProps): JSX.Element {
  const styles = {
    thin: {
      padding: '3.125rem 3.75rem',
      radius: '30px',
      shadow: '0px 0px 29.946758270263672px 0px rgba(64, 13, 146, 0.18)',
      svg: {
        width: '3.75rem',
        height: '3.75rem',
      },
      order: 3,
      title: {
        width: '25.93rem',
        maxWidth: '25.93rem',
        minWidth: '25.93rem',
      },
    },
    thick: {
      padding: '.7875rem .94625rem',
      radius: '14px',
      shadow: '0px 4px 6px 0px rgba(64, 13, 146, 0.18)',
      svg: {
        width: '1.875rem',
        height: '1.875rem',
      },
      order: 3,
      title: {
        width: 'auto',
        maxWidth: 'auto',
        minWidth: 'auto',
      },
    },
    small: {
      padding: '1.5rem 2.5rem',
      radius: '14px',
      shadow: '0px 4px 6px 0px rgba(64, 13, 146, 0.18)',
      svg: {
        width: '1.875rem',
        height: '1.875rem',
      },
      order: 2,
      title: {
        width: 'auto',
        maxWidth: 'auto',
        minWidth: 'auto',
      },
    },
  };

  return (
    <UnstyledButton
      {...rest}
      sx={(theme) => ({
        border: '2px solid transparent',
        transition: 'all .4s',
        padding: styles[variant].padding,
        borderRadius: styles[variant].radius,
        boxShadow: styles[variant].shadow,
        ':hover': {
          border: `2px solid ${theme.colors.violet[4]}`,
        },
      })}
    >
      <Group sx={(theme) => ({
        svg: {
          color: theme.colors.violet[4],
          ...styles[variant].svg,
        },
      })}
      >
        {icon}
        <Title
          sx={{
            ...styles[variant].title,
          }}
          order={styles[variant].order as any}
        >
          {label}
        </Title>
      </Group>
    </UnstyledButton>
  );
}
