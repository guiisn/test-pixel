import { TextInput, TextInputProps } from '@mantine/core';

import { Search } from 'tabler-icons-react';

export type HeaderInputProps = Omit<TextInputProps, 'icon' | 'styles'>

export default function HeaderInput(props: HeaderInputProps): JSX.Element {
  return (
    <TextInput
      icon={<Search width="1.5rem" height="1.5rem" data-testid="search-icon" />}
      styles={(theme) => ({
        input: {
          border: `2px solid ${theme.colors.violet[4]}`,
          borderRadius: '68px',
        },
        icon: {
          color: theme.colors.violet[4],
          marginLeft: '.5rem',
        },
      })}
      {...props}
    />
  );
}
