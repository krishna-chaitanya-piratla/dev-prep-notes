import React from 'react';
import { StyledBanner, StyledBannerText, AddCover } from '../styles/Banner';

interface BannerProps {
  imageUrl?: string;
  h4Text: string;
  h2Text: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, h4Text, h2Text }) => {
  return (
    <StyledBanner imageUrl={imageUrl}>
      {!imageUrl && <AddCover className="add-cover">Add Cover</AddCover>}
      <StyledBannerText>
        <h4>{h4Text}</h4>
        <h2>{h2Text}</h2>
      </StyledBannerText>
    </StyledBanner>
  );
};

export default Banner;
