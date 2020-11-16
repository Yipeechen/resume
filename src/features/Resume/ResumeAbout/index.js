import React from 'react';
import styled from 'styled-components';

import { HeadingSecondary, HeadingTertiary } from '@src/components/TypoGraphy';
import { ButtonFull, ButtonGhost } from '@src/components/Buttons';

const Container = styled.section`
  background-color: ${({ theme }) => theme.color.bgPrimary};
  padding: 25rem 0 30rem 0;
  margin-top: -20vh;
`;
const StyledWrapper = styled.div`
  display: flex;
  max-width: 114rem;
  margin: 0 auto;
  ${({ theme }) => theme.tablet`
    max-width: 76.8rem;
  `}
`;
const StyledAvatarImg = styled.img.attrs({
  src: 'https://yipeechen.github.io/resume/images/avatar.jpg',
  alt: 'avatar',
})`
  width: 65%;
  filter: grayscale(1);
  transform: translate(20%, 0%);
  transition: all .3s;
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
    transform: translate(-20%, 50%);
    transition: all .3s;
  }
`;
const StyledAvatar = styled.div`
  flex: 1;

  ${({ theme }) => theme.hoverable`
    &:hover {
      ${StyledAvatarImg} {
        outline: 1.5rem solid ${({ theme }) => theme.color.secondaryOpLevel5};
        transform: scale(1.05) translate(30%, 0%);
        filter: grayscale(0);
        box-shadow: 0 2.5rem 4rem ${({ theme }) => theme.color.blackOpLevel5};
        z-index: 20;
      }

      ${StyledAvatarBordered} {
        &::after {
          transform: translate(-40%, 10%);
        }
      }
    }
  `}
`;
const StyledInfo = styled.div`
  flex: 1;
`;
const StyledInfoContent = styled.div`
  width: 80%;
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
  margin: 0 40px 4rem;
`;
const StyledText = styled.p`
  margin-bottom: 2rem;
`;
const StyledInfoButtons = styled.div`
  display: flex;
  justify-content: space-around;
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
          <ButtonFull
            activeClass="active"
            to="section_skills"
            smooth
            offset={200}
            duration={500}
          >
            What I learn
          </ButtonFull>
          <ButtonGhost
            activeClass="active"
            to="section_works"
            smooth
            offset={-70}
            duration={500}
          >
            My works
          </ButtonGhost>
          <ButtonGhost
            activeClass="active"
            to="section_contact"
            smooth
            offset={-70}
            duration={500}
          >
            Contact me
          </ButtonGhost>
        </StyledInfoButtons>
      </StyledInfo>
    </StyledWrapper>
  </Container>
);

export default resumeAbout;
