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
import { CalloutBoxContent, Content } from '../types/Page';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import { renderCalloutBox } from '../utils/helpers';

interface CalloutBoxProps {
  content: CalloutBoxContent;
}

const CalloutBoxComponent: React.FC<CalloutBoxProps> = ({ content }) => {
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
          {Array.isArray(content.contents) ? (
            content.contents.map((item, index) => (
              <div key={index}>{renderCalloutBox(item)}</div>
            ))
          ) : (
            <div>{renderCalloutBox(content.contents as Content)}</div>
          )}
        </div>
      </CalloutContent>
    </CalloutBox>
  );
};

export default CalloutBoxComponent;
