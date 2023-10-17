import {
  Stack, Text, useMantineTheme,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ReportMoney } from 'tabler-icons-react';
import Modal from '.';
import Button from '../../Buttons/Button';

export default {
  title: 'Components/Overlays/Modals',
  component: Modal,
  tags: ['autodocs'],
} as Meta<typeof Modal>;

export const Success: StoryObj<typeof Modal> = {
  decorators: [
    () => {
      const [opened, setOpened] = useState(false);

      return (
        <>
          <Button
            c="violet.4"
            onClick={() => setOpened(true)}
          >
            Open success modal
          </Button>
          <Modal
            type="SUCCESS"
            opened={opened}
            onClose={() => setOpened(false)}
            title="Modal title"
            subtitle="Modal subtitle"
          />
        </>
      );
    },
  ],
};

export const Error: StoryObj<typeof Modal> = {
  decorators: [
    () => {
      const [opened, setOpened] = useState(false);

      return (
        <>
          <Button
            c="violet.4"
            onClick={() => setOpened(true)}
          >
            Open error modal
          </Button>
          <Modal
            type="ERROR"
            opened={opened}
            onClose={() => setOpened(false)}
            title="Modal title"
            subtitle="Modal subtitle"
          />
        </>
      );
    },
  ],
};

export const Confirm: StoryObj<typeof Modal> = {
  decorators: [
    () => {
      const [opened, setOpened] = useState(false);
      const { colors } = useMantineTheme();

      return (
        <>
          <Button
            c="violet.4"
            onClick={() => setOpened(true)}
          >
            Open confirm modal
          </Button>
          <Modal
            type="CONFIRM"
            opened={opened}
            onClose={() => setOpened(false)}
            onConfirm={() => setOpened(false)}
            title="Modal title"
            subtitle="Modal subtitle"
            icon={<ReportMoney c={colors.violet[4]} />}
          />
        </>
      );
    },
  ],
};

export const Progress: StoryObj<typeof Modal> = {
  decorators: [
    () => {
      const [opened, setOpened] = useState(false);

      return (
        <>
          <Button
            c="violet.4"
            onClick={() => setOpened(true)}
          >
            Open confirm modal
          </Button>
          <Modal
            type="PROGRESS"
            opened={opened}
            onClose={() => setOpened(false)}
            title="Modal title"
            subtitle="Modal subtitle"
            percentage={18}
          />
        </>
      );
    },
  ],
};

export const Custom: StoryObj<typeof Modal> = {
  decorators: [
    () => {
      const [opened, setOpened] = useState(false);

      return (
        <>
          <Button
            c="violet.4"
            onClick={() => setOpened(true)}
          >
            Open confirm modal
          </Button>
          <Modal
            type="CUSTOM"
            opened={opened}
            onClose={() => setOpened(false)}
          >
            <Stack style={{ gap: 0 }} align="center">
              <Text fz="1.75rem" fw={700}>
                Custom modal
              </Text>
              <Text fz="1.125rem" fw={500}>
                This modal gives you the freedom to insert anything here
              </Text>
              <Button onClick={() => setOpened(false)} variant="filled" c="violet.4">
                Ok
              </Button>
            </Stack>
          </Modal>
        </>
      );
    },
  ],
};
