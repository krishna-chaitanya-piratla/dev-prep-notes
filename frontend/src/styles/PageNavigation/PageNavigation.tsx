import styled from 'styled-components';

export const PageNavigationWrapper = styled.nav`
  background-color: var(--nav-background-color);
  color: var(--text-color);
  width: var(--nav-width);
  height: 100vh;
  padding: 1.25rem; /* 20px */
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
  color: var(--link-base-color);

  &:hover {
    color: var(--link-hover-color);
  }
`;
