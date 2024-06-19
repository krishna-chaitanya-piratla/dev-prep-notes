import React from 'react';
import { observer } from 'mobx-react-lite';
import appStore from '../stores/AppStore';
import { Slider } from '@mui/material';

const FontSize: React.FC = observer(() => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      appStore.setFontSize(newValue);
    }
  };

  return (
    <Slider
      value={appStore.fontSize}
      min={8}
      max={36}
      step={1}
      onChange={handleChange}
      valueLabelDisplay="auto"
    />
  );
});

export default FontSize;
