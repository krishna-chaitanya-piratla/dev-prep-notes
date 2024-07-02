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
    const newRow = { ...row };
    for (let i = row.cells.length; i < columns.length; i++) {
      newRow.cells.push(createTextCell(''));
    }
    return newRow;
  });

  for (let i = rows.length; i < defaultRowCount; i++) {
    const newRow: Row<DefaultCellTypes> = {
      rowId: `row_${i}`,
      cells: columns.map(col => createTextCell('')),
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

export const generateRowHeaders = (rows: Row<DefaultCellTypes>[]): Row<DefaultCellTypes>[] => {
  const headers: Row<DefaultCellTypes>[] = [];
  for (let i = 0; i < rows.length; i++) {
    headers.push({
      rowId: `header_${i}`,
      cells: [createHeaderCell((i + 1).toString())],
    });
  }
  return headers;
};

export const generateGrid = (columns: Column[], rows: Row<DefaultCellTypes>[]) => {
  const gridColumns = [{ columnId: 'header', width: 50 }, ...columns];
  const gridRows = [{ rowId: 'header', cells: [{ type: 'text', text: '', className: 'header-cell' }, ...generateColumnHeaders(columns)] }, ...rows.map((row, index) => ({ rowId: row.rowId, cells: [{ type: 'text', text: (index + 1).toString(), nonEditable: true, className: 'header-cell' }, ...row.cells.map(cell => createTextCell((cell as TextCell).text))] }))];
  return { gridColumns, gridRows };
};
