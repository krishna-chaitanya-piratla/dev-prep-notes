import styled from 'styled-components';

export const CodeBlockContainer = styled.div`
  display: flex;
  max-width: 95%;
  flex-direction: column;
  background: #f5f6f9;
  margin: 2rem 0;
  border-radius: 1rem;
`;

interface CodeBlockHeaderProps {
  background: string;
  color: string;
}

export const CodeBlockHeader = styled.div<CodeBlockHeaderProps>`
  border-radius: 1rem 1rem 0 0;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.5rem 1.75rem;
  box-sizing: border-box;
`;

export const CodeBlockWrapper = styled.div`
  font-size: calc(0.95 * var(--base-text-size));
  letter-spacing: -0.25px;
  width: 100%; /* Ensure it matches the header width */
  margin: 0;
`;

export const ThemeDropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  ${ThemeDropdown}:hover & {
    display: block;
  }
`;

export const DropdownItem = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
`;
