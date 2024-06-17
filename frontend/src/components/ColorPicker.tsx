import React from 'react';
import { observer } from 'mobx-react-lite';
import appStore from '../stores/AppStore';
import { ColorPickerWrapper, ColorDiv } from '../styles/ColorPicker';

const ColorPicker: React.FC = observer(() => {
  const colors = ['#000000', '#333333', '#674529'];

  return (
    <ColorPickerWrapper>
      {colors.map((color) => (
        <ColorDiv
          key={color}
          color={color}
          onClick={() => appStore.setNavBackgroundColor(color)}
        />
      ))}
    </ColorPickerWrapper>
  );
});

export default ColorPicker;
