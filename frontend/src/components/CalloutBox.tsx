import React, { useRef, useState, useEffect } from 'react';
import { 
  CalloutBox, 
  CalloutContent, 
  CalloutIconContainer, 
  CalloutHeader, 
  CalloutTitle, 
  CalloutIcon,
  ToggleIcon 
} from '../styles/CalloutBox';
import { CalloutBoxContent, TextContent, CodeBlockContent, Content } from '../types/Page';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import Editable from './Editable';

interface CalloutBoxProps {
  content: CalloutBoxContent;
  onContentChange: (newContent: Content) => void;
}

const CalloutBoxComponent: React.FC<CalloutBoxProps> = ({ content, onContentChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(content.collapsedByDefault);
  const [hasClicked, setHasClicked] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);
  const Icon = content.boxType === 'warning' ? WarningAmberIcon : InfoOutlinedIcon;
  const ToggleIconComponent = isCollapsed ? KeyboardArrowDownSharpIcon : KeyboardArrowUpSharpIcon;

  useEffect(() => {
    if (contentRef.current) {
      if (!hasClicked && !content.collapsedByDefault) {
        setMaxHeight('fit-content');
      } else {
        setMaxHeight(isCollapsed ? '0px' : `${contentRef.current.scrollHeight}px`);
      }
    }
  }, [isCollapsed, hasClicked, content.collapsedByDefault]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setHasClicked(true);
  };

  const handleContentChange = (contentId: string, newContent: Content) => {
    const updatedContent = { ...content };
    updatedContent.contents = updatedContent.contents.map((item) =>
      item.id === contentId ? (newContent as TextContent | CodeBlockContent) : item
    );
    onContentChange(updatedContent);
  };

  const title = isCollapsed && content.collapsedTitle ? content.collapsedTitle : content.title;

  const calloutBoxClasses = `${hasClicked ? 'clicked' : 'not-clicked'} ${content.collapsedByDefault ? 'collapsed-by-default' : 'expanded-by-default'}`;

  return (
    <CalloutBox className={calloutBoxClasses}>
      <CalloutContent type={content.boxType} maxHeight={maxHeight}>
        <CalloutHeader onClick={toggleCollapse}>
          <CalloutIconContainer type={content.boxType}>
            <CalloutIcon type={content.boxType}>
              <Icon fontSize="inherit" />
            </CalloutIcon>
          </CalloutIconContainer>
          <CalloutTitle>{title}</CalloutTitle>
          <ToggleIcon>
            <ToggleIconComponent />
          </ToggleIcon>
        </CalloutHeader>
        <div className="callout-body" ref={contentRef}>
          {content.contents.map((item, index) => (
            <Editable
              key={index}
              content={item}
              onContentChange={(newContent) => handleContentChange(item.id || '', newContent)}
            />
          ))}
        </div>
      </CalloutContent>
    </CalloutBox>
  );
};

export default CalloutBoxComponent;
