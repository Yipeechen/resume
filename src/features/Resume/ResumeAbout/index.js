import React from 'react';
import styled from 'styled-components';

import { HeadingSecondary, HeadingTertiary } from '@src/components/TypoGraphy';
import { ButtonFull, ButtonGhost } from '@src/components/Buttons';

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
        outline: 1.5rem solid ${({ theme }) => theme.color.secondaryOpLevel5};
        transform: scale(1.05) translate(15%, 15%);
        filter: grayscale(0);
        box-shadow: 0 2.5rem 4rem ${({ theme }) => theme.color.blackOpLevel5};
        z-index: 20;
        ${({ theme }) => theme.tablet`
          transform: translate(0%, 10vw);
        `}
        ${({ theme }) => theme.mobile`
          transform: translate(0%, 0%);
          outline: 0rem solid ${({ theme }) => theme.color.secondaryOpLevel5};
        `}
      }

      ${StyledAvatarBordered} {
        &::after {
          transform: translate(-23%, 24%);
          ${({ theme }) => theme.tablet`
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

const resumeAbout = () => (
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
            挑戰自我，學習新技能
            <StyledHeadingTertiarySub>
              2 years + Frontend Developer
            </StyledHeadingTertiarySub>
          </StyledHeadingTertiary>
          <StyledText>
          參與從零到有的環境開發設置，與一名資深工程師開創後台系統，使用前端主流生態 React 與 Redux，搭配 RxJS 進行非同步請求處理，近期加入 React hooks 應用，
            學習到模組化管理、前端框架應用、Webview 實作經驗。
          </StyledText>
          <StyledText>
            與後端工程師討論 API 規格，構想多種錯誤情況處理，產品開發上獨自完成 UI / UX，聽取使用者回饋進行改善，細心特質可交付高完成度、低錯誤率的作品。
          </StyledText>
          <StyledText>
            透過其他學習網站 Udemy 課程和書籍精進與驗證技能，
            閱覽 Medium 文章及加入社團接收新知，成為擁有設計觀感、提升使用者體驗的開發者。
          </StyledText>
        </StyledInfoContent>
        <StyledInfoSkill>
          Html5 | CSS3 | JavaScript | React | Redux | Ruby on Rails
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
);

export default resumeAbout;
