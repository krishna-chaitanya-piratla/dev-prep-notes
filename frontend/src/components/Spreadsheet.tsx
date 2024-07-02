import React, { useState } from 'react';
import { ReactGrid, Column, Row, CellChange, TextCell, Id, DefaultCellTypes } from '@silevis/reactgrid';
import '@silevis/reactgrid/styles.css';
import { SpreadsheetWrapper, StyledSpreadsheet } from '../styles/Page/Spreadsheet';

interface SpreadsheetProps {
  data: {
    columns: Column[];
    rows: Row<DefaultCellTypes>[];
  };
}

const Spreadsheet: React.FC<SpreadsheetProps> = ({ data }) => {
  const [columns, setColumns] = useState<Column[]>(data.columns || []);
  const [rows, setRows] = useState<Row<DefaultCellTypes>[]>(data.rows || []);

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

  return (
    <SpreadsheetWrapper>
      <StyledSpreadsheet>
        <ReactGrid
          rows={rows}
          columns={columns}
          onCellsChanged={handleChanges}
        />
      </StyledSpreadsheet>
    </SpreadsheetWrapper>
  );
};

export default Spreadsheet;
