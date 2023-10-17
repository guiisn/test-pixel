import { NavLink as MantineNavLink, NavLinkProps as MantineNavLinkProps } from '@mantine/core';
import React from 'react';
import classes from './Navlink.module.css';

export interface NavLinkProps extends MantineNavLinkProps {
    variant?: 'dead' | 'son' | 'footer'
    icon?: React.ReactNode
}

export default function NavLink({
  variant = 'dead', label, icon, childrenOffset, active, onClick, children, ...rest
}: NavLinkProps): JSX.Element {
  const style = {
    label: {
      dead: classes.navlinkDeadLabel,
      son: classes.navlinkSonLabel,
      footer: classes.navlinkFooterLabel,
    },
    root: {
      dead: classes.navlinkDeadRoot,
      son: classes.navlinkSonRoot,
      footer: classes.navlinkFooterRoot,
    },
  };

  return (
    <MantineNavLink
      label={label}
      leftSection={icon}
      childrenOffset={childrenOffset}
      active={active}
      onClick={onClick}
      classNames={{
        label: style.label[variant],
        root: style.root[variant],
      }}
      {...rest}
    >
      {children}
    </MantineNavLink>
  );
}
