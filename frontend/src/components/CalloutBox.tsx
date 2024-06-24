import React from 'react';
import { CalloutBox, CalloutContent, CalloutIcon, CalloutHeader } from '../styles/CalloutBox';
import { CalloutBoxContent, Content, TextContent, CodeBlockContent } from '../types/Page';

interface CalloutBoxProps {
  content: CalloutBoxContent;
}

const renderContent = (content: Content) => {
  switch (content.type) {
    case 'h1':
      return <h1 id={content.id}>{content.contents as string}</h1>;
    case 'h2':
      return <h2 id={content.id}>{content.contents as string}</h2>;
    case 'h3':
      return <h3 id={content.id}>{content.contents as string}</h3>;
    case 'h4':
      return <h4 id={content.id}>{content.contents as string}</h4>;
    case 'h5':
      return <h5 id={content.id}>{content.contents as string}</h5>;
    case 'h6':
      return <h6 id={content.id}>{content.contents as string}</h6>;
    case 'p':
      return <p id={content.id} dangerouslySetInnerHTML={{ __html: content.contents as string }}></p>;
    case 'code-block':
      return (
        <div id={content.id}>
          {(content.contents as { type: string; contents: string }[]).map((item, index) => (
            <pre key={index}><code>{item.contents}</code></pre>
          ))}
        </div>
      );
    case 'callout-box':
      return <CalloutBoxComponent key={content.id} content={content as CalloutBoxContent} />;
    default:
      return null;
  }
};

const CalloutBoxComponent: React.FC<CalloutBoxProps> = ({ content }) => {
  const icon = content.boxType === 'warning' ? '⚠️' : '💡';

  return (
    <CalloutBox>
      <CalloutContent type={content.boxType}>
        <CalloutHeader>
          <CalloutIcon type={content.boxType}>{icon}</CalloutIcon>
          <h4>{content.title}</h4>
        </CalloutHeader>
        {content.contents.map((item, index) => (
          <div key={index}>{renderContent(item)}</div>
        ))}
      </CalloutContent>
    </CalloutBox>
  );
};

export default CalloutBoxComponent;
