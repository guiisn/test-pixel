/* eslint-disable @typescript-eslint/no-explicit-any */
import useStyles from './styles';

type IHeader = {value: string, label: string}

export interface PaperTableProps {
    header: IHeader[]
    body?: object[]
    tableTitle?: string
    tableTitleColor?: string
}

export default function PaperTable({
  header, body, tableTitle, tableTitleColor,
}: PaperTableProps): JSX.Element {
  const { classes } = useStyles({ tableTitleColor });

  return (
    <table className={classes.table}>
      <thead>
        {tableTitle ? (
          <tr className={classes.tableTitle}>
            {tableTitle}
          </tr>
        ) : null}
        <tr>
          {header?.map((column:IHeader, index: number) => (
            <th key={index}>{column?.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body?.map((row: any, key: number) => (
          <tr key={key}>
            {header?.map((column:IHeader, index: number) => (
              <td key={index}>{row[column?.value]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
