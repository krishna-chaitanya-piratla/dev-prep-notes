import styled from 'styled-components';

export const MainNavigationWrapper = styled.nav`
  background-color: var(--nav-background-color);
  color: var(--text-color);
  width: var(--nav-width);
  height: 100vh;
  padding: 1.25rem; /* 20px */
  box-sizing: border-box;
  position: sticky;
  top: 0;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  & > svg {
    margin-right: 1rem;
  }
`;

interface LinkItemProps {
  isActive: boolean;
  depth: number;
}

export const LinkItem = styled.div<LinkItemProps>`
  cursor: pointer;
  font-size: var(--navigation-text-size);
  line-height: var(--navigation-line-height);
  padding: 0.5rem 0;
  color: ${({ isActive }) => (isActive ? 'var(--link-active-color)' : 'var(--link-base-color)')};
  padding-left: ${({ depth }) => depth * 1.15}rem;
  &:hover {
    color: var(--link-hover-color);
  }
`;
