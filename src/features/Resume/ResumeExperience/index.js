import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { HeadingSecondary, HeadingTertiary } from '@src/components/TypoGraphy';

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
`;
const StyledEventContentHeadingHighlight = styled(FontAwesomeIcon).attrs({
  icon: faAward,
})`
  color: ${({ theme }) => theme.color.secondary};
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

const events = [
  {
    title: 'Biology Science',
    subTitle: 'National Sun Yat-Sen University  國立中山大學',
    period: 'Sep. 2013 - Jun. 2017',
    content: [
      '',
    ],
  },
  {
    title: '大航道計畫 - 讓年輕人出航',
    subTitle: 'Alpha Camp',
    period: 'Sep. 2017 - Oct. 2018',
    content: [
      {
        isHighlight: true,
        heading: '大航道計畫 - 啟航基金得主',
        body: '為 Alpha Camp - Demo Day 1 與茶籽堂合作的開發者之一，從前端的客情資料到頁面的 UI 與 UX 表現亮眼，在「入選 Demo Day 工程團隊」中，針對技術力的審核和對團隊的貢獻程度等，與「求職表現」衡量綜合表現優異的學生，獲予 10 萬元啟航基金。',
      },
      {
        heading: 'Demo Day 1 : 茶籽堂 - 人性化線下 CRM 平台',
        body: '真正著手非課程範例專案的開始，與團隊從最初的與企業主溝通需求、設計使用者故事、建立階段性目標至專案版本控制等，找出問題了解問題，學習如何發問並解決，實作出集合傳統的 POS 機、會員資料、庫存以及報表分析等功能，減少資料在不同系統間的繁複操作。',
        skills: ['Ruby on Rails', 'SCSS', 'Bootstrap', 'jQuery', 'chart.js'],
      },
      {
        heading: '全端網路開發，課程培訓',
        body: '從無程式背景的小白，依序接觸基本 HTML & Css 實作出靜態網頁，接續 Git 版本控制管理，提高專案開發效率，RWD & Bootstrap 點綴靜態網頁內容排版，RoR 學習 MVC 模式開發及運用套件，Heroku 網站部署，JS & AJAX & API 增加網頁動態效果提升互動，及相關資訊觀念課程，到參與專案開發實踐，藉由創建的線上社群社團，增進交流學習。',
        skills: ['Github', 'HTML5', 'CSS', 'JavaScript', 'jQuery', 'Ruby on Rails', 'Bootstrap', '金流串接'],
      },
    ],
  },
  {
    title: '希平方 - 數位教育平台',
    subTitle: 'Frontend Developer',
    period: 'Sep. 2018 - Oct. 2020',
    content: [
      {
        heading: '課程後台：使用者進度查詢｜問答平台｜多產品後台',
        body: '為採用前端主流 React 與 Redux 的 SPA 環境，從無到有的課程 & 系統問答平面、多產品之學員進度查詢介面及 UI / UX 設計，以 CSS in JS 攥寫樣式，近期加入 React hooks 運用，資料管理結合 RxJS 發送請求，處理商業邏輯與 response 初步整理。',
        skills: ['React', 'Redux', 'RxJS', 'Styled-components', 'Webpack', 'Antd', 'Npm & Yarn', 'Eslint'],
      },
      {
        heading: '前台網頁：行銷活動｜產品購買｜亞太登入串接｜課程問卷',
        body: '維護既有產品兼提升多瀏覽器兼容性，整合 PHP 的 MVC 框架下與 React 併用的前端開發環境，執行產品購買商業邏輯相關流程規劃，活動制式內容的參數化並訂定 API 規格，以達快速開發 ; 負責亞太第三方登入的串接。',
        skills: ['PHP', 'React', 'SCSS', 'Styled-components', 'Webpack', 'Npm & Yarn', 'Eslint'],
      },
      {
        heading: 'App webview：多入口音檔教學牌卡列表｜Sign in with Apple｜靜態頁面',
        body: '產品以 React-Native 開發，接觸 Webview 與 App 間的溝通格式訂定與實行，探討 mobile browser 與 Webview 的原生行為之差異，並處理 Sign in with Apple，教學牌卡分類顯示及多情境下音檔之應用，至最佳使用者體驗。',
        skills: ['Webview', 'Babel'],
      },
    ],
  },
];

const resumeExperience = () => (
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

export default resumeExperience;
