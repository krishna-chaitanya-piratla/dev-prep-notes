import styled from 'styled-components';

export const PageNavigationWrapper = styled.nav`
  background-color: var(--nav-background-color);
  color: var(--text-color);
  width: var(--nav-width);
  height: 100vh;
  padding: 1.25rem; /* 20px */
  padding-left: 3rem;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 1rem;
  }
`;

interface NavigationItemProps {
  depth: number;
}

export const NavigationItem = styled.div<NavigationItemProps>`
  cursor: pointer;
  padding-left: ${({ depth }) => depth * 1.15}rem;
  margin-bottom: 0.5rem;
  color: #9ca8b4;
  font-size: ${({ depth }) => depth === 0 ? 1 : 0.875}rem;

  &:hover {
    color: var(--link-hover-color);
  }
`;

export const ContentsHeader = styled.h2`
  padding-top: 10rem; 
  margin-bottom: 2rem;
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  color: #d9e0e8;
  letter-spacing: 2px;
  text-rendering: optimizelegibility;
`;
