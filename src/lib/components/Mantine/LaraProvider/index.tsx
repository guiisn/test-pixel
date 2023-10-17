import { BoxProps, MantineProvider } from '@mantine/core';
import GlobalTheme from '../../../../styles/theme';
import '@mantine/core/styles.css';
import './normalize.css';

export default function LaraProvider(props: BoxProps): JSX.Element {
  return (
    <MantineProvider
      theme={GlobalTheme}
      withCssVariables
      {...props}
    />
  );
}
