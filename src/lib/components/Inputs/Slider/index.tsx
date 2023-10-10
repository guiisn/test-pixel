import { Slider as MantineSlider } from '@mantine/core';

export default function Slider(): JSX.Element {
  return (
    <MantineSlider
      w="50%"
      color="blue"
    //   sx={{ backgroundColor: 'red' }}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
