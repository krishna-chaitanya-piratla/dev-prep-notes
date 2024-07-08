import React, { useState, useRef, useEffect } from 'react';
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

const Banner: React.FC<BannerProps> = ({ imageUrl, h4Text, h2Text, onImageChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdjusting, setIsAdjusting] = useState(false);
  const [position, setPosition] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (bannerRef.current && !bannerRef.current.contains(event.target as Node)) {
        setIsAdjusting(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
  };

  const handleImageDrag = (e: React.MouseEvent) => {
    if (isAdjusting && bannerRef.current) {
      const bannerHeight = bannerRef.current.clientHeight;
      const imageHeight = bannerRef.current.scrollHeight;
      const maxPosition = imageHeight - bannerHeight;
      let newPosition = position + e.movementY;

      if (newPosition < 0) {
        newPosition = 0;
      } else if (newPosition > maxPosition) {
        newPosition = maxPosition;
      }

      setPosition(newPosition);
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
      onMouseMove={handleImageDrag}
      position={position}
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
};

export default Banner;
