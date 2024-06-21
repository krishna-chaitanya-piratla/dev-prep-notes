import styled from 'styled-components';

interface StyledBannerProps {
  imageUrl?: string;
}

export const StyledBanner = styled.div<StyledBannerProps>`
  width: 100%;
  height: ${({ imageUrl }) => imageUrl ? `calc(27.7*var(--base-text-size))` : `calc(13.85*var(--base-text-size))`}; /* 500px or 250px for root-level 16px*/
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
  background-color: ${({ imageUrl }) => (imageUrl ? 'transparent' : '#333333')}; /* Placeholder color if no image */
  cursor: ${({ imageUrl }) => (imageUrl ? 'default' : 'pointer')};

  &:hover > .add-cover {
    display: ${({ imageUrl }) => (imageUrl ? 'none' : 'flex')};
  }
`;

export const StyledBannerText = styled.div`
  color: white;
  padding: 0rem;
  border-radius: 5px;
  line-height: 1.5;
  text-rendering: optimizelegibility;
  position: absolute;
  bottom: 3.75rem; /* Match the padding value to position correctly */
  left: 3.75rem; /* Match the padding value to position correctly */

  h4 {
    margin: 0;
    font-size: calc(1.5*var(--base-text-size));
    font-weight: 400;
    letter-spacing: 2px;
  }

  h2 {
    margin: 0.5rem 0 0;
    font-size: calc(2.5*var(--base-text-size));
    font-weight: 400;
    letter-spacing: 3px;
  }
`;

export const AddCover = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  font-size: 1.5rem;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
  z-index: 1;
`;
