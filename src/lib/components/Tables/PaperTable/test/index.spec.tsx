import { render, screen } from '@testing-library/react';
import PaperTable from '..';

const headers = [
  { value: 'name', label: 'Name' },
  { value: 'age', label: 'Age' },
];

const data = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
];

const tableTitle = 'People';

describe('PaperTable', () => {
  test('Should render the table with title, headers, and body', () => {
    render(<PaperTable header={headers} body={data} tableTitle={tableTitle} tableTitlec="red" />);

    // title
    expect(screen.getByText('People')).toBeInTheDocument();

    // header
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();

    // body
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  test('Should render the table with headers and body', () => {
    render(<PaperTable header={headers} body={data} tableTitlec="red" />);

    // header
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();

    // body
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });
});
