import { Box, Accordion as MantineAccordion } from '@mantine/core';
import classes from './Accordion.module.css';

interface IAccordions {
    value: string
    control: JSX.Element
    panel: JSX.Element
}

export interface AccordionProps {
    accordions: IAccordions[]
}

export default function Accordion({ accordions }: AccordionProps): JSX.Element {
  return (
    <Box className={classes.container}>
      <MantineAccordion classNames={{
        item: classes.item,
        control: classes.control,
      }}
      >
        {accordions?.map((accordion, index) => (
          <MantineAccordion.Item key={index} value={accordion?.value}>
            <MantineAccordion.Control>
              {accordion?.control}
            </MantineAccordion.Control>
            <MantineAccordion.Panel>
              {accordion?.panel}
            </MantineAccordion.Panel>
          </MantineAccordion.Item>
        ))}
      </MantineAccordion>
    </Box>
  );
}
