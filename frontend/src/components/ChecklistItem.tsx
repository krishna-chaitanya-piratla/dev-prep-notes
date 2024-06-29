import React, { useState } from 'react';
import { ChecklistItemProps } from '../types/Page';
import { ChecklistItemWrapper, ChecklistInput, ChecklistLabel } from '../styles/Page/List';

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item }) => {
  const [isChecked, setIsChecked] = useState(item.completed);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ChecklistItemWrapper>
      <div className={isChecked ? 'completed' : ''}>
        <ChecklistInput
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <ChecklistLabel className={isChecked ? 'completed' : ''}>{item.contents}</ChecklistLabel>
      </div>
      {item.subItems && (
        <ul>
          {item.subItems.map((subItem) => (
            <ChecklistItem key={subItem.id} item={subItem} />
          ))}
        </ul>
      )}
    </ChecklistItemWrapper>
  );
};

export default ChecklistItem;
