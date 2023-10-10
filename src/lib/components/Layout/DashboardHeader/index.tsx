/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Drawer,
  Group,
  Text,
  TextInput,
} from '@mantine/core';
import { useState } from 'react';
import { Filter, Plus } from 'tabler-icons-react';
import { Button, Tabs } from '../../..';
import { CustomTabsProps } from '../../Navigation/Step';

export interface DashboardHeaderProps {
    showFilterButton?: boolean
    tabsProps: CustomTabsProps
    onSearchBarChange: (event: any) => void;
    moreOptions: JSX.Element[]
}

export default function DashboardHeader({
  showFilterButton,
  tabsProps,
  onSearchBarChange,
  moreOptions,
}: DashboardHeaderProps): JSX.Element {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group position="apart" align="flex-start">
        <TextInput
          onChange={onSearchBarChange}
          placeholder="Buscar"
          size="xs"
        />
        <Tabs {...tabsProps} />
        <Group>
          {moreOptions?.map((option) => option)}
          <Button
            display={!showFilterButton ? 'none' : 'flex'}
            variant="outline"
            color="violet.4"
            leftIcon={<Filter />}
            onClick={() => setOpened(true)}
          >
            Filtros
          </Button>
          <Button leftIcon={<Plus />} color="violet.4">
            Nova
          </Button>
        </Group>
      </Group>
      <Drawer
        position="right"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Filtros"
        padding="xl"
        styles={{
          root: {
            borderRadius: '30px 0 0 0',
            padding: '2.5rem 2.335rem',
          },
          title: {
            fontWeight: 800,
            fontSize: '2rem',
            fontFamily: 'Nunito',
          },
          body: {
            height: '90%',
          },
        }}
      >
        <Text color="violet.4" fz="1.275rem" fw={600}>
          Não há opções de filtros para esta busca.
        </Text>
      </Drawer>
    </>
  );
}
