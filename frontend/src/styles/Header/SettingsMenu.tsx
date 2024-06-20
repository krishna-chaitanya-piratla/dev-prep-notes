import styled from 'styled-components';

export const SettingsMenuWrapper = styled.div`
  position: fixed;
  top: 20%;
  left: 25%;
  width: 50%;
  height: 75%;
  background: var(--nav-background-color);
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;

  & > svg {
    font-size: 2rem;
    color: var(--text-color);
  }
`;

export const SettingsMenuItem = styled.div`
  background: var(--background-color);
  padding: 1rem;
  width: 80%;
  max-width: 400px;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center; /* Center items vertically */
  justify-content: space-between;
`;

export const SettingsLabel = styled.span`
  margin-right: 1rem; /* Space between label and component */
  color: var(--text-color);
  font-size: var(--base-text-size);
`;

export const Divider = styled.div`
  width: 80%;
  max-width: 400px;
  height: 1px;
  background: var(--text-color);
  margin-bottom: 1rem;
`;

export const CloseButton = styled.button`
  background: var(--nav-background-color);
  color: var(--text-color);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;
