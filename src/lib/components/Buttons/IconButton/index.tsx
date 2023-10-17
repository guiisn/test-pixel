import {
  Box, ActionIcon, ActionIconProps, Tooltip, Title,
} from '@mantine/core';

export interface IconButtonProps extends ActionIconProps {
    tooltipTitle: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    actionsCounter?: number | string
}

export default function IconButton(props: IconButtonProps): JSX.Element {
  const {
    tooltipTitle, children, color, variant, onClick, actionsCounter, ...rest
  } = props;

  return (
    <Tooltip label={tooltipTitle} c="violet.4">
      <ActionIcon
        w="2.625rem"
        h="2.625rem"
        c={color}
        variant={variant}
        onClick={onClick}
        style={{ position: 'relative' }}
        {...rest}
      >
        {actionsCounter && (
          <Box style={(theme) => ({
            width: '1.8rem',
            height: '1.8rem',
            backgroundColor: theme.colors.red[4],
            borderRadius: '50%',
            position: 'absolute',
            top: '-30%',
            right: '-40%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          })}
          >
            <Title order={4} c="#fff">{actionsCounter}</Title>
          </Box>
        )}
        {children}
      </ActionIcon>
    </Tooltip>
  );
}
