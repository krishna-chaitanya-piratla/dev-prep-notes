import React, { useState, useRef, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import dataStore from '../../stores/DataStore';
import {
  StyledBanner,
  StyledBannerText,
  ChangeCoverButton,
  AdjustPositionButton,
  FileInput,
  ButtonContainer
} from '../../styles/Page/Banner';

interface BannerProps {
  imageUrl?: string;
  h4Text: string;
  h2Text: string;
  onImageChange: (newImage: File | null) => void;
}

const Banner: React.FC<BannerProps> = observer(({ imageUrl, h4Text, h2Text, onImageChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdjusting, setIsAdjusting] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(dataStore.getBannerPosition());
  const [isDragging, setIsDragging] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const bannerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (bannerRef.current && !bannerRef.current.contains(event.target as Node)) {
        setIsAdjusting(false);
        setIsDragging(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (imageUrl) {
      const img = new Image();
      img.onload = () => {
        setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      };
      img.src = imageUrl;
    }
  }, [imageUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onImageChange(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHovered(true);
  };

  const handleDragLeave = () => {
    setIsHovered(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0] || null;
    onImageChange(file);
    setIsHovered(false);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleAdjustPosition = () => {
    setIsAdjusting(!isAdjusting);
    setIsDragging(false);
  };

  const handleImageDragStart = (e: React.MouseEvent) => {
    if (isAdjusting) {
      lastPositionRef.current = { x: e.clientX, y: e.clientY };
      setIsDragging(true);
      e.preventDefault();
    }
  };

  const handleImageDrag = (e: React.MouseEvent) => {
    if (isDragging && bannerRef.current) {
      const { x, y } = lastPositionRef.current;
      const deltaX = e.clientX - x;
      const deltaY = e.clientY - y;
      lastPositionRef.current = { x: e.clientX, y: e.clientY };

      const bannerRect = bannerRef.current.getBoundingClientRect();
      const bannerHeight = bannerRect.height;
      const bannerWidth = bannerRect.width;
      const imageHeight = imageDimensions.height;
      const imageWidth = imageDimensions.width;
      const maxPosY = Math.max(imageHeight - bannerHeight, 0);
      const maxPosX = Math.max(imageWidth - bannerWidth, 0);

      let newPos = {
        x: Math.min(Math.max(currentPosition.x + deltaX, -maxPosX), 0),
        y: Math.min(Math.max(currentPosition.y + deltaY, -maxPosY), 0)
      };

      setCurrentPosition(newPos);
      dataStore.setBannerPosition(newPos);
    }
  };

  const handleImageDragEnd = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  return (
    <StyledBanner
      ref={bannerRef}
      imageUrl={imageUrl}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onMouseDown={handleImageDragStart}
      onMouseMove={handleImageDrag}
      onMouseUp={handleImageDragEnd}
      position={currentPosition}
      isAdjusting={isAdjusting}
    >
      {isHovered && imageUrl && (
        <ButtonContainer>
          <ChangeCoverButton onClick={handleButtonClick}>
            Change Cover
          </ChangeCoverButton>
          <AdjustPositionButton onClick={handleAdjustPosition}>
            Adjust Position
          </AdjustPositionButton>
        </ButtonContainer>
      )}
      {!imageUrl && isHovered && (
        <ChangeCoverButton onClick={handleButtonClick}>
          Add Cover
        </ChangeCoverButton>
      )}
      <FileInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <StyledBannerText>
        <h4>{h4Text}</h4>
        <h2>{h2Text}</h2>
      </StyledBannerText>
    </StyledBanner>
  );
});

export default Banner;
