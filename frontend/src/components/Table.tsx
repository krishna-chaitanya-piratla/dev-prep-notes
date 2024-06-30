import React from 'react';
import { TableContent, TableColumnHeaders, TableRow } from '../types/Page';
import { TableWrapper, TableHeader, TableRowWrapper, TableCell } from '../styles/Page/Table';

interface TableProps {
  content: TableContent;
}

const validateColumnType = (value: string | number | boolean, type: string): boolean => {
  switch (type) {
    case 'Alphanumeric':
      return typeof value === 'string' || typeof value === 'number';
    case 'Number':
      return typeof value === 'number';
    case 'Boolean':
      return typeof value === 'boolean';
    default:
      return true;
  }
};

const displayValue = (value: string | number | boolean, type: string) => {
  if (type === 'Boolean') {
    return value ? 'Yes' : 'No';
  }
  return value;
};

const Table: React.FC<TableProps> = ({ content }) => {
  const renderHeader = (header: TableColumnHeaders) => (
    <tr key={header.id}>
      {header.contents.map((headerItem, index) => (
        <TableHeader key={index}>{headerItem}</TableHeader>
      ))}
    </tr>
  );

  const renderRow = (row: TableRow, columnTypes: string[]) => (
    <TableRowWrapper key={row.id}>
      {row.contents.map((rowItem, index) => {
        const isValid = validateColumnType(rowItem, columnTypes[index]);
        return (
          <TableCell key={index} className={isValid ? '' : 'invalid'}>
            {displayValue(rowItem, columnTypes[index])}
            {!isValid && <span className="tooltip">The data does not match column type</span>}
          </TableCell>
        );
      })}
    </TableRowWrapper>
  );

  const headers = content.contents.find((item) => item.type === 'column-headers') as TableColumnHeaders;
  const rows = content.contents.filter((item) => item.type === 'table-row') as TableRow[];

  return (
    <TableWrapper>
      <thead>{renderHeader(headers)}</thead>
      <tbody>{rows.map((row) => renderRow(row, headers.columnTypes))}</tbody>
    </TableWrapper>
  );
};

export default Table;
