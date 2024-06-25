import React from 'react';
import { CalloutBox, CalloutContent, CalloutIconContainer, CalloutHeader, CalloutTitle, CalloutIcon } from '../styles/CalloutBox';
import { CalloutBoxContent, Content } from '../types/Page';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CodeBlock from './CodeBlock';

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
            <CodeBlock key={index} language={item.type} contents={item.contents as string} />
          ))}
        </div>
      );
    default:
      return null;
  }
};

const CalloutBoxComponent: React.FC<CalloutBoxProps> = ({ content }) => {
  const Icon = content.boxType === 'warning' ? WarningAmberIcon : InfoOutlinedIcon;

  return (
    <CalloutBox>
      <CalloutContent type={content.boxType}>
        <CalloutHeader>
          <CalloutIconContainer type={content.boxType}>
            <CalloutIcon type={content.boxType}>
              <Icon fontSize="inherit" />
            </CalloutIcon>
          </CalloutIconContainer>
          <CalloutTitle>{content.title}</CalloutTitle>
        </CalloutHeader>
        {Array.isArray(content.contents) ? (
          content.contents.map((item, index) => (
            <div key={index}>{renderContent(item)}</div>
          ))
        ) : (
          <div>{renderContent(content.contents as Content)}</div>
        )}
      </CalloutContent>
    </CalloutBox>
  );
};

export default CalloutBoxComponent;
