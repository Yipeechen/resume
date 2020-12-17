import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { HeadingSecondary } from '@src/components/TypoGraphy';

const StyledContainer = styled.section`
  background-color: ${({ theme }) => theme.color.bgPrimary};
  padding: 5rem 0 10rem 0;
  ${({ theme }) => theme.tablet_mobile`
    padding: 0rem 0 10rem 0;
  `}
`;
const StyledWrapper = styled.div`
  padding: 5rem 6rem 0;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* @include clearfix; */
  &::after {
    content: "";
    display: table;
    clear: both;
  }
  ${({ theme }) => theme.mobile`
    padding: 5rem 0 0;
    width: 90%;
  `}
`;
const StyledCardLink = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background-image: linear-gradient(
    to top right,
    ${({ theme }) => theme.color.primaryLight},
    ${({ theme }) => theme.color.primaryDark});
  
  -webkit-clip-path: polygon(
    50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%
  );
  clip-path: polygon(
    50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%
  );
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s;
  }
  
  &:before {
    background: ${({ theme }) => theme.color.secondary};
  }
  
  &:after {
    background: linear-gradient(
      to bottom, transparent,
      ${({ theme }) => theme.color.blackOpLevel3},
      ${({ theme }) => theme.color.blackOpLevel6});
  }
`;
const StyledCardInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  z-index: 1;
  opacity: 0;
  font-size: 2.4rem;
  font-weight: weight;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  will-change: transform;
  backface-visibility: hidden;
  transform: translate(-50%, -50%) scale(0.5);
  transition: all 0.5s;
  ${({ theme }) => theme.mobile`
    font-size: 2rem;
  `}
`;
const StyledCardInfoContent = styled.div`
  margin: 1em 0 0;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.5;
  color: turquoise;
  ${({ theme }) => theme.mobile`
    margin: 0;
  `}
`;
const StyledCardWrapper = styled.a.attrs(({ link }) => ({
  href: link,
  target: '_blank',
}))`
  position: relative;
  margin-top: -50px;
  margin-right: 5px;
  margin-left: 5px;
  width: calc(20% - 10px);
  float: left;
  transition: all 0.5s;
  overflow: hidden;
  -webkit-clip-path: polygon(
    50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%
  );
  clip-path: polygon(
    50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%
  );
  ${({ theme }) => theme.mobile`
    width: 33%;
  `}
  
  &::before {
    content: '';
    display: block;
    padding-top: 112.5%;
  }

  ${({ theme }) => theme.hoverable`
    &:hover{
      ${StyledCardLink} {
        &::before,
        &::after {
          opacity: 1;
        }
      }
      
      ${StyledCardInfo} {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  `}
`;
const StyledCardIcon = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-size: 5rem;
  line-height: 230%;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  ${({ theme }) => theme.mobile`
    font-size: 3.5rem;
  `}
`;

const Card = ({ link, icon, title, content }) => (
  <StyledCardWrapper link={link}>
    <StyledCardLink>
      <StyledCardIcon>
        {icon}
      </StyledCardIcon>
      <StyledCardInfo>
        {title}
        <StyledCardInfoContent>{content}</StyledCardInfoContent>
      </StyledCardInfo>
    </StyledCardLink>
  </StyledCardWrapper>
);
Card.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.element,
  link: PropTypes.string,
  title: PropTypes.string,
};
Card.defaultProps = {
  content: '',
  icon: null,
  link: '',
  title: '',
};
const cards = [
  {
    link: 'https://github.com/Yipeechen',
    icon: <FontAwesomeIcon icon={faGithubAlt} />,
    title: 'GitHub',
    content: 'Yipeechen',
  },
  {
    link: 'mailto:yipeechen0418@gmail.com',
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    title: 'Email',
    content: 'yipeechen0418@gmail.com',
  },
  {
    link: 'https://medium.com/@yipeechen0418',
    icon: <FontAwesomeIcon icon={faMediumM} />,
    title: 'Medium',
    content: 'yi ping chen',
  },
];

const resumeContact = () => (
  <StyledContainer id="section_contact">
    <HeadingSecondary>Contact</HeadingSecondary>
    <StyledWrapper>
      {cards.map((card, i) => (
        <Card
          key={i}
          link={card.link}
          icon={card.icon}
          title={card.title}
          content={card.content}
        />
      ))}
    </StyledWrapper>
  </StyledContainer>
);

export default resumeContact;
