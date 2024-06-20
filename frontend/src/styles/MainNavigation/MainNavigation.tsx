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
  hasChildren: boolean;
  isHovered: boolean;
}

export const LinkItem = styled.div<LinkItemProps>`
  cursor: pointer;
  font-size: var(--navigation-text-size);
  line-height: var(--navigation-line-height);
  padding: 0.5rem 0;
  color: ${({ isActive }) => (isActive ? 'var(--link-active-color)' : 'var(--link-base-color)')};
  padding-left: ${({ depth }) => depth * 1.15}rem;
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    color: var(--link-hover-color);
    & > .expand-icon {
      color: ${({ hasChildren }) => (hasChildren ? 'var(--link-hover-color)' : 'var(--nav-background-color)')};
    }
  }
`;

interface ExpandIconProps {
  isHovered: boolean;
}

export const ExpandIcon = styled.div<ExpandIconProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  color: ${({ isHovered }) => (isHovered ? 'var(--nav-context-link-color)' : 'var(--nav-background-color)')};
  transition: color 0.3s ease;

  & > svg {
    font-size: 1rem;
  }
`;

export const LinkText = styled.span`
  flex-grow: 1; /* Ensure link text takes up remaining space */
`;

export const NoPagesPlaceholder = styled.div<{depth: number}>`
  font-size: var(--navigation-text-size);
  line-height: var(--navigation-line-height);
  padding: 0.5rem 0;
  padding-left: ${({ depth }) => depth * 1.15}rem;
  color: var(--nav-placeholder-color);
  cursor: default;
  display: flex;
  align-items: center;
`;
