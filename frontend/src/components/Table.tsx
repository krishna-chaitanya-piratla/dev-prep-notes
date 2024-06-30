import React, { useState } from 'react';
import { TableContent, TableColumnHeaders, TableRow } from '../types/Page';
import {
  TableWrapper,
  TableHeader,
  TableRowWrapper,
  TableCell,
  SortIconContainer,
  SortIcon,
  ResetSortButton,
} from '../styles/Page/Table';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import ClearIcon from '@mui/icons-material/Clear';

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
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' }[]>([]);

  const headers = content.contents.find((item) => item.type === 'column-headers') as TableColumnHeaders;
  const rows = content.contents.filter((item) => item.type === 'table-row') as TableRow[];

  const sortedRows = [...rows].sort((a, b) => {
    for (const { key, direction } of sortConfig) {
      const index = headers.contents.indexOf(key);
      if (a.contents[index] < b.contents[index]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a.contents[index] > b.contents[index]) {
        return direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  const handleSort = (key: string) => {
    setSortConfig((prevConfig) => {
      const existingSort = prevConfig.find((sort) => sort.key === key);
      if (existingSort) {
        return prevConfig.map((sort) =>
          sort.key === key ? { ...sort, direction: sort.direction === 'asc' ? 'desc' : 'asc' } : sort
        );
      } else {
        return [...prevConfig, { key, direction: 'asc' }];
      }
    });
  };

  const handleResetSort = (key: string) => {
    setSortConfig((prevConfig) => prevConfig.filter((sort) => sort.key !== key));
  };

  const renderHeader = (header: TableColumnHeaders) => (
    <tr key={header.id}>
      {header.contents.map((headerItem, index) => {
        const sort = sortConfig.find((sort) => sort.key === headerItem);
        return (
          <TableHeader key={index} onClick={() => handleSort(headerItem)}>
            {headerItem}
            <SortIconContainer>
              {sort ? (
                sort.direction === 'asc' ? (
                  <SortIcon>
                    <NorthIcon />
                    <ResetSortButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleResetSort(headerItem);
                      }}
                    >
                      <ClearIcon />
                    </ResetSortButton>
                  </SortIcon>
                ) : (
                  <SortIcon>
                    <SouthIcon />
                    <ResetSortButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleResetSort(headerItem);
                      }}
                    >
                      <ClearIcon />
                    </ResetSortButton>
                  </SortIcon>
                )
              ) : (
                <SortIcon>
                  <SwapVertIcon />
                </SortIcon>
              )}
            </SortIconContainer>
          </TableHeader>
        );
      })}
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

  return (
    <TableWrapper>
      <thead>{renderHeader(headers)}</thead>
      <tbody>{sortedRows.map((row) => renderRow(row, headers.columnTypes))}</tbody>
    </TableWrapper>
  );
};

export default Table;
