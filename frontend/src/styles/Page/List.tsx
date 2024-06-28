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

export const UnorderedList = styled.ul<ListProps>`
  margin: 0;
  padding-left: 3rem;
  ${(props) =>
    props.highlightBorder &&
    css`
      border: 1px solid deeppink;
      padding: 1rem;
    `}
  
  li {
    margin-bottom: 0.6em;
  }
`;


export const ListContainer = styled.div<ListProps>`
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: fit-content;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border: ${(props) => (props.highlightBorder ? '4px dotted deeppink' : 'none')};
`;