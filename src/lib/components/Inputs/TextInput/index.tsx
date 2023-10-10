import { TextInput as MantineTextInput, TextInputProps } from '@mantine/core';

export default function TextInput(props: TextInputProps): JSX.Element {
  return (
    <MantineTextInput {...props} />
  );
}
