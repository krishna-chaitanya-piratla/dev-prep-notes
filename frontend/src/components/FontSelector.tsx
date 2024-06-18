import React from 'react';
import { observer } from 'mobx-react-lite';
import appStore from '../stores/AppStore';
import { FontSelectorWrapper, StyledSelect, StyledMenuItem } from '../styles/FontSelector';
import { SelectChangeEvent } from '@mui/material/Select';

const FontSelector: React.FC = observer(() => {
  const fonts = [
    'Lato, sans-serif',
    'Wotfard, sans-serif',
    'Comic Neue, sans-serif',
    'Inter, sans-serif',
    'Josefin Slab, serif'
  ];

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    appStore.setFontFamily(event.target.value as string);
  };

  return (
    <FontSelectorWrapper>
      <StyledSelect
        value={appStore.fontFamily}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Font Selector' }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: 'var(--background-color)',
              color: 'var(--text-color)',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              width: 'auto'
            },
          },
        }}
      >
        {fonts.map((font) => (
          <StyledMenuItem key={font} value={font} fontFamily={font}>
            {font.split(',')[0]} {/* Display the font name without the fallback */}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </FontSelectorWrapper>
  );
});

export default FontSelector;
