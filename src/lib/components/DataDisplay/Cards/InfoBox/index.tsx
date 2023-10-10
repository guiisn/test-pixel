import {
  Flex, Stack, Text, useMantineTheme,
} from '@mantine/core';

import useStyles from './styles';

export interface InfoBoxProps {
    icon:JSX.Element;
    label: string;
    value?: string | number;
    total?: number
}

export default function InfoBox({
  icon, label, total, value,
}: InfoBoxProps): JSX.Element {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Stack
      role="cell"
      className={classes.wrapper}
    >
      <Flex gap="0.5rem" align="end">
        {icon}
        <Text role="heading" color={theme.colors.gray[4]} weight="bold" sx={{ fontFamily: 'inherit' }}>
          {`${label}:`}
        </Text>
      </Flex>

      <Flex justify="end" align="center" sx={{ color: theme.colors.gray[4] }}>
        <Text
          data-testid="value"
          className={classes.highlight}
        >
          {value}

        </Text>
        {(!!value && !!total) && (
        <Text
          className={classes.value}
          mx={5}
        >
          /
        </Text>
        )}
        {!!total && (
        <Text
          data-testid="total"
          className={classes.value}
        >
          {total}
        </Text>
        )}
      </Flex>
    </Stack>
  );
}
