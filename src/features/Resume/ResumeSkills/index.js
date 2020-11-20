import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import { HeadingTertiary } from '@src/components/TypoGraphy';

const Container = styled.section`
  padding: 20rem 10rem;
  background-image: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.color.primaryLightOpLevel8},
    ${({ theme }) => theme.color.primaryDarkOpLevel8}
  ),
  url('https://github.com/Yipeechen/resume/blob/master/images/skill-bg-min.jpg?raw=true');
  background-size: cover;

  transform: skewY(-7deg);
  margin-top: -10rem;
  & > * {
    transform: skewY(7deg);
  }
  ${({ theme }) => theme.tablet`
    padding: 15rem 3rem;
  `}
  ${({ theme }) => theme.mobile`
    padding: 5rem 3rem;
  `}
`;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: flex-start;
  max-width: 114rem;
  margin: 0 auto;
  ${({ theme }) => theme.tablet`
    width: 100%;
  `}
  ${({ theme }) => theme.mobile`
    flex-wrap: wrap;
  `}
`;
const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.color.whiteOpLevel8};
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem ${({ theme }) => theme.color.blackOpLevel2};
  transition: transform .3s;
  width: 33%;

  ${({ theme }) => theme.tablet`
    padding: 2.5rem .5rem;
  `}
  ${({ theme }) => theme.mobile`
    width: 100%;
    padding: 2rem;
  `}

  &:not(:last-child) {
    margin-right: 6rem;
    ${({ theme }) => theme.tablet`
      margin-right: 2rem;
    `}
    ${({ theme }) => theme.mobile`
      margin-right: 0rem;
      margin-bottom: 2.4rem;
    `}
  }
  ${({ theme }) => theme.hoverable`
    &:hover {
      transform: translateY(-1.5rem) scale(1.03);
    }
  `}
`;
const StyledCardIcon = styled.i.attrs(({ className }) => ({
  className: className,
}))`
  font-size: 6rem;
  margin-bottom: .5rem;
  display: inline-block;
  background-image: linear-gradient( 
    to right,
    ${({ theme }) => theme.color.primaryLight},
    ${({ theme }) => theme.color.primaryDark}
  );
  -webkit-background-clip: text;
  color: transparent;
  ${({ theme }) => theme.mobile`
    font-size: 5rem;
    margin-bottom: -1.5rem;
  `}
`;
const StyledCardListLi = styled.li`
  width: 100%;
  ${({ theme }) => theme.mobile`
    width: 50%;
    display: inline-block;
  `}
`;
const StyledCardList = styled.ul`
  ${({ isTwoColumn }) => isTwoColumn
    ? `display: flex;
      flex-wrap: wrap;
      ${StyledCardListLi} {
        width: 50%;
      }
      `
    : null
}
`;

const cards = [
  {
    icon: 'icon-basic-sheet-pen',
    title: 'Document Processing',
    list: ['Word', 'PowerPoint', 'AutoCad', 'Illustrator'],
  },
  {
    icon: 'icon-basic-webpage-img-txt',
    title: 'Web Development',
    list: [
      'Html5',
      'CSS3 & Sass',
      'CSS in JS',
      'JavaScript',
      'jQuery',
      'Webpack',
      'Npm & Yarn',
      'Ruby on Rails',
      'Antd & Bootstrap',
      'Eslint',
      'React & hooks',
      'Redux',
      'Webview',
      'Git Version Control',
    ],
  },
  {
    icon: 'icon-basic-world',
    title: 'Language',
    list: ['Chinese', 'Taiwanese', 'English', 'Korean'],
  },
];

const Card = ({ title, className, content }) => (
  <StyledCard>
    <StyledCardIcon className={className} />
    <HeadingTertiary>{title}</HeadingTertiary>
    <StyledCardList isTwoColumn={content.length > 8}>
      {content.map((item, i) => (
        <StyledCardListLi key={i}>{item}</StyledCardListLi>
      ))}
    </StyledCardList>
  </StyledCard>
);
Card.propTypes = {
  className: PropTypes.string,
  content: PropTypes.array,
  title: PropTypes.string,
};
Card.defaultProps = {
  className: '',
  content: [],
  title: '',
};

const resumeSkills = () => (
  <Container id="section_skills">
    <StyledWrapper>
      {cards.map((card, i) => (
        <Card
          key={i}
          className={card.icon}
          title={card.title}
          content={card.list}
        />
      ))}
    </StyledWrapper>
  </Container>
);

export default resumeSkills;
