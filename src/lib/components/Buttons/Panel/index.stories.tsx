import { Meta, StoryObj } from '@storybook/react';

import { ReportMoney } from 'tabler-icons-react';
import logo from '../../../../assets/logo.svg';
import ProposalButton, { PanelButtonProps } from '.';

export default {
  title: 'Components/Buttons/PanelButton',
  component: ProposalButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        {Story()}
      </div>
    ),
  ],
} as Meta<PanelButtonProps>;

export const Component: StoryObj<PanelButtonProps> = {
  args: {
    selected: false,
    icon: <ReportMoney />,
    text: 'Parcelado sem juros',
    onClick: (e) => console.log(e),
  },
};

export const Selected: StoryObj<PanelButtonProps> = {
  args: {
    selected: true,
    icon: <ReportMoney />,
    text: 'Parcelado sem juros',
  },
};
export const WithImage: StoryObj<PanelButtonProps> = {
  args: {
    selected: false,
    icon: <img src={logo} alt="Lara" />,
  },
};
