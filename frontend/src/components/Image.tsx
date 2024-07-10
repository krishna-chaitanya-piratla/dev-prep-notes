import React, { useRef, useEffect, useState } from 'react';
import { Resizable } from 're-resizable';
import { ImageContent } from '../types/Page';
import { ImageWrapper } from '../styles/Image';

interface ImageProps extends ImageContent {
  alignment?: 'left' | 'center' | 'right';
}

const Image: React.FC<ImageProps> = ({ src, alt, alignment = 'center' }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [originalWidth, setOriginalWidth] = useState(0);
  const [originalHeight, setOriginalHeight] = useState(0);
  const [width, setWidth] = useState('auto');

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.onload = () => {
        const { naturalWidth, naturalHeight } = imgRef.current!;
        setOriginalWidth(naturalWidth);
        setOriginalHeight(naturalHeight);
        setWidth(`min(${naturalWidth}px, 100%)`);
      };
    }
  }, [src]);

  const aspectRatio = originalWidth / originalHeight;

  const handleResize = (event: MouseEvent | TouchEvent, direction: any, ref: HTMLElement, d: any) => {
    const newWidth = ref.offsetWidth;
    setWidth(`${newWidth}px`);
  };

  return (
    <ImageWrapper alignment={alignment}>
      <Resizable
        defaultSize={{
          width: '100%',
          height: 'auto',
        }}
        size={{
          width,
          height: `calc(${width} / ${aspectRatio})`,
        }}
        onResize={handleResize}
        lockAspectRatio
        maxWidth="100%"
      >
        <img ref={imgRef} src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
      </Resizable>
    </ImageWrapper>
  );
};

export default Image;
