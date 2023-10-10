import { DatePicker, DatePickerProps } from '@mantine/dates';
import 'dayjs/locale/pt';

export default function DateInput(props: Omit<DatePickerProps, 'locale'>): JSX.Element {
  const { inputFormat, ...rest } = props;

  const transformToUSADate = (value: string): Date => {
    const newValue = value.replace(/[^\d]/g, '');
    return new Date(newValue.replace(/(\d{2})(\d{2})(\d{4})/, '$2-$1-$3'));
  };

  let format = inputFormat;
  if (!format) {
    format = 'DD/MM/YYYY';
  }

  return (
    <DatePicker
      allowFreeInput
      dateParser={transformToUSADate}
      locale="pt-BR"
      inputFormat={format}
      {...rest}
    />
  );
}
