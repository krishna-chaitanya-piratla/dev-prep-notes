import React from 'react';
import { SettingsMenuWrapper, CloseButton, CloseIconWrapper, SettingsMenuItem, Divider, SettingsLabel } from '../../styles/Header/SettingsMenu';
import ColorPicker from './ColorPicker';
import FontSelector from './FontSelector';
import FontSize from './FontSize';
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
      <Divider />
      <SettingsMenuItem>
        <SettingsLabel>Font Size:</SettingsLabel>
        <FontSize />
      </SettingsMenuItem>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </SettingsMenuWrapper>
  );
};

export default SettingsMenu;
