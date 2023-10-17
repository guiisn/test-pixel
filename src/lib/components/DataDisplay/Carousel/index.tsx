import { Carousel as MantineCarousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import classes from './Carousel.module.css';

export interface ICarousel {
  data?: Array<string>
}

export default function Carousel({ data }: ICarousel): JSX.Element {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <MantineCarousel
      data-testid="carousel"
      withIndicators
      height={200}
      plugins={[autoplay.current]}
      withControls={false}
      classNames={{
        root: classes.root,
        viewport: classes.viewport,
        indicator: classes.indicator,
      }}
    >
      {data && data.map((image, index) => (
        <MantineCarousel.Slide
          key={index}
          className={classes.slide}
          data-testid="slide"
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            key={index}
            className={classes.image}
          />
        </MantineCarousel.Slide>
      ))}
    </MantineCarousel>
  );
}
