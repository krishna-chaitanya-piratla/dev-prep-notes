import styled, { css } from 'styled-components';

interface ListProps {
    highlightBorder?: boolean;
}

interface OrderedListProps extends ListProps {
    depthNumbering: boolean;
}

export const OrderedList = styled.ol<OrderedListProps>`
  margin: 0;
  padding-left: ${(props) => (props.depthNumbering ? '1.5rem' : '3rem')};

  ${(props) =>
    props.depthNumbering &&
    css`
      list-style-type: none;
      counter-reset: item;

      > li {
        display: table;
        counter-increment: item;
        list-style-type: none;

        &::before {
          content: counters(item, ".") ". ";
          font-variant-numeric: tabular-nums;
          display: table-cell; 
          padding-right: 0.6em;
          padding-bottom: 0;
        }

        ol > li::before {
          content: counters(item, ".") " ";
        }
      }
    `}
`;


export const ListContainer = styled.div<OrderedListProps>`
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: fit-content;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border: ${(props) => (props.highlightBorder ? '1px solid deeppink' : 'none')};
`;