import { render } from '@testing-library/react';

import Accordion from '.';

const mockAccordions = [
  {
    value: 'Accordion 1',
    control: <div>Toggle 1</div>,
    panel: <div>Content 1</div>,
  },
  {
    value: 'Accordion 2',
    control: <div>Toggle 2</div>,
    panel: <div>Content 2</div>,
  },
];

describe('Accordion', () => {
  it('renders without errors', () => {
    const { container } = render(<Accordion accordions={mockAccordions} />);
    expect(container).toBeInTheDocument();
  });
});
