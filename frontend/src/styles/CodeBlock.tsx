import styled from 'styled-components';

interface ThemeProps {
  background: string;
  color: string;
}

interface DropdownItemProps extends ThemeProps {
  selected: boolean;
}

interface DropdownContainerProps extends ThemeProps {
  position: 'top' | 'bottom';
}

export const CodeBlockContainer = styled.div<ThemeProps>`
  display: flex;
  max-width: 95%;
  flex-direction: column;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  margin: 2rem 0;
  border-radius: 1rem;
  padding: 1rem 0;
`;

export const CodeBlockHeader = styled.div`
  border-radius: 1rem;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.5rem 1.75rem;
  box-sizing: border-box;
`;

export const CodeBlockWrapper = styled.div`
  font-size: calc(0.95 * var(--base-text-size));
  letter-spacing: -0.25px;
  width: 100%;
  margin: 0;
`;

export const ThemeDropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const DropdownContainer = styled.div<DropdownContainerProps>`
  display: none;
  position: absolute;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  min-width: 8rem;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  top: ${(props) => (props.position === 'top' ? 'auto' : '100%')};
  bottom: ${(props) => (props.position === 'top' ? '100%' : 'auto')};
  ${ThemeDropdown}:hover & {
    display: block;
  }
`;

export const DropdownItem = styled.div<DropdownItemProps>`
  background: ${(props) => (props.selected ? props.color : props.background)};
  color: ${(props) => (props.selected ? props.background : props.color)};
  padding: 0.25rem 1rem;
  text-decoration: none;
  display: block;
  &:hover {
    background: ${(props) => props.color};
    color: ${(props) => props.background};
  }
`;
