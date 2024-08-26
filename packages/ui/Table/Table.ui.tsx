import TableBody from '../Tbody/Tbody'
import THead from '../Thead/Thead.ui'

import React from 'react';

interface TableProps<T> {
  columns: string[];
  data: T[];
  columnDefinitions: {
    [key: string]: {
      label: string;
      render: (item: T) => React.ReactNode;
    };
  };
}

const Table: <T>({ columns, data, columnDefinitions }: TableProps<T>) => JSX.Element = ({ columns, data, columnDefinitions }) => {
  return (
    <table>
      <THead columns={columns} />
      <TableBody data={data} columns={columnDefinitions} />
    </table>
  );
};

export default Table;
