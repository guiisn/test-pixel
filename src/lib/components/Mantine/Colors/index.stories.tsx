import {
  Group, Stack, Title,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import { Copy } from 'tabler-icons-react';
import {
  laraAquamarine, laraBlue,
  laraGray,
  laraGreen,
  laraOrange, laraPink, laraPurple, laraRed, laraSuccess, laraYellow,
} from '../../../../styles/colors';
import Button from '../../Buttons/Button';

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
}

function GetPalette(): JSX.Element {
  const palette = (title: string, colors: string[]): JSX.Element => (
    <Stack>
      <Group position="apart">
        <Title order={4} color={colors[4]}>{title}</Title>
        <Button variant="subtle" color="violet.4" rightIcon={<Copy />} size="xs" onClick={() => copyToClipboard(colors?.toString())}>
          Copy
        </Button>
      </Group>
      <Group spacing="xs">
        {colors?.map((color: any, index: number) => (
          <Stack key={index} align="center" sx={{ border: `1px solid ${color}`, borderRadius: '5px' }}>
            <div style={{
              height: '50px', width: '80px', backgroundColor: color, borderRadius: '2px 2px 0 0',
            }}
            />
            <Title order={6} color="gray.9">{color}</Title>
          </Stack>
        ))}
      </Group>
    </Stack>
  );

  return (
    <Stack>
      {palette('Violet', laraPurple)}
      {palette('Indigo', laraAquamarine)}
      {palette('Blue', laraBlue)}
      {palette('Green', laraGreen)}
      {palette('Gray', laraGray)}
      {palette('Orange', laraOrange)}
      {palette('Pink', laraPink)}
      {palette('Red', laraRed)}
      {palette('Teal', laraSuccess)}
      {palette('Yellow', laraYellow)}
    </Stack>
  );
}

export default {
  title: 'Theming/Palette',
  tags: ['autodocs'],
  decorators: [
    () => (
      <GetPalette />
    ),
  ],
} as Meta;

export const PaletteOBJ: StoryObj = {
};
