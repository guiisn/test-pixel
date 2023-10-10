import { Textarea as MantineTextarea, TextareaProps } from '@mantine/core';

export default function Textarea(props: TextareaProps): JSX.Element {
  return (
    <MantineTextarea {...props} />
  );
}
