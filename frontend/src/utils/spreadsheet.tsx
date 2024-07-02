import { Column, Row, TextCell, HeaderCell, DefaultCellTypes } from '@silevis/reactgrid';

const defaultRowCount = 8;
const defaultColCount = 5;

export const createHeaderCell = (text: string): HeaderCell => ({
  type: 'header',
  text,
  className: 'header-cell',
});

export const createTextCell = (text: string): TextCell => ({
  type: 'text',
  text,
  className: 'text-cell',
});

export const initializeColumns = (columns: Column[]): Column[] => {
  const initializedColumns = [...columns];
  for (let i = columns.length; i < defaultColCount; i++) {
    initializedColumns.push({
      columnId: `column_${i}`,
      width: 150,
    });
  }
  return initializedColumns;
};

export const initializeRows = (rows: Row<DefaultCellTypes>[], columns: Column[]): Row<DefaultCellTypes>[] => {
  const initializedRows = rows.map(row => {
    const newRow = { ...row, cells: [...row.cells] };
    for (let i = row.cells.length; i < columns.length; i++) {
      newRow.cells.push(createTextCell(''));
    }
    return newRow;
  });

  for (let i = rows.length; i < defaultRowCount; i++) {
    const newRow: Row<DefaultCellTypes> = {
      rowId: `row_${i}`,
      cells: columns.map((col, index) => ({
        ...createTextCell(''),
        columnId: col.columnId,
        rowId: `row_${i}`,
      })),
    };
    initializedRows.push(newRow);
  }

  return initializedRows;
};

export const generateColumnHeaders = (columns: Column[]): HeaderCell[] => {
  const headers: HeaderCell[] = [];
  for (let i = 0; i < columns.length; i++) {
    headers.push(createHeaderCell(String.fromCharCode(65 + i)));
  }
  return headers;
};

export const generateGrid = (columns: Column[], rows: Row<DefaultCellTypes>[]) => {
  const gridColumns = [{ columnId: 'header', width: 50 }, ...columns];
  const gridRows = [
    { rowId: 'header', cells: [{ type: 'text', text: '', className: 'header-cell' }, ...generateColumnHeaders(columns)] },
    ...rows.map((row, index) => ({
      rowId: row.rowId,
      cells: [
        { type: 'text', text: (index + 1).toString(), nonEditable: true, className: 'header-cell', columnId: 'header' },
        ...row.cells.map((cell, cellIndex) => ({ ...cell, columnId: columns[cellIndex].columnId })),
      ],
    })),
  ];
  return { gridColumns, gridRows };
};
