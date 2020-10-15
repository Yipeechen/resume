import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const StyledHeadingSecondaryWrapper = styled.div`
  text-align: center;
  margin-bottom: 8rem;
`;
const StyledHeadingSecondary = styled.h2`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  background-image: linear-gradient(to right, ${({ theme }) => theme.color.primaryLight}, ${({ theme }) => theme.color.primaryDark});
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 2px;
`;

export const HeadingSecondary = ({ children }) => (
  <StyledHeadingSecondaryWrapper>
    <StyledHeadingSecondary>
      {children}
    </StyledHeadingSecondary>
  </StyledHeadingSecondaryWrapper>
);
HeadingSecondary.propTypes = {
  children: PropTypes.any,
};
HeadingSecondary.defaultProps = {
  children: null,
};

const StyledHeadingTertiary = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

export const HeadingTertiary = ({ children }) => (
  <StyledHeadingTertiary>
    {children}
  </StyledHeadingTertiary>
);
HeadingTertiary.propTypes = {
  children: PropTypes.any,
};
HeadingTertiary.defaultProps = {
  children: null,
};
