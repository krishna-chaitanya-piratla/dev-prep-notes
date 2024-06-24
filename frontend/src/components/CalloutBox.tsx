import React from 'react';
import { CalloutBox, CalloutContent, CalloutIcon } from '../styles/CalloutBox';

interface CalloutBoxProps {
  type: 'info' | 'warning';
  title: string;
  contents: React.ReactNode[];
}

const CalloutBoxComponent: React.FC<CalloutBoxProps> = ({ type, title, contents }) => {
  return (
    <CalloutBox>
      <CalloutIcon type={type}>{type === 'warning' ? '⚠️' : 'ℹ️'}</CalloutIcon>
      <CalloutContent type={type}>
        <h4>{title}</h4>
        {contents.map((content, index) => (
          <div key={index}>{content}</div>
        ))}
      </CalloutContent>
    </CalloutBox>
  );
};

export default CalloutBoxComponent;
