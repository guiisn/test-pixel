import { UnstyledButton, UnstyledButtonProps } from '@mantine/core';


export interface HeaderReturnButtonProps extends UnstyledButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    leftIcon?: React.ReactNode
}

export default function HeaderReturnButton(props: HeaderReturnButtonProps): JSX.Element {
  const {
    children, leftIcon, onClick, ...rest
  } = props;

  return (
    <UnstyledButton
      onClick={onClick}
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '.625rem',
        color: theme.colors.violet[4],
        fontWeight: 700,
        fontSize: '.875rem',
        transition: 'all .4s',
        ':hover': {
          color: theme.colors.violet[6],
          transform: 'scale(1.03)',
        },
      })}
      {...rest}
    >
      {leftIcon}
      {children}
    </UnstyledButton>
  );
}
