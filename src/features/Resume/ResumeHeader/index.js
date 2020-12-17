import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`;
const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  
  80% {
    transform: translateX(-20px);
  }
  
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const StyledHeader = styled.header`
  height: 95vh;
  background-image: 
  linear-gradient(
    to right bottom,  
    ${({ theme }) => theme.color.primaryLightOpLevel8},
    ${({ theme }) => theme.color.primaryDarkOpLevel8}
    ), 
  url('https://yipeechen.github.io/resume/images/header-bg-min.jpg');
  background-size: cover;
  background-position: bottom;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  position: relative;
  ${({ theme }) => theme.mobile`
    background-image: 
  linear-gradient(
    to right bottom,  
    ${({ theme }) => theme.color.primaryLightOpLevel8},
    ${({ theme }) => theme.color.primaryDarkOpLevel8}
    ), 
    url('https://yipeechen.github.io/resume/images/mobile/header-bg-min.jpg');
  `}
`;
const StyledHeaderTextBox = styled.div`
  position: absolute;
  top: 40%; 
  left: 50%;
  transform: translate(-50%, -50%); 
`;
const StyledHeadingPrimary = styled.h1`
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
`;
const StyledHeadingSub = styled.span`
  display: block;
  font-weight: 300;
  font-size: 4rem;
  letter-spacing: 10px;
  animation-name: ${moveInLeft};
  animation-duration: 1s;
  ${({ theme }) => theme.mobile`
    font-size: 3rem;
  `}

  &::before {
    content: '';
    display: block;
    width: 100%;
    margin-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.white};
    transform: translateX(-100px);
    ${({ theme }) => theme.mobile`
      transform: translateX(-50px);
  `}
  }
`;
const StyledHeadingMain = styled.span`
  display: block;
  font-weight: 700;
  font-size: 6rem;
  letter-spacing: 20px;
  word-spacing: 30px;
  animation-name: ${moveInRight};
  animation-duration: 1s;
  ${({ theme }) => theme.mobile`
    font-size: 4rem;
  `}

  &::after {
    content: '';
    display: block;
    width: 110%;
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
    transform: translateX(10px);
  }
`;

const resumeHeader = props => (
  <StyledHeader>
    <StyledHeaderTextBox>
      <StyledHeadingPrimary>
        <StyledHeadingSub>
          Hello, I&apos;m
        </StyledHeadingSub>
        <StyledHeadingMain>
          Yi Ping
        </StyledHeadingMain>
      </StyledHeadingPrimary>
    </StyledHeaderTextBox>
  </StyledHeader>
);

export default resumeHeader;
