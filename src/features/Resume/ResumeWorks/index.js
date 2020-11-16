import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import { HeadingSecondary } from '@src/components/TypoGraphy';

const Container = styled.section`
  background-color: ${({ theme }) => theme.color.bgPrimary};
  padding: 5rem 0 10rem 0;
`;
const StyledWrapper = styled.ul`
  list-style: none;
  width: 100%;
  /* @include clearfix; */
  &::after {
    content: "";
    display: table;
    clear: both;
  }
  transform: skewY(4deg);
`;
const StyledWorkWrapper = styled.li`
  display: block;
  float: left;
  width: 20%;
`;
const StyledWorkLink = styled.a.attrs(({ link }) => ({
  href: link,
  target: '_blank',
}))``;
const StyledWorkImg = styled.img.attrs(({ img }) => ({
  src: img,
}))`
  opacity: 0.3;
  width: 100%;
  height: auto;
  transform: translateY(1.8rem) scale(1.3) skewY(-4deg);
  transition: transform 0.5s, opacity 0.5s;
`;
const StyledWorkInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  padding: 0 2.5rem;
  color: ${({ theme }) => theme.color.primaryDark};
  word-spacing: .3rem;
  transform: skewY(-4deg) translateY(12rem);
  transition: all .5s;
`;
const StyledInfoTitle = styled.h4`
  margin-bottom: 1.5rem;
  font-size: 2.4rem;
  font-weight: bold;
`;
const StyledInfoContent = styled.p`

`;
const StyledWorkImgWrapper = styled.figure`
  position: relative;
  width: 100%;
  margin: 0;
  height: 35rem;
  overflow: hidden;
  background: linear-gradient(
  to bottom,
  ${({ theme }) => theme.color.primaryDarkOpLevel4},
  transparent ,
  ${({ theme }) => theme.color.primaryDarkOpLevel9});

  &:hover {
    ${StyledWorkImg} {
      opacity: 1;
      transform: translateY(1.8rem) scale(1.17) skewY(-4deg);
    }
    
    ${StyledWorkInfo} {
      opacity: 0;
      transform: translateY(20rem);
    }
  }
`;

const Work = ({ link, title, tool, img }) => (
  <StyledWorkWrapper>
    <StyledWorkLink link={link}>
      <StyledWorkImgWrapper>
        <StyledWorkImg img={img} />
        <StyledWorkInfo>
          <StyledInfoTitle>{title}</StyledInfoTitle>
          <StyledInfoContent>{tool}</StyledInfoContent>
        </StyledWorkInfo>
      </StyledWorkImgWrapper>
    </StyledWorkLink>
  </StyledWorkWrapper>
);
Work.propTypes = {
  img: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  tool: PropTypes.string,
};
Work.defaultProps = {
  img: '',
  link: '',
  title: '',
  tool: '',
};
const works = [
  {
    title: '人性化線下 CRM 平台',
    tool: 'Ruby on Rails | JS | Chart.js | Bootstrap3 | Git Version Control | Ajax | jQuery',
    link: 'https://github.com/Yipeechen/whale',
    img: 'https://yipeechen.github.io/resume/images/work-1.jpg',
  },
  {
    title: 'About Yiping',
    tool: ' JS | React | Git Version Control | CSS in JS | Webpack | Eslint',
    link: 'https://github.com/Yipeechen/stackoverflow',
    img: 'https://yipeechen.github.io/resume/images/work-5.jpg',
  },
  {
    title: 'Stackoverflow',
    tool: 'Ruby on Rails | JS | Bootstrap4 | Git Version Control | Ajax | jQuery',
    link: 'https://github.com/Yipeechen/stackoverflow',
    img: 'https://yipeechen.github.io/resume/images/work-2.jpg',
  },
  {
    title: 'Restaurant forum',
    tool: 'Ruby on Rails | Bootstrap3 | Git Version Control | Heroku',
    link: 'https://restaurant-forum-by-yipee.herokuapp.com',
    img: 'https://yipeechen.github.io/resume/images/work-3.jpg',
  },
  {
    title: 'Dojo forum',
    tool: 'Ruby on Rails | JS | Bootstrap3 | Git Version Control | Ajax | Heroku',
    link: 'https://dojooforum.herokuapp.com',
    img: 'https://yipeechen.github.io/resume/images/work-4.jpg',
  },
];

const resumeWorks = () => (
  <Container id="section_works">
    <HeadingSecondary>Works</HeadingSecondary>
    <StyledWrapper>
      {works.map((work, i) => (
        <Work
          key={i}
          title={work.title}
          link={work.link}
          tool={work.tool}
          img={work.img}
        />
      ))}
    </StyledWrapper>
  </Container>
);

export default resumeWorks;
