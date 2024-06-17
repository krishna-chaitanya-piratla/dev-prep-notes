import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: var(--header-background-color);
  color: var(--text-color);
  height: var(--header-height);
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 1rem;
  }
`;