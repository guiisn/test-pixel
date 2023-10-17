import { Check, X } from 'tabler-icons-react';
import classes from './CircleCheck.module.css';

export interface CircleCheckProps {
  color?: string
  mode?: 'ERROR' | 'SUCCESS'
}

export default function CircleCheck({ color = '#700DFF', mode = 'SUCCESS' }: CircleCheckProps): JSX.Element {
  const circleCheckStyle = {
    '--custom-color': color,
  };

  return (
    <div
      className={classes.checkmark}
      style={circleCheckStyle as React.CSSProperties}
      data-testid="circleCheck"
    >
      {mode === 'SUCCESS' ? (
        <Check className={classes.check} size="50%" color="white" data-testid="success" />
      ) : (
        <X className={classes.check} size="50%" color="white" data-testid="error" />
      )}
    </div>
  );
}
