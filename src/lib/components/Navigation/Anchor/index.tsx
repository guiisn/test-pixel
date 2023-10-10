import { AnchorProps, Anchor as MantineAnchor } from '@mantine/core';

export default function Anchor(props: AnchorProps): JSX.Element {
  return (
    <MantineAnchor {...props} />
  );
}
