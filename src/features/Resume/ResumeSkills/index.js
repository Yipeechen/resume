import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  padding: 20rem 10rem;
  background-image: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.color.primaryLightOpLevel8},
    ${({ theme }) => theme.color.primaryDarkOpLevel8}
  ),
  url(https://github.com/Yipeechen/resume/blob/master/images/skill-bg-min.jpg?raw=true);
  background-size: cover;

  transform: skewY(-7deg);
  margin-top: -10rem;
  & > * {
    transform: skewY(7deg);
  }
`;
const StyledWrapper = styled.div`
  display: flex;
  max-width: 114rem;
  margin: 0 auto;
`;
const StyledCard = styled.div`
  flex: 1;
  display: inline-table;
  background-color: ${({ theme }) => theme.color.whiteOpLevel8};
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem ${({ theme }) => theme.color.blackOpLevel2};
  transition: transform .3s;
  &:not(:last-child) {
    margin-right: 6rem;
  }
  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
  }
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
`;
const StyledHeadingTertiary = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
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
    list: ['Html5', 'Css3 & Sass', 'JavaScript', 'jQuery', 'Ruby on Rails', 'Bootstrap', 'Git Version Control'],
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
    <StyledHeadingTertiary>{title}</StyledHeadingTertiary>
    <ul>
      {content.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
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
