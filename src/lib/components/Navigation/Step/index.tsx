import { Tabs as MantineTabs } from '@mantine/core';
import StyledTabs from './StylesTabs';

export interface CustomTabsProps {
    tabs: Array<{ value: string, text: string }>
    panels?: Array<{component: JSX.Element, value: string}>
    defaultValue: string
}

export default function Tabs(props: CustomTabsProps): JSX.Element {
  const { defaultValue, tabs, panels } = props;

  return (
    <StyledTabs
      defaultValue={defaultValue}
      orientation="horizontal"
    >
      <MantineTabs.List>
        <MantineTabs.List>
          {tabs?.map((tab, index) => (
            <MantineTabs.Tab key={index} value={tab?.value}>
              {tab?.text}
            </MantineTabs.Tab>
          ))}
        </MantineTabs.List>

        {panels?.map((panel, index) => (
          <MantineTabs.Panel w="100%" value={panel?.value} key={index}>
            {panel?.component}
          </MantineTabs.Panel>
        ))}

      </MantineTabs.List>
    </StyledTabs>
  );
}
