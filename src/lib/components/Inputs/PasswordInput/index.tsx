import { PasswordInput as MantinePasswordInput, PasswordInputProps } from '@mantine/core';

export default function PasswordInput(props: PasswordInputProps): JSX.Element {
  return (
    <MantinePasswordInput {...props} />
  );
}
