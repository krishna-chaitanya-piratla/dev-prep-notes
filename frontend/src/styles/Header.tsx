import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: var(--nav-background-color);
  color: var(--text-color);
  height: var(--header-height);
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 1rem;
  }
`;