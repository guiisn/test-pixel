import { BoxProps, MantineProvider } from '@mantine/core';
import GlobalTheme from '../../../../styles/theme';
import CustomFonts from '../CustomFonts';

export default function LaraProvider(props: BoxProps): JSX.Element {
  const { children } = props;

  return (
    <MantineProvider theme={GlobalTheme} withGlobalStyles withNormalizeCSS>
      <CustomFonts />
      {children}
    </MantineProvider>
  );
}
