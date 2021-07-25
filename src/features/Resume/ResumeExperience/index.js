import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { HeadingSecondary, HeadingTertiary } from '@src/components/TypoGraphy';
import * as actionCreators from '@src/redux/modules/resume/events/actions';

const Container = styled.section`
  background-color: ${({ theme }) => theme.color.bgPrimary};
  padding: 30rem 0 5rem 0;
  margin-top: -20vh;
  ${({ theme }) => theme.tablet_mobile`
    margin-top: -15vh;
  `}
  ${({ theme }) => theme.mobile`
    padding: 20rem 0 1rem 0;
  `}
`;
const StyledWrapper = styled.ul`
  margin: 4rem auto;
  position: relative;
  width: 70%;
  max-width: 114rem;
  ${({ theme }) => theme.tablet`
    width: 80%;
  `}
  ${({ theme }) => theme.mobile`
    width: 85%;
  `}

  &:before {
    background-color: ${({ theme }) => theme.color.primaryDark};
    content: '';
    margin-left: -0.1rem;
    position: absolute;
    top: 0;
    left: 2rem;
    width: 0.2rem;
    height: 100%;
  }
`;
const StyledEventIcon = styled.label`
  transition: all 0.2s ease-in;
  outline: 1rem solid ${({ theme }) => theme.color.white};
  display: block;
  margin: 0.5rem 0.5rem 0.5rem -0.5rem;
  position: absolute;
  top: 0;
  left: 2rem;
  width: 1rem;
  height: 1rem;
`;
const StyledEventBox = styled.div`
  padding: 2rem 4rem 2rem 4rem;
  position: relative;
  top: -2.5rem;
  left: 2rem;
`;
const StyledEventPeriod = styled.p`
  transition: box-shadow 0.5s ease-in 0.1s;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.4rem;
  box-shadow: inset 0 0 0 0rem ${({ theme }) => theme.color.primaryLight};
  display: inline-block;
  margin-bottom: 1.2rem;
  padding: 0.3rem 2rem;
`;
const StyledEventWrapper = styled.div`
  position: relative;

  ${({ theme }) => theme.hoverable`
    &:hover {
      ${StyledEventIcon} {
        transform: rotate(-45deg);
        background-color: ${({ theme }) => theme.color.secondary};
        background-image: none;
      }
    
      ${StyledEventPeriod} {
        box-shadow: inset 40rem 0 0 0 ${({ theme }) => theme.color.secondaryOpLevel9};
      }
    }
  `}

  ${StyledEventIcon} {
    background-color: ${({ theme, isMainEvent }) => isMainEvent ? theme.color.secondary : theme.color.primaryDark};
    ${({ isMainEvent }) => isMainEvent ? 'background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%)' : null};
  }

  ${StyledEventPeriod} {
    box-shadow: inset 40rem 0 0 0 ${({ theme, isMainEvent }) => isMainEvent ? 'transparent' : theme.color.primaryDark};
    ${({ isMainEvent }) => isMainEvent
    ? `background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    `
    : null};
  }
`;
const StyledEventSubTitle = styled.span`
  font-size: 1.4rem;
  margin: 0 1.6rem;
  font-weight: 500;
  display: inline-block;
  ${({ theme }) => theme.mobile`
    display: block;
    margin: .4rem 0 0;
  `}
`;
const StyledEventContent = styled.div`
`;
const StyledEventContentHeading = styled.h5`
  margin-bottom: .8rem;
  font-weight: 600;

  &::before {
    content: '\- ';
    display: inline-block;
    margin: 0 .8rem 0 0;
  }

  ${({ isHighlight, theme }) => isHighlight && `color: ${theme.color.secondaryDark}`}
`;
const StyledEventContentHeadingHighlight = styled(FontAwesomeIcon).attrs({
  icon: faAward,
})`
  margin-left: .8rem;
  font-size: 1.8rem;
`;
const StyledEventContentSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: .8rem;
  ${({ theme }) => theme.mobile`
    margin-top: ${({ expanded }) => expanded ? '4.8rem' : '.8rem'};
  `}
`;
const StyledEventContentSkill = styled.span`
  border: .1rem solid ${({ theme }) => theme.color.primaryDark};
  margin: .4rem;
  padding: .1rem 1.6rem;
  border-radius: 5rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color.primaryDark};
  font-weight: 600;
`;
const StyledEventContentPart = styled.div`
  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;
