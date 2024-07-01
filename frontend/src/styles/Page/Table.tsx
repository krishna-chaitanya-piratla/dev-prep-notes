import styled from 'styled-components';

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  text-align: center;

  .invalid {
    position: relative;
  }

  .tooltip {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background-color: red;
    color: white;
    font-size: 0.75rem;
    padding: 0.25rem;
    border-radius: 0.25rem;
    visibility: hidden;
    z-index: 100;
  }

  .invalid:hover .tooltip {
    visibility: visible;
  }
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 0.5rem;
  background-color: #f2f2f2;
  position: relative;
  cursor: pointer;
`;

export const TableRowWrapper = styled.tr`
  border: 1px solid #ddd;
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
  position: relative;

  &.invalid::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border-top: 2px solid red;
    border-right: 2px solid red;
    width: 0.75rem;
    height: 0.75rem;
  }
`;

export const SortIconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 0.5rem;
`;

export const SortIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const ResetSortButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 0.25rem;
  color: red;

  &:hover {
    color: darkred;
  }
`;
