import { TextInputProps } from '@mantine/core';

import { NumericFormat, PatternFormat } from 'react-number-format';
import TextInput from '../TextInput';
import masks from './masks';

type InputProps = Omit<TextInputProps, 'type' | 'value' | 'defaultValue'>;
export type MaskTypes = 'cpf' | 'cnpj' | 'zip' | 'cellphone' | 'BRLCurrency' | 'percentage';

export interface MaskInputProps extends InputProps {
  maskType: MaskTypes
  value: string | number | null | undefined;
  defaultValue: string | number | null | undefined;
}

export default function MaskInput(props: MaskInputProps): JSX.Element {
  const {
    maskType, value, defaultValue, ...rest
  } = props;
  const commonFormatProps = {
    thousandSeparator: '.',
    decimalSeparator: ',',
    decimalScale: 2,
    fixedDecimalScale: true,
    allowNegative: false,
    customInput: TextInput,
    ...rest,
  };

  if (maskType === 'BRLCurrency' || maskType === 'percentage') {
    const additionalFormatProps = maskType === 'BRLCurrency' ? { prefix: 'R$ ' } : { suffix: ' %' };
    return <NumericFormat {...commonFormatProps} {...additionalFormatProps} />;
  }
  return (
    <PatternFormat
      format={masks[maskType]}
      customInput={TextInput}
      mask="_"
      value={value !== undefined ? value : defaultValue !== undefined ? defaultValue : ''}
      {...rest}
    />
  );
}
