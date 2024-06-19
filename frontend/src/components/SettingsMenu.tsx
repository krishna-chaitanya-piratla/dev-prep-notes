import React from 'react';
import { SettingsMenuWrapper, CloseButton, CloseIconWrapper, SettingsMenuItem, Divider, SettingsLabel } from '../styles/SettingsMenu';
import ColorPicker from './ColorPicker';
import FontSelector from './FontSelector';
import CloseIcon from '@mui/icons-material/Close';

interface SettingsMenuProps {
  onClose: () => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ onClose }) => {
  return (
    <SettingsMenuWrapper>
      <CloseIconWrapper onClick={onClose}>
        <CloseIcon />
      </CloseIconWrapper>
      <SettingsMenuItem>
        <SettingsLabel>Background:</SettingsLabel>
        <ColorPicker />
      </SettingsMenuItem>
      <Divider />
      <SettingsMenuItem>
        <SettingsLabel>Font:</SettingsLabel>
        <FontSelector />
      </SettingsMenuItem>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </SettingsMenuWrapper>
  );
};

export default SettingsMenu;
