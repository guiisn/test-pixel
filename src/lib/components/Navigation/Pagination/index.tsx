import {
  Box,
  Pagination, PaginationProps,
} from '@mantine/core';
import classes from './Pagination.module.css';

export default function TablePagination(props: PaginationProps): JSX.Element {
  const { onChange, total } = props;
  return (
    <Box className={classes.component} data-testid="paginationContainer">
      <Pagination
        data-testid="pagination-element"
        onChange={onChange}
        total={total}
        radius="xl"
        c="violet.4"
        classNames={{
          control: classes.control,
        }}
      />
    </Box>
  );
}