const StyledEventContentParagraph = styled.p`
  ${({ theme }) => theme.mobile`
    position: relative;
    max-height: ${({ expanded }) => expanded ? '80rem' : '11rem'};
    overflow: ${({ expanded }) => expanded ? 'visible' : 'hidden'};
    transition: all .3s;

    &::before {
      content: '';
      width: 100%;
      height: 100%;    
      position: absolute;
      left: 0;
      top: 0;
      background: ${({ expanded, theme }) => expanded
    ? 'none' : `linear-gradient(to bottom, #ffffff00, ${theme.color.bgPrimary})`};
      transition: all .3s;
    }
  `}
`;
const StyledEventContentParagraphRead = styled.span`
  display: none;
  ${({ theme }) => theme.mobile`
    display: block;
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: 50%;
    bottom: ${({ expanded }) => expanded ? '-3.5rem' : '.8rem'};
    text-align: center;
    border: 2px solid ${({ expanded, theme }) => expanded ? theme.color.primaryDark : theme.color.primary};
    background-color: ${({ expanded, theme }) => expanded ? theme.color.bgPrimary : theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    font-weight: bold;
    line-height: 1.5;
    border-radius: 50%;
    cursor: pointer;
    transform: ${({ expanded }) => expanded ? 'rotate(180deg) translate(-50%, 0)' : 'translate(-50%, 0)'};
    transform-origin: left;

    &::after {
      content: '';
      border: solid ${({ expanded, theme }) => expanded ? theme.color.primaryDark : theme.color.white};
      border-width: 0 3px 3px 0;
      border-bottom-right-radius: 2px;
      display: inline-block;
      padding: 4px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, calc(-50% - 2px)) rotate(45deg);
      transform-origin: center;
    }
  `}
`;

const Event = ({ period, title, subTitle, content, isMainEvent }) => {
  const [selected, setSelected] = useState([]);

  const handleReadBtnOnPress = index => {
    const isSelected = selected.some(idx => idx === index);
    setSelected(isSelected ? selected.filter(idx => idx !== index) : [...selected, index]);
  };

  return (
    <StyledEventWrapper isMainEvent={isMainEvent}>
      <StyledEventIcon />
      <StyledEventBox>
        <StyledEventPeriod>{period}</StyledEventPeriod>
        <HeadingTertiary>
          {title}
          <StyledEventSubTitle>
            {subTitle}
          </StyledEventSubTitle>
        </HeadingTertiary>
        <StyledEventContent>
          {content.map((part, i) => (
            <StyledEventContentPart
              key={i}
              isLastOne={content.length === i + 1}
            >
              {part.heading &&
              <StyledEventContentHeading isHighlight={part.isHighlight}>
                {part.heading}
                {part.isHighlight &&
                <StyledEventContentHeadingHighlight />}
              </StyledEventContentHeading>}
              <StyledEventContentParagraph
                expanded={selected.some(idx => idx === i)}
                onClick={() => handleReadBtnOnPress(i)}
              >
                {part.body ?? part}
                <StyledEventContentParagraphRead
                  expanded={selected.some(idx => idx === i)}
                  onClick={() => handleReadBtnOnPress(i)}
                />
              </StyledEventContentParagraph>
              <StyledEventContentSkills
                expanded={selected.some(idx => idx === i)}
              >
                {part?.skills?.map((skill, i) => (
                  <StyledEventContentSkill key={i}>
                    {skill}
                  </StyledEventContentSkill>
                ))}
              </StyledEventContentSkills>
            </StyledEventContentPart>
          ))}</StyledEventContent>
      </StyledEventBox>
    </StyledEventWrapper>
  );
};
Event.propTypes = {
  content: PropTypes.array,
  isMainEvent: PropTypes.bool,
  period: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
};
Event.defaultProps = {
  content: [],
  isMainEvent: false,
  period: '',
  subTitle: '',
  title: '',
};

const resumeExperience = () => {
  const events = useSelector(state => state.resume.events.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getEvents());
  }, []);

  return (
    <Container>
      <HeadingSecondary>Experience</HeadingSecondary>
      <StyledWrapper>
        {events.reverse().map((event, i) => (
          <Event
            key={i}
            title={event.title}
            subTitle={event.subTitle}
            period={event.period}
            content={event.content}
            isMainEvent={event.isMainEvent}
          />
        ))}
      </StyledWrapper>
    </Container>
  );
};

export default resumeExperience;
