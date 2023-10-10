import { ColorInputProps, ColorInput as MantineColorInput } from '@mantine/core';
import {
  laraAquamarine, laraBlue, laraGray, laraGreen, laraOrange, laraPink, laraPurple, laraRed, laraSuccess, laraYellow,
} from '../../../../styles/colors';

export default function ColorInput(props: Omit<ColorInputProps, 'swatches'>): JSX.Element {
  return (
    <MantineColorInput
      swatches={[
        laraPurple[4],
        laraAquamarine[4],
        laraBlue[4],
        laraGray[4],
        laraGreen[4],
        laraSuccess[4],
        laraOrange[4],
        laraPink[4],
        laraRed[4],
        laraYellow[4],
      ]}
      {...props}
    />
  );
}
