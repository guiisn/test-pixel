import { MantineProvider } from "@mantine/core";
import CustomTheme from "../src/styles/theme";
import React from "react";

export function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={CustomTheme} withGlobalStyles withNormalizeCSS>
      {props.children}
    </MantineProvider>
  );
}

export const decorators = [
  (renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
