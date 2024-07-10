import React, { useState, useRef, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { ImageContent } from '../types/Page';
import { ImageWrapper, ResizeHandle } from '../styles/Image';

interface ImageProps {
  content: ImageContent;
  onContentChange: (newContent: ImageContent) => void;
}

const Image: React.FC<ImageProps> = observer(({ content, onContentChange }) => {
  const [width, setWidth] = useState<number>(content.width || 300); // Default width
  const [height, setHeight] = useState<number>(content.height || 300); // Default height
  const aspectRatio = useRef<number>(1); // Aspect ratio

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      const img = imageRef.current;
      img.onload = () => {
        aspectRatio.current = img.naturalWidth / img.naturalHeight;
        setHeight(width / aspectRatio.current);
      };
    }
  }, [width]);

  const handleResize = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = width;
    const startHeight = height;

    const onMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX;
      const newWidth = startWidth + deltaX;
      setWidth(newWidth);
      setHeight(newWidth / aspectRatio.current);
      onContentChange({ ...content, width: newWidth, height: newWidth / aspectRatio.current });
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <ImageWrapper style={{ width, height }}>
      <img ref={imageRef} src={content.src} alt={content.alt} style={{ width: '100%', height: '100%' }} />
      <ResizeHandle onMouseDown={handleResize} />
    </ImageWrapper>
  );
});

export default Image;
