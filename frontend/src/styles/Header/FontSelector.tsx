import styled from 'styled-components';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';

export const FontSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: inherit;
  color: var(--text-color) !important;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: fit-content;

  .MuiInputBase-root {
    color: var(--text-color);
    &:focus-visible {
      border: none;
    }
  }

  .MuiOutlinedInput-root {
    padding-right: 0; /* Ensure there's space for the dropdown icon */
  }

  .MuiSelect-select {
    padding-left: 0 !important;
    min-width: fit-content;
    font-size: 1rem;
    display: flex;
    align-items: center;
  }

  .MuiSelect-nativeInput {
    display: none; /* Hide the native input */
  }

  .MuiSvgIcon-root {
    margin-right: 0; /* Space between text and icon */
    color: var(--text-color);
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiOutlinedInput-input {
    padding: 0px;
    width: fit-content;
  }

  .Mui-focused {
    border: none;
  }
`;

export const StyledSelect = styled(Select)`
  font-size: 1rem;
`;

export const StyledMenuItem = styled(MenuItem)<{ fontFamily: string }>`
  font-size: 1rem;
  color: var(--text-color) !important;
  font-family: ${(props) => props.fontFamily} !important;
`;