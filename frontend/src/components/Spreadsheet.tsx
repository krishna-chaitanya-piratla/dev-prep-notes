import React, { useState, useEffect } from 'react';
import { ReactGrid, Column, Row, CellChange, TextCell, DefaultCellTypes, HeaderCell } from '@silevis/reactgrid';
import '@silevis/reactgrid/styles.css';
import { SpreadsheetWrapper, StyledSpreadsheet } from '../styles/Page/Spreadsheet';

interface SpreadsheetProps {
  data: {
    columns: Column[];
    rows: Row<DefaultCellTypes>[];
  };
}

const createHeaderCell = (text: string): HeaderCell => ({
  type: 'header',
  text,
  className: 'header-cell',
});

const createTextCell = (text: string): TextCell => ({
  type: 'text',
  text,
  className: 'text-cell',
});

const Spreadsheet: React.FC<SpreadsheetProps> = ({ data }) => {
  const defaultRowCount = 8;
  const defaultColCount = 5;

  const initializeColumns = (columns: Column[]) => {
    const initializedColumns = [...columns];
    for (let i = columns.length; i < defaultColCount; i++) {
      initializedColumns.push({
        columnId: `column_${i}`,
        width: 150,
      });
    }
    return initializedColumns;
  };

  const initializeRows = (rows: Row<DefaultCellTypes>[], columns: Column[]) => {
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

  const [columns, setColumns] = useState<Column[]>(initializeColumns(data.columns || []));
  const [rows, setRows] = useState<Row<DefaultCellTypes>[]>(initializeRows(data.rows || [], columns));

  useEffect(() => {
    const initializedColumns = initializeColumns(data.columns || []);
    setColumns(initializedColumns);
    setRows(initializeRows(data.rows || [], initializedColumns));
  }, [data]);

  const handleChanges = (changes: CellChange<DefaultCellTypes>[]) => {
    const newRows = [...rows];
    changes.forEach(change => {
      const row = newRows.find(r => r.rowId === change.rowId);
      if (row) {
        const cellIndex = row.cells.findIndex(c => (c as any).columnId === change.columnId);
        if (cellIndex !== -1) {
          const cell = row.cells[cellIndex];
          if ((cell as TextCell).type === 'text') {
            const textCell = cell as TextCell;
            textCell.text = (change.newCell as TextCell).text;
            row.cells[cellIndex] = textCell;
          }
        }
      }
    });
    setRows(newRows);
  };

  const generateColumnHeaders = () => {
    const headers: HeaderCell[] = [];
    for (let i = 0; i < columns.length; i++) {
      headers.push(createHeaderCell(String.fromCharCode(65 + i)));
    }
    return headers;
  };

  const generateRowHeaders = () => {
    const headers: Row<DefaultCellTypes>[] = [];
    for (let i = 0; i < rows.length; i++) {
      headers.push({
        rowId: `header_${i}`,
        cells: [createHeaderCell((i + 1).toString())],
      });
    }
    return headers;
  };

  const generateGrid = () => {
    const gridColumns = [{ columnId: 'header', width: 50 }, ...columns];
    const gridRows = [{ rowId: 'header', cells: [{ type: 'text', text: '', className: 'header-cell' }, ...generateColumnHeaders()] }, ...rows.map((row, index) => ({ rowId: row.rowId, cells: [{ type: 'text', text: (index + 1).toString(), nonEditable: true, className: 'header-cell' }, ...row.cells.map(cell => createTextCell((cell as TextCell).text))] }))];
    return { gridColumns, gridRows };
  };

  const { gridColumns, gridRows } = generateGrid();

  return (
    <SpreadsheetWrapper>
      <StyledSpreadsheet>
        <ReactGrid
          rows={gridRows}
          columns={gridColumns}
          onCellsChanged={handleChanges}
        />
      </StyledSpreadsheet>
    </SpreadsheetWrapper>
  );
};

export default Spreadsheet;
