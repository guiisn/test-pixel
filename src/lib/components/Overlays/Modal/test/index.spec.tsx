import { fireEvent, render, screen } from '@testing-library/react';
import Modal from '..';

test('render the Modal with type "SUCCESS"', () => {
  const onClose = jest.fn();
  render(
    <Modal
      type="SUCCESS"
      opened
      onClose={onClose}
      title="Title"
      subtitle="Subtitle"
    />,
  );

  const modalTitle = screen.getByText('Title');
  const modalSubtitle = screen.getByText('Subtitle');

  expect(modalTitle).toBeInTheDocument();
  expect(modalSubtitle).toBeInTheDocument();

  const closeButton = screen.getByRole('button', { name: 'Ok' });
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalled();
});

test('renders the Modal with type "CONFIRM"', () => {
  const onConfirm = jest.fn();
  render(
    <Modal
      type="CONFIRM"
      opened
      onClose={() => fireEvent.click}
      title="Title"
      subtitle="Subtitle"
      onConfirm={onConfirm}
    />,
  );

  const modalTitle = screen.getByText('Title');
  const modalSubtitle = screen.getByText('Subtitle');

  expect(modalTitle).toBeInTheDocument();
  expect(modalSubtitle).toBeInTheDocument();
});

test('renders the Modal with type "PROGRESS"', () => {
  render(
    <Modal
      type="PROGRESS"
      opened
      onClose={() => fireEvent.click}
      title="Title"
      subtitle="Subtitle"
      percentage={50}
    />,
  );

  const modalTitle = screen.getByText('Title');
  const modalSubtitle = screen.getByText('Subtitle');

  expect(modalTitle).toBeInTheDocument();
  expect(modalSubtitle).toBeInTheDocument();
});
