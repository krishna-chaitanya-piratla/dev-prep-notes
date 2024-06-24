import React from 'react';
import styled from 'styled-components';
import { CalloutBoxContent } from '../types/Page';

const CalloutBoxWrapper = styled.div<{ boxType: 'info' | 'warning' }>`
  border: 2px solid ${({ boxType }) => (boxType === 'info' ? '#1e90ff' : '#ff6347')};
  background-color: ${({ boxType }) => (boxType === 'info' ? '#d0ebff' : '#ffe4e1')};
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
`;

const CalloutBoxTitle = styled.h3`
  margin-top: 0;
`;

const CalloutBox: React.FC<CalloutBoxContent> = ({ boxType, title, contents }) => (
  <CalloutBoxWrapper boxType={boxType}>
    <CalloutBoxTitle>{title}</CalloutBoxTitle>
    {contents.map((content, index) => (
      <div key={content.id || index}>
        {content.type === 'p' && <p dangerouslySetInnerHTML={{ __html: content.contents as string }} />}
        {content.type === 'h3' && <h3 dangerouslySetInnerHTML={{ __html: content.contents as string }} />}
        {content.type === 'code-block' &&
          (content.contents as { type: string; contents: string }[]).map((code, idx) => (
            <pre key={idx} className={`language-${code.type}`}>
              <code dangerouslySetInnerHTML={{ __html: code.contents }} />
            </pre>
          ))}
      </div>
    ))}
  </CalloutBoxWrapper>
);

export default CalloutBox;
