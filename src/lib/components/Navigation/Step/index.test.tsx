import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tabs from '.';

describe('Tabs', () => {
  const mockTabs = [
    { value: 'tab1', text: 'Tab 1' },
    { value: 'tab2', text: 'Tab 2' },
    { value: 'tab3', text: 'Tab 3' },
  ];

  const mockPanels = [
    { component: <div>Panel 1 Content</div>, value: 'tab1' },
    { component: <div>Panel 2 Content</div>, value: 'tab2' },
    { component: <div>Panel 3 Content</div>, value: 'tab3' },
  ];

  it('Should render tabs and panels correctly', () => {
    const { getByText } = render(<Tabs tabs={mockTabs} panels={mockPanels} defaultValue="tab1" />);

    mockTabs.forEach((tab) => {
      const tabElement = getByText(tab.text);
      expect(tabElement).toBeInTheDocument();
    });

    mockPanels.forEach((panel) => {
      const panelElement = getByText(`Panel ${panel.value.split('tab')[1]} Content`);
      expect(panelElement).toBeInTheDocument();
    });
  });

  it('Should switch panels when tabs are clicked', async () => {
    const { getByText } = render(<Tabs tabs={mockTabs} panels={mockPanels} defaultValue="tab1" />);

    const tab1 = getByText('Tab 1');
    const tab2 = getByText('Tab 2');

    const panel1Content = getByText('Panel 1 Content');
    const panel2Content = getByText('Panel 2 Content');

    expect(panel1Content).toBeInTheDocument();

    fireEvent.click(tab2);

    expect(panel2Content).toBeInTheDocument();

    fireEvent.click(tab1);

    expect(panel1Content).toBeInTheDocument();
  });
});
