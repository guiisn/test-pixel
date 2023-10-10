import { useEffect, useRef } from 'react';
import useStyles from './style';

export default function CircleProgress({ value }: {value: number}): JSX.Element {
  const { classes } = useStyles();

  const circleRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    if (circleRef.current) {
      const circle = circleRef.current;
      const strokeDashoffset = 503 - (503 * (value / 100));
      circle.style.strokeDashoffset = strokeDashoffset.toString();
    }
  }, [value]);

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <p>
          <span>{value}</span>
          <span>%</span>
        </p>
      </div>
      <svg className={classes.svg}>
        <circle
          className={classes.thumb}
          cx="90"
          cy="90"
          r="80"
        />
        <circle
          ref={circleRef}
          className={classes.circle}
          cx="90"
          cy="90"
          r="80"
        />
      </svg>
    </div>
  );
}
