import React from 'react';
import { PropTypes } from 'prop-types';
import styled, { keyframes } from 'styled-components';

const bounceScale = keyframes`
  0%,
  100% {
    transform: scale(0.25);
    opacity: 1;
  }

  50% {
    transform: scale(1);
    opacity: 0;
  }
`;
const StyledPageSpinnerChild = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.color.primaryDark};
  border-radius: 50%;
  animation: ${bounceScale} 3000ms ease-in-out infinite;

  &:nth-of-type(1) {
    background: ${({ theme }) => theme.color.primaryLight};
  }

  &:nth-of-type(2) {
    background: ${({ theme }) => theme.color.primary};
    animation-delay: calc(3000ms / -2);
  }
`;
const StyledPageSpinner = styled.div`
  position: relative;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  ${({ size, ...rest }) => rest};

  ${StyledPageSpinnerChild} {
    top: ${({ size }) => `calc(50% - ${size} / 2)`};
    left: ${({ size }) => `calc(50% - ${size} / 2)`};
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`;

export const PageSpinner = ({ size, ...rest }) => (
  <StyledPageSpinner size={size} {...rest}>
    <StyledPageSpinnerChild />
    <StyledPageSpinnerChild />
  </StyledPageSpinner>
);

PageSpinner.propTypes = {
  size: PropTypes.string,
};
PageSpinner.defaultProps = {
  size: '',
};
