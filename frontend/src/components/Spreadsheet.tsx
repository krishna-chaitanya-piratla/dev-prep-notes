import React, { useState, useEffect } from 'react';
import { ReactGrid, Column, Row, CellChange, DefaultCellTypes, TextCell } from '@silevis/reactgrid';
import '@silevis/reactgrid/styles.css';
import { SpreadsheetWrapper, StyledSpreadsheet } from '../styles/Page/Spreadsheet';
import { initializeColumns, initializeRows, generateGrid } from '../utils/spreadsheet';

interface SpreadsheetProps {
  data: {
    columns: Column[];
    rows: Row<DefaultCellTypes>[];
  };
}

const Spreadsheet: React.FC<SpreadsheetProps> = ({ data }) => {
  const [columns, setColumns] = useState<Column[]>(initializeColumns(data.columns || []));
  const [rows, setRows] = useState<Row<DefaultCellTypes>[]>(initializeRows(data.rows || [], columns));

  useEffect(() => {
    const initializedColumns = initializeColumns(data.columns || []);
    setColumns(initializedColumns);
    setRows(initializeRows(data.rows || [], initializedColumns));
  }, [data]);

  const handleChanges = (changes: CellChange<DefaultCellTypes>[]) => {
    setRows(prevRows => {
      const newRows = [...prevRows];
      changes.forEach(change => {
        const row = newRows.find(r => r.rowId === change.rowId);
        if (row) {
          const cellIndex = row.cells.findIndex(c => (c as any).columnId === change.columnId);
          if (cellIndex !== -1) {
            row.cells[cellIndex] = { ...change.newCell } as TextCell;
          } else {
            row.cells.push({ ...change.newCell } as TextCell); // Add new cell if it doesn't exist
          }
        }
      });
      return newRows;
    });
  };

  const { gridColumns, gridRows } = generateGrid(columns, rows);

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
