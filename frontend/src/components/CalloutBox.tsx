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
  const [maxHeight, setMaxHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);
  const Icon = content.boxType === 'warning' ? WarningAmberIcon : InfoOutlinedIcon;
  const ToggleIconComponent = isCollapsed ? KeyboardArrowDownSharpIcon : KeyboardArrowUpSharpIcon;

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isCollapsed ? '0px' : `${contentRef.current.scrollHeight}px`);
    }
  }, [isCollapsed]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const title = isCollapsed && content.collapsedTitle ? content.collapsedTitle : content.title;

  return (
    <CalloutBox>
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
