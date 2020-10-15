import React from 'react';
import styled from 'styled-components';

import { ButtonFull, ButtonGhost } from '@src/components/Buttons';

const Container = styled.section`
  background-color:  #f7f7f7;
  padding: 25rem 0 30rem 0;
  margin-top: -20vh;
`;
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
const StyledWrapper = styled.div`
  display: flex;
  max-width: 114rem;
  margin: 0 auto;
`;
const StyledAvatarImg = styled.img.attrs({
  src: 'https://yipeechen.github.io/resume/images/avatar.jpg',
  alt: 'avatar',
})`
  width: 60%;
  transform: translate(40%, 0%);
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
    width: 25rem;
    height: 25rem;
    transform: translate(-10%, 60%);
    transition: all .3s;
  }
`;
const StyledAvatar = styled.div`
  flex: 1;

  &:hover {
    ${StyledAvatarImg} {
      outline: 1.5rem solid ${({ theme }) => theme.color.secondaryOpLevel5};
      z-index: 20;
      transform: scale(1.05) translate(50%, 10%);
      box-shadow: 0 2.5rem 4rem ${({ theme }) => theme.color.blackOpLevel5};
      z-index: 20;
    }

    ${StyledAvatarBordered} {
      &::after {
        transform: translate(-30%, 30%);
      }
    }
  }
`;
const StyledInfo = styled.div`
  flex: 1;
  width: 80%;
`;
const StyledInfoContent = styled.div`
  margin: 0 40px 2rem 40px;
`;
const StyledHeadingTertiary = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;
const StyledInfoSkill = styled.div`
  line-height: 35px;
  text-transform: capitalize;
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
    <StyledHeadingSecondaryWrapper>
      <StyledHeadingSecondary>
        About Me
      </StyledHeadingSecondary>
    </StyledHeadingSecondaryWrapper>
    <StyledWrapper>
      <StyledAvatar>
        <StyledAvatarBordered />
        <StyledAvatarImg />
      </StyledAvatar>
      <StyledInfo>
        <StyledInfoContent>
          <StyledHeadingTertiary>
            挑戰自我 學習新技能
          </StyledHeadingTertiary>
          <StyledText>
            製作報告 PPT 及旅遊手冊，培養出對排版美編的興趣，加上選修 App Inventor 課程製作簡易 App，對於程式撰寫產生興趣，
            畢業後投入「大航道計畫」以培育 Web Full-stack development 能力為目標，從零開始建立學習經驗，動手實踐功能、畫面獲取學習動力與成就。
          </StyledText>
          <StyledText>
            透過與同儕切磋詢問、重整邏輯思維、增加熟練度以及自我解 bug 的能力，藉由理解模仿汲取奠定基礎。同時也透過其他學習網站 Udemy、Hahow 的課程和書籍精進技能，
            閱覽 Medium 文章及加入社團接收新知，努力成為擁有設計觀感，高度還原設計稿，提升使用者體驗的 Web Developer。
          </StyledText>
        </StyledInfoContent>
        <StyledInfoSkill>
          Html5 | Css3 | JavaScript | Bootstrap | Ruby on Rails
        </StyledInfoSkill>
        <StyledInfoButtons>
          <ButtonFull>What I learn</ButtonFull>
          <ButtonGhost>My works</ButtonGhost>
          <ButtonGhost>Contact me</ButtonGhost>
        </StyledInfoButtons>
      </StyledInfo>
    </StyledWrapper>
  </Container>
);

export default resumeAbout;
