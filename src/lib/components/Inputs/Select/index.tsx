import { Select as MantineSelect, SelectProps } from '@mantine/core';

export default function Select(props: SelectProps): JSX.Element {
  return (
    <MantineSelect {...props} />
  );
}
