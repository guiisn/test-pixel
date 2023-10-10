import { render, screen } from '@testing-library/react';

import FileDropzone from '.';

describe('FileDropzone Component', () => {
  const mockProps = {
    title: 'Upload File',
    subtitle: 'Drag and drop your file here',
    sizeText: 'Maximum file size: 10MB',
    fileName: 'example.txt',
    onDrop: jest.fn(),
  };

  it('renders the FileDropzone component with provided props', () => {
    render(<FileDropzone {...mockProps} />);

    expect(screen.getByText('Upload File')).toBeInTheDocument();
    expect(screen.getByText('Drag and drop your file here')).toBeInTheDocument();
  });
});
