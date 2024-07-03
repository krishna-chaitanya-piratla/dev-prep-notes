import styled from 'styled-components';

export const PageNavigationWrapper = styled.nav`
  background-color: var(--nav-background-color);
  color: var(--text-color);
  width: var(--page-nav-expanded-width);
  height: 100vh;
  padding: calc(var(--base-text-size) * 1.25);
  padding-left: calc(var(--base-text-size) * 3);
  margin-left: 0; /* Remove the margin */
  box-sizing: border-box;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0; /* Prevent shrinking */

  @media (max-width: 1540px) {
    visibility: hidden;
    display: none;
  }

  h2 {
    margin-bottom: calc(var(--base-text-size) * 1);
  }
`;

export const MinimizedPageNavigationWrapper = styled.div`
  background-color: var(--nav-background-color);
  color: var(--text-color);
  width: var(--page-nav-minimized-width);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  cursor: pointer;
  flex-shrink: 0; /* Prevent shrinking */

  @media (max-width: 1540px) {
    visibility: hidden;
    display: none;
  }
`;

export const PageNavigationToggle = styled.div`
  font-size: 1rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  color: var(--link-hover-color);
`;

interface NavigationItemProps {
  depth: number;
  isActive: boolean;
}

export const NavigationItem = styled.div<NavigationItemProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: ${({ depth }) => `calc(${depth} * var(--base-text-size) * 1.15)`};
  height: ${({ depth }) => (depth === 0 ? 'calc(var(--base-text-size) * 2.5)' : 'calc(var(--base-text-size) * 2)')};
  color: #9ca8b4;
  font-size: ${({ depth }) => (depth === 0 ? 'calc(var(--base-text-size) * 0.9)' : 'calc(var(--base-text-size) * 0.75)')};
  letter-spacing: 1px;
  text-shadow: ${({ isActive }) => (isActive ? '0.5px 0.5px 0.5px rgb(68 51 255);' : 'none')};

  &:hover {
    color: var(--link-hover-color);
  }
`;

export const PageNavigationHeader = styled.h2`
  padding-top: calc(var(--base-text-size) * 10);
  margin-bottom: calc(var(--base-text-size) * 2);
  font-weight: 500;
  font-size: calc(var(--base-text-size) * 1);
  text-transform: uppercase;
  color: #d9e0e8;
  letter-spacing: calc(var(--base-text-size) * 0.125);
  text-rendering: optimizelegibility;
  cursor: pointer;
`;
