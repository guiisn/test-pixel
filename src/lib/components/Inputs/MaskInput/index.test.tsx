import { render, screen } from '@testing-library/react';

import MaskInput, { MaskTypes } from '.';

describe('MaskInput Component', () => {
  const mockProps = {
    maskType: 'cpf' as MaskTypes,
    value: '12345678900',
    defaultValue: '12345678900',
    label: 'CPF',
  };

  beforeEach(() => render(
    <MaskInput
      {...mockProps}
    />,
  ));

  it('renders the MaskInput component with provided props', () => {
    const maskInput = screen.getByRole('textbox');
    expect(maskInput).toBeInTheDocument();
  });

  it('displays the masked value based on the mask type', () => {
    const maskInput = screen.getByRole('textbox');
    expect(maskInput).toHaveValue('123.456.789-00');
  });
});
