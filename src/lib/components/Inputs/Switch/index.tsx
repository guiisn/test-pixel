import { Switch as MantineSwitch, SwitchProps } from '@mantine/core';
import React, { useEffect, useState } from 'react';

export default function Switch(props: SwitchProps): JSX.Element {
  const [defaultChecked, setDefaultChecked] = useState(false);
  const { checked, ...rest } = props;

  useEffect(() => {
    setDefaultChecked(Boolean(checked));
  }, [checked]);

  return (
    <MantineSwitch
      color="gray.0"
      styles={{
        root: {
          border: 'none',
        },
        track: {
          border: 'none',
          height: '2.18rem',
          width: '4.375rem',
          padding: 0,
          margin: 0,
        },
        thumb: {
          backgroundColor: checked ? '#20F68F' : '#EB5757',
          border: 'none',
          height: '2.18rem',
          width: '2.18rem',
        },
        label: {
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          fontWeight: 700,
          fontSize: '1.125rem',
        },
      }}
      defaultChecked={defaultChecked}
      {...rest}
    />
  );
}
