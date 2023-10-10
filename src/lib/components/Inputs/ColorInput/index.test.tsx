import { render, screen, fireEvent } from '@testing-library/react';
import ColorInput from '.';

describe('ColorInput Component', () => {
  it('calls the onChange function when the color value is changed', () => {
    const handleChange = jest.fn();
    render(<ColorInput value="#FF0000" onChange={handleChange} />);

    const colorInput = screen.getByRole('textbox');

    fireEvent.change(colorInput, { target: { value: '#00FF00' } });

    expect(handleChange).toHaveBeenCalledWith('#00FF00');
  });
});
