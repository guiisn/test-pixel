import {
  Loader as MantineLoader, LoaderProps as MantineLoaderProps,
  MantineLoader as MantineLoaderType,
} from '@mantine/core';
import CircleProgress from './components/CirlceProgress';

export interface LoaderProps extends Omit<MantineLoaderProps, 'variant'> {
    variant: MantineLoaderType | 'percentage'
    value?: number
}

export default function Loader({ variant = 'dots', value }: LoaderProps): JSX.Element {
  return (
    <>
      {variant !== 'percentage' && (
        <MantineLoader variant={variant} />
      )}
      {variant === 'percentage' && (
        <CircleProgress value={value ?? 0} />
      )}
    </>
  );
}
