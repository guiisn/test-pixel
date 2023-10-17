import {
  Flex, Stack, Text, useMantineTheme,
} from '@mantine/core';
import classes from './InfoBox.module.css';

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

  return (
    <Stack
      role="cell"
      className={classes.wrapper}
    >
      <Flex gap="0.5rem" align="end">
        {icon}
        <Text role="heading" c={theme.colors.gray[4]} fw="bold" style={{ fontFamily: 'inherit' }}>
          {`${label}:`}
        </Text>
      </Flex>

      <Flex justify="end" align="center" style={{ color: theme.colors.gray[4] }}>
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
