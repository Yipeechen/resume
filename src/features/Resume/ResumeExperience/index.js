import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import { HeadingSecondary, HeadingTertiary } from '@src/components/TypoGraphy';

const Container = styled.section`
  background-color: ${({ theme }) => theme.color.bgPrimary};
  padding: 30rem 0 5rem 0;
  margin-top: -20vh;
  ${({ theme }) => theme.tablet`
    margin-top: -15vh;
  `}
`;
const StyledWrapper = styled.ul`
  margin: 4rem auto;
  position: relative;
  width: 70%;
  ${({ theme }) => theme.tablet`
    width: 80%;
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
  padding: 2rem 4rem 2rem 2rem;
  position: relative;
  top: -1.875rem;
  left: 4rem;
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
    background-color: ${({ theme, isHightLight }) => isHightLight ? theme.color.secondary : theme.color.primaryDark};
    ${({ isHightLight }) => isHightLight ? 'background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%)' : null};
  }

  ${StyledEventPeriod} {
    box-shadow: inset 40rem 0 0 0 ${({ theme, isHightLight }) => isHightLight ? 'transparent' : theme.color.primaryDark};
    ${({ isHightLight }) => isHightLight
    ? `background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    `
    : null};
  }
`;
const StyledEventSubTitle = styled.span`
  font-size: 1.4rem;
  margin: 0 16px;
  font-weight: 500;
  display: inline-block;
`;
const StyledEventContent = styled.div`
`;
const StyledEventContentHeading = styled.h5`
  margin-bottom: .8rem;

  &::before {
    content: '\- ';
    display: inline-block;
    margin: 0 8px 0 0;
  }
`;
const StyledEventContentSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: .8rem;
`;
const StyledEventContentSkill = styled.span`
  border: 1px solid ${({ theme }) => theme.color.primaryDark};
  margin: 4px;
  padding: 1px 16px;
  border-radius: 50px;
  font-size: 13px;
  color: ${({ theme }) => theme.color.primaryDark};
  font-weight: 600;
`;
const StyledEventContentPart = styled.div`
  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;

const Event = ({ period, title, subTitle, content, isHightLight }) => (
  <StyledEventWrapper isHightLight={isHightLight}>
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
            {part.heading
              ? (<StyledEventContentHeading>
                {part.heading}
              </StyledEventContentHeading>)
              : null
            }
            {part.body ?? part}
            <StyledEventContentSkills>
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
Event.propTypes = {
  content: PropTypes.array,
  isHightLight: PropTypes.bool,
  period: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
};
Event.defaultProps = {
  content: [],
  isHightLight: false,
  period: '',
  subTitle: '',
  title: '',
};

const events = [
  {
    title: 'Biology Science',
    subTitle: 'National Sun Yat-Sen University',
    period: 'Sep. 2013 - Jun. 2017',
    content: [
      '生物科學是有關生命的、充滿多元化且具綜合性的科學，教育目標在培養生物科學研究人才、基礎科學教育人才、生物應用及技術開發人才，培育學生具有基本專業知識、獨立思考、執行課程實驗步驟和表達呈現生物科學相關知識。',
    ],
  },
  {
    title: '大航道計畫 - 讓年輕人出航',
    subTitle: 'Alpha Camp',
    period: 'Sep. 2017 - Jun. 2018',
    content: [
      {
        body: '從無程式背景的小白，依序接觸基本 Html & Css 實作出靜態網頁，接續 Git 版本控制管理，提高專案開發效率，RWD & Bootstrap 點綴靜態網頁內容排版，RoR 學習 MVC 模式開發及運用套件，Heroku 網站部署，JS & Ajax & API 增加網頁動態效果提升互動，及相關資訊觀念課程，到參與專案開發實踐，藉由創建的線上社群社團，增進交流學習。',
        skills: ['Github', 'Html5', 'CSS', 'JavaScript', 'jQuery', 'Ruby on Rails', 'Bootstrap', '金流串接'],
      },
    ],
  },
  {
    title: '茶籽堂 - 人性化線下 CRM 平台',
    subTitle: 'Alpha Camp - Demo Day 1',
    period: 'Apr. 2018',
    content: [
      {
        body: '真正著手非課程範例專案的開始，與團隊從最初的與企業主溝通需求、設計使用者故事、建立階段性目標至專案版本控制等，找出問題了解問題，學習如何發問並解決，實作出集合傳統的 POS 機、會員資料、庫存以及報表分析等功能，減少資料在不同系統間的繁複操作。',
        skills: ['Ruby on Rails', 'Sass', 'jQuery', 'chart.js'],
      },
    ],
  },
  {
    isHightLight: true,
    title: '大航道計畫 - 啟航基金得主',
    subTitle: 'Alpha Camp',
    period: 'Oct. 2018',
    content: [
      '為 Alpha Camp - Demo Day 1 與茶籽堂合作的開發者之一，從前端的客情資料到頁面的 UI 與 UX，表現皆相當的亮眼，在「入選 Demo Day 工程團隊」，針對技術力的審核和對團隊的貢獻程度等，與「求職表現」衡量綜合表現優異的學生，獲予 10 萬元啟航基金。',
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
        body: '維護既有產品，整合 PHP 的 MVC 框架下與 React 併用的前端開發環境，執行產品購買商業邏輯相關流程規劃，活動制式內容的參數化並訂定 API 規格，以達快速開發 ; 亞太第三方登入的串接。',
        skills: ['PHP', 'React', 'Sass', 'Styled-components', 'Webpack', 'Npm & Yarn', 'Eslint'],
      },
      {
        heading: 'App webview：多入口音檔教學牌卡列表｜Sign in with Apple｜靜態頁面',
        body: '產品以 React-Native 開發，接觸 Webview 與 App 間的溝通格式訂定與實行，探討 mobile browser 與 Webview 的原生行為之差異，並處理 Sign in with Apple，教學牌卡分類顯示及多情境下音檔應用，至最佳使用者體驗。',
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
          isHightLight={event.isHightLight}
        />
      ))}
    </StyledWrapper>
  </Container>
);

export default resumeExperience;
