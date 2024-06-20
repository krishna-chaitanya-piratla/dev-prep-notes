import styled from 'styled-components';

interface StyledBannerProps {
  imageUrl?: string;
}

export const StyledBanner = styled.div<StyledBannerProps>`
  width: 100%;
  height: 27.7rem; /* 500px */
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 3.75rem;
  border: 3px solid white;
  box-sizing: border-box;
  border-radius: 10px 10px 0 0;
  background-image: ${({ imageUrl }) => imageUrl ? `url(${imageUrl})` : 'none'};
  background-color: ${({ imageUrl }) => (imageUrl ? 'transparent' : '#e0e0e0')}; /* Placeholder color if no image */
`;

export const StyledBannerText = styled.div`
  color: white;
  padding: 0rem;
  border-radius: 5px;
  line-height: 1.5;
  text-rendering: optimizelegibility;

  h4 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 400;
  }

  h2 {
    margin: 0.5rem 0 0;
    font-size: 2.5rem;
  }
`;
