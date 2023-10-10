import { CheckboxProps, Checkbox as MantineCheckbox } from '@mantine/core';

export default function Checkbox(props: CheckboxProps):JSX.Element {
  return (
    <MantineCheckbox {...props} />
  );
}
