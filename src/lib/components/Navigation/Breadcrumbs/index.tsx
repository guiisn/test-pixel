import { Anchor, Breadcrumbs as MantineBreadcrumbs } from '@mantine/core';
import useStyles from './style';

export interface BreadcrumbsProps {
    items: {
        title: string;
        href: string;
    }[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps): JSX.Element {
  const { classes } = useStyles();
  return (
    <MantineBreadcrumbs
      classNames={{
        root: classes.root,
        breadcrumb: classes.breadcrumb,
        separator: classes.separator,
      }}
    >
      {items?.map((item, index) => (
        <Anchor href={item.href} key={index}>
          {item.title}
        </Anchor>
      ))}
    </MantineBreadcrumbs>
  );
}
