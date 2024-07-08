import React, { useRef, useState, useEffect } from 'react';
import { 
  CalloutBox, 
  CalloutContent, 
  CalloutIconContainer, 
  CalloutHeader, 
  CalloutTitle, 
  CalloutIcon,
  ToggleIconWrapper,
  TitleWrapper 
} from '../styles/CalloutBox';
import { CalloutBoxContent, Content } from '../types/Page';
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
  const [title, setTitle] = useState(content.title);
  const [collapsedTitle, setCollapsedTitle] = useState(content.collapsedTitle);
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

  const handleTitleChange = (newContent: string) => {
    setTitle(newContent);
    const updatedContent = { ...content, title: newContent };
    onContentChange(updatedContent);
  };

  const handleCollapsedTitleChange = (newContent: string) => {
    setCollapsedTitle(newContent);
    const updatedContent = { ...content, collapsedTitle: newContent };
    onContentChange(updatedContent);
  };

  const displayedTitle = isCollapsed && content.collapsedTitle ? collapsedTitle : title;

  const calloutBoxClasses = `${hasClicked ? 'clicked' : 'not-clicked'} ${content.collapsedByDefault ? 'collapsed-by-default' : 'expanded-by-default'}`;

  return (
    <CalloutBox className={calloutBoxClasses}>
      <CalloutContent type={content.boxType} maxHeight={maxHeight}>
        <CalloutHeader>
          <CalloutIconContainer type={content.boxType}>
            <CalloutIcon type={content.boxType}>
              <Icon fontSize="inherit" />
            </CalloutIcon>
          </CalloutIconContainer>
          <TitleWrapper>
            <CalloutTitle
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => isCollapsed ? handleCollapsedTitleChange(e.currentTarget.innerText) : handleTitleChange(e.currentTarget.innerText)}
              onClick={(e) => e.stopPropagation()} // Prevent collapse when clicking on title text
            >
              {displayedTitle}
            </CalloutTitle>
            <ToggleIconWrapper onClick={toggleCollapse}>
              <ToggleIconComponent />
            </ToggleIconWrapper>
          </TitleWrapper>
        </CalloutHeader>
        <div className="callout-body" ref={contentRef}>
          {content.contents.map((item, index) => (
            <Editable
              key={index}
              content={item}
              onContentChange={(newContent) => onContentChange(newContent)}
            />
          ))}
        </div>
      </CalloutContent>
    </CalloutBox>
  );
};

export default CalloutBoxComponent;
