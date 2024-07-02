import styled from 'styled-components';
import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '@src/redux/hooks';
import { HeadingSecondary, HeadingTertiary } from '@src/components/TypoGraphy';
import { ButtonFull, ButtonGhost } from '@src/components/Buttons';
import { getOverview } from '@src/redux/modules/resume/overview/slice';
import { OverViewProps } from '@src/redux/modules/resume/overview/slice';

const MEDIA_QUERIES = {
  isPc: '(min-width: 1024px)',
  isPad: '(min-width:701px) and (max-width: 1023px)',
  isMobile: '(max-width: 700px)',
};
const Container = styled.section`
  background-color: ${({ theme }) => theme.color.bgPrimary};
  padding: 25rem 0 30rem 0;
  margin-top: -20vh;
  ${({ theme }) => theme.mobile`
    padding: 20rem 0 15rem 0;
  `}
`;
const StyledWrapper = styled.div`
  display: flex;
  max-width: 102.4rem;
  margin: 0 auto;
  width: 85%;
  ${({ theme }) => theme.mobile`
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  `}
`;
const StyledAvatarImg = styled.img.attrs({
  src: window.matchMedia(MEDIA_QUERIES.isMobile).matches
    ? 'https://yipeechen.github.io/resume/images/mobile/avatar.jpg'
    : 'https://yipeechen.github.io/resume/images/avatar.jpg',
  alt: 'avatar',
})`
  width: 75%;
  filter: grayscale(1);
  transform: translate(0%, 0%);
  transition: all .3s;

  ${({ theme }) => theme.tablet_mobile`
    filter: grayscale(0);
  `}
  ${({ theme }) => theme.tablet`
    width: 35vw;
    transform: translate(-4vw, 5vw);
  `}
  ${({ theme }) => theme.mobile`
    width: 100%;
    transform: translate(0, 0);
    margin-bottom: 2.4rem;
    border-radius: 50%;
  `}
`;
const StyledAvatarBordered = styled.div`
  position: relative;
  &::after {
    content: '';
    border: 1.5rem solid ${({ theme }) => theme.color.primary};
    box-sizing: border-box;
    position: absolute;
    right: 0;
    top: 0;
    width: 30rem;
    height: 30rem;
    transform: translate(-20%, 60%);
    transition: all .3s;
    ${({ theme }) => theme.tablet`
      transform: translate(-4vw, 17vw);
      width: 33vw;
      height: 33vw;
    `}
    ${({ theme }) => theme.mobile`
      display: none;
    `}
  }
`;
const StyledAvatar = styled.div`
  width: 50%;
  ${({ theme }) => theme.mobile`
    width: 75%;
    text-align: center;
  `}

  ${({ theme }) => theme.hoverable`
    &:hover {
      ${StyledAvatarImg} {
        outline: 1.5rem solid ${theme.color.secondaryOpLevel5};
        transform: scale(1.05) translate(15%, 15%);
        filter: grayscale(0);
        box-shadow: 0 2.5rem 4rem ${theme.color.blackOpLevel5};
        z-index: 20;
        ${theme.tablet`
          transform: translate(0%, 10vw);
        `}
        ${theme.mobile`
          transform: translate(0%, 0%);
          outline: 0rem solid ${theme.color.secondaryOpLevel5};
        `}
      }

      ${StyledAvatarBordered} {
        &::after {
          transform: translate(-23%, 24%);
          ${theme.tablet`
            border-color: transparent;
          `}
        }
      }
    }
  `}
`;
const StyledInfo = styled.div`
  width: 50%;
  ${({ theme }) => theme.mobile`
    width: 100%;
  `}
`;
const StyledInfoContent = styled.div`
  margin: 0 auto;
  ${({ theme }) => theme.tablet`
    width: 100%;
  `}
`;
const StyledHeadingTertiary = styled(HeadingTertiary)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const StyledHeadingTertiarySub = styled.span`
  font-size: 16px;
  text-transform: none;
  color: ${({ theme }) => theme.color.primaryDark};
`;
const StyledInfoSkill = styled.div`
  line-height: 35px;
  color:  ${({ theme }) => theme.color.primaryDark};
  word-spacing: 5px;
  margin: 0 auto 2rem;
  text-align: center;
`;
const StyledText = styled.p`
  margin-bottom: 2rem;
`;
const StyledInfoButtons = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.mobile`
    flex-wrap: wrap;
  `}
`;
const StyledButtonFull = styled(ButtonFull)`
  width: 30%;
  text-align: center;
  ${({ theme }) => theme.mobile`
    width: 100%;
    margin: 8px auto;
  `}
`;
const StyledButtonGhost = styled(ButtonGhost)`
  width: 30%;
  text-align: center;
  ${({ theme }) => theme.mobile`
    width: 100%;
    margin: 8px auto;
  `}
`;

const resumeAbout = () => {
  const overview: OverViewProps = useAppSelector(state => state.resume.overview.overview)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOverview())
  }, [])


  return (
    <Container>
      <HeadingSecondary>
        About Me
      </HeadingSecondary>
      <StyledWrapper>
        <StyledAvatar>
          <StyledAvatarBordered />
          <StyledAvatarImg />
        </StyledAvatar>
        <StyledInfo>
          <StyledInfoContent>
            <StyledHeadingTertiary>
              {overview.title}
              <StyledHeadingTertiarySub>
                {overview.subtitle}
              </StyledHeadingTertiarySub>
            </StyledHeadingTertiary>
            {overview.body.map(eachContent => (
              <StyledText key={eachContent}>{eachContent}</StyledText>
            ))}
          </StyledInfoContent>
          <StyledInfoSkill>
            {overview.skills.map((each, index) => (
              `${index !== 0 ? ' | ' : ''}${each}`
            ))}
          </StyledInfoSkill>
          <StyledInfoButtons>
            <StyledButtonFull
              activeClass="active"
              to="section_skills"
              smooth
              offset={0}
              duration={500}
            >
              What I learn
            </StyledButtonFull>
            <StyledButtonGhost
              activeClass="active"
              to="section_works"
              smooth
              offset={-70}
              duration={500}
            >
              My works
            </StyledButtonGhost>
            <StyledButtonGhost
              activeClass="active"
              to="section_contact"
              smooth
              offset={-70}
              duration={500}
            >
              Contact me
            </StyledButtonGhost>
          </StyledInfoButtons>
        </StyledInfo>
      </StyledWrapper>
    </Container>
  )
};

export default resumeAbout;
