import React, { useState, useRef } from 'react';
import { StyledBanner, StyledBannerText, AddCover, ChangeCoverButton, FileInput } from '../../styles/Page/Banner';

interface BannerProps {
  imageUrl?: string;
  h4Text: string;
  h2Text: string;
  onImageChange: (newImage: File | null) => void;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, h4Text, h2Text, onImageChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  return (
    <StyledBanner
      imageUrl={imageUrl}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isHovered && (
        <ChangeCoverButton onClick={handleButtonClick}>
          Change Cover
        </ChangeCoverButton>
      )}
      <FileInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {!imageUrl && <AddCover className="add-cover">Add Cover</AddCover>}
      <StyledBannerText>
        <h4>{h4Text}</h4>
        <h2>{h2Text}</h2>
      </StyledBannerText>
    </StyledBanner>
  );
};

export default Banner;
