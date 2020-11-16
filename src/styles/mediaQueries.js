import { css } from 'styled-components';

const breakPoints = {
  desktop: '@media (min-width: 1024px)',
  desktop_retina: '@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-resolution: 1.5dppx), (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi)',
  tablet_mobile: '@media (max-width: 1023px)',
  tablet: '@media (min-width: 701px) and (max-width: 1023px)',
  tablet_landscape_above: '@media (min-width: 768px)',
  tablet_landscape: '@media (min-width: 768px) and (max-width: 1023px)',
  tablet_landscape_below: '@media (max-width: 767px)',
  tablet_portrait: '@media (min-width: 701px) and (max-width: 767px)',
  mobile: '@media (max-width: 700px)',
  hoverable: '@media (hover: hover) and (pointer: fine) ',
};

export default Object.keys(breakPoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
  ${breakPoints[label]} {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
