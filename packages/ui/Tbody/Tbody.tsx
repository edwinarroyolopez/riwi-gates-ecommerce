import React from 'react';
import styled from 'styled-components';

const Tbody = styled.tbody``;
const Tr = styled.tr``;
const Td = styled.td``;

interface TableBodyProps<T> {
  data: T[];
  columns: {
    [key: string]: {
      label: string;
      render: (item: T) => React.ReactNode;
    };
  };
}

const TableBody: <T>({data, columns}: TableBodyProps<T>) => JSX.Element = ({data, columns}) => {
  return (
    <Tbody>
      {data.map((item, index) => (
        <Tr key={index}>
          {Object.keys(columns).map((key) => (
            <Td key={key}>{columns[key].render(item)}</Td>
          ))}
        </Tr>
      ))}
    </Tbody>
    );
};

  export default TableBody;