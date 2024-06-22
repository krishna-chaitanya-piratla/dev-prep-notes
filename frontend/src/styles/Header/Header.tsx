import styled from 'styled-components';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const HeaderWrapper = styled.header`
  background-color: var(--header-background-color);
  color: var(--text-color);
  height: var(--header-height);
  width: 100%;
  display: flex;
  align-items: flex-end; /* Align items to the bottom */
  justify-content: space-between; /* Space between title and settings icon */
  padding: 0 1rem;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const TitleContainer = styled.div`
  flex-grow: 1; /* Allow it to grow and take available space */
  display: flex;
  flex-wrap: wrap; /* Allow wrapping */
  align-items: flex-end; /* Align items to the bottom */
`;

export const SettingsIconWrapper = styled.div`
  align-self: flex-end;
  cursor: pointer;

  & > svg {
    font-size: 1.5rem;
    color: var(--text-color);
  }
`;

export const BreadcrumbContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow wrapping */
  align-items: center;
  font-size: var(--base-text-size);
  color: var(--text-color);
  margin-bottom: 0.5rem; /* Ensure it starts at the bottom */
`;

export const BreadcrumbLink = styled.a`
  color: var(--link-base-color);
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 20ch; /* Approximate maximum characters width */
  display: inline-block;
  vertical-align: middle;

  &:hover {
    color: var(--link-hover-color);
  }
`;

export const BreadcrumbSeparator = styled(KeyboardArrowRightIcon)`
  margin: 0 0.15rem;
  color: var(--text-color);
  stroke: var(--background-color);
  stroke-width: 1;
  display: inline-block;
  vertical-align: middle;
`;

export const BreadcrumbCurrent = styled.span`
  color: var(--text-color);
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
`;
