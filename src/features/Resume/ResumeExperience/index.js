import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import { HeadingSecondary, HeadingTertiary } from '@src/components/TypoGraphy';

const Container = styled.section`
  background-color: ${({ theme }) => theme.color.bgPrimary};
  padding: 30rem 0 5rem 0;
  margin-top: -20vh;
`;
const StyledWrapper = styled.ul`
  margin: 4rem auto;
  position: relative;
  width: 60%;

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
  transition: transform 0.2s ease-in;
  background-color: ${({ theme }) => theme.color.primaryDark};
  outline: 10px solid ${({ theme }) => theme.color.white};
  display: block;
  margin: 0.5rem 0.5rem 0.5rem -0.5rem;
  position: absolute;
  top: 0;
  left: 2rem;
  width: 1rem;
  height: 1rem;
`;
const StyledEventBox = styled.div`
  padding: 2rem;
  position: relative;
  top: -1.875rem;
  left: 4rem;
`;
const StyledEventPeriod = styled.p`
  transition: box-shadow 0.5s ease-in 0.1s;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.color.primaryDark};
  box-shadow: inset 0 0 0 0rem ${({ theme }) => theme.color.primaryLight};
  display: inline-block;
  margin-bottom: 1.2rem;
  padding: 0.3rem 2rem;
`;
const StyledEventWrapper = styled.div`
  position: relative;

  &:hover {
    ${StyledEventIcon} {
      transform: rotate(-45deg);
      background-color: ${({ theme }) => theme.color.secondary};
    }
  
    ${StyledEventPeriod} {
      box-shadow: inset 40rem 0 0 0 ${({ theme }) => theme.color.secondaryOpLevel9};
    }
  }
`;
const StyledEventSubTitle = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
`;
const StyledEventContent = styled.div`
  padding-bottom: 1.2rem;
`;

const Event = ({ period, title, subTitle, content }) => (
  <StyledEventWrapper>
    <StyledEventIcon />
    <StyledEventBox>
      <StyledEventPeriod>{period}</StyledEventPeriod>
      <HeadingTertiary>{title}</HeadingTertiary>
      <StyledEventSubTitle>{subTitle}</StyledEventSubTitle>
      <StyledEventContent>{content}</StyledEventContent>
    </StyledEventBox>
  </StyledEventWrapper>
);
Event.propTypes = {
  content: PropTypes.string,
  period: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
};
Event.defaultProps = {
  content: '',
  period: '',
  subTitle: '',
  title: '',
};

const events = [
  {
    title: 'Biology Science',
    subTitle: 'National Sun Yat-Sen University',
    period: 'September  2013 - June 2017',
    content: '生物科學是有關生命的、充滿多元化且具綜合性的科學，教育目標在培養生物科學研究人才、基礎科學教育人才、生物應用及技術開發人才，培育學生具有基本專業知識、獨立思考、執行課程實驗步驟和表達呈現生物科學相關知識。',
  },
  {
    title: '大航道計畫 - 讓年輕人出航',
    subTitle: 'Alpha Camp',
    period: 'September 2017 - June 2018',
    content: '從無程式背景的小白，依序接觸基本Html & Css實作出靜態網頁，接續Git版本控制管理，提高專案開發效率，RWD & Bootstrap點綴靜態網頁內容排版，ROR學習MVC模式開發及運用套件，Heroku網站部署，JS & Ajax & API增加網頁動態效果提升互動，及相關資訊觀念課程，到參與專案開發實踐，藉由創建的線上社群社團，增進交流學習。',
  },
  {
    title: '茶籽堂 - 人性化線下CRM平台',
    subTitle: 'Alpha Camp - Demo Day',
    period: 'April 2018',
    content: '真正著手非課程範例專案的開始，與團隊從最初的與企業主溝通需求、設計使用者故事、建立階段性目標至專案版本控制等，找出問題了解問題，學習如何發問並解決，實作出集合傳統的POS機、會員資料、庫存以及報表分析等功能，減少資料在不同系統間的繁複操作。',
  },
];

const resumeExperience = () => (
  <Container>
    <HeadingSecondary>Experience</HeadingSecondary>
    <StyledWrapper>
      {events.map((event, i) => (
        <Event
          key={i}
          title={event.title}
          subTitle={event.subTitle}
          period={event.period}
          content={event.content}
        />
      ))}
    </StyledWrapper>
  </Container>
);

export default resumeExperience;
