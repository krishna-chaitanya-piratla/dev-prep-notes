import styled from 'styled-components';

export const PageNavigationWrapper = styled.nav`
  background-color: var(--nav-background-color);
  color: var(--text-color);
  width: var(--page-nav-width);
  height: 100vh;
  padding: calc(var(--base-text-size) * 1.25); /* Adjust padding dynamically */
  padding-left: calc(var(--base-text-size) * 3);
  box-sizing: border-box;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: calc(var(--base-text-size) * 1);
  }

  @media (max-width: 1540px) {
    visibility: hidden;
    display: none;
  }
`;

interface NavigationItemProps {
  depth: number;
  isActive: boolean;
}

export const NavigationItem = styled.div<NavigationItemProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: ${({ depth }) => `calc(${depth} * var(--base-text-size) * 1.15)`}; /* Adjust padding dynamically */
  height: ${({ depth }) => (depth === 0 ? 'calc(var(--base-text-size) * 2.5)' : 'calc(var(--base-text-size) * 2)')}; /* Adjust height dynamically */
  color: #9ca8b4;
  font-size: ${({ depth }) => (depth === 0 ? 'calc(var(--base-text-size) * 0.9)' : 'calc(var(--base-text-size) * 0.75)')}; /* Use CSS variables */
  letter-spacing: 1px;
  text-shadow: ${({ isActive }) => (isActive ? '0.5px 0.5px 0.5px rgb(68 51 255);' : 'none')};

  &:hover {
    color: var(--link-hover-color);
  }
`;

interface CircleProps {
  isActive: boolean;
}

export const Circle = styled.div<CircleProps>`
  width: ${({ isActive }) => (isActive ? 'calc(var(--base-text-size) * 0.75)' : 'calc(var(--base-text-size) * 0.5)')}; /* Use CSS variables */
  height: ${({ isActive }) => (isActive ? 'calc(var(--base-text-size) * 0.75)' : 'calc(var(--base-text-size) * 0.5)')}; /* Use CSS variables */
  border-radius: 50%;
  background: ${({ isActive }) => (isActive ? '#1aecff' : '#5c6670')};
  margin-right: calc(var(--base-text-size) * 0.5);
  transform: ${({ isActive }) => (isActive ? 'translateX(calc(var(--base-text-size) * -0.167))' : 'none')};
`;

export const PageNavigationHeader = styled.h2`
  padding-top: calc(var(--base-text-size) * 10); 
  margin-bottom: calc(var(--base-text-size) * 2);
  font-weight: 500;
  font-size: calc(var(--base-text-size) * 1); /* Use CSS variable */
  text-transform: uppercase;
  color: #d9e0e8;
  letter-spacing: calc(var(--base-text-size) * 0.125);
  text-rendering: optimizelegibility;
`;
