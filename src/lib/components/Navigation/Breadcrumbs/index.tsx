import { Anchor, Breadcrumbs as MantineBreadcrumbs } from '@mantine/core';
import classes from './Breadcrumbs.module.css';

export interface BreadcrumbsProps {
    items: {
        title: string;
        href: string;
    }[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps): JSX.Element {
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
