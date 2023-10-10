import { Check, X } from 'tabler-icons-react';
import useStyles from './styles';

export interface CircleCheckProps {
  color?: string
  mode?: 'ERROR' | 'SUCCESS'
}

export default function CircleCheck({ color, mode = 'SUCCESS' }: CircleCheckProps): JSX.Element {
  const { classes } = useStyles({ color });

  return (
    <div className={classes.checkmark} data-testid="circleCheck">
      {mode === 'SUCCESS' ? (
        <Check className={classes.check} size="50%" color="white" data-testid="success" />
      ) : (
        <X className={classes.check} size="50%" color="white" data-testid="error" />
      )}
    </div>
  );
}
