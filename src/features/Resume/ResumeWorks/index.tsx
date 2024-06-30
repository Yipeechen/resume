import { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';

import { HeadingSecondary } from '@src/components/TypoGraphy';
import { getAllWorks } from '@src/redux/modules/resume/works/actions';
import { RootState } from '@src/redux/root';

SwiperCore.use([Navigation, Pagination]);

const MEDIA_QUERIES = {
  isPc: '(min-width: 1024px)',
  isPad: '(min-width:701px) and (max-width: 1023px)',
  isMobile: '(max-width: 700px)',
};
const Container = styled.section<{id: string}>`
  background-color: ${({ theme }) => theme.color.bgPrimary};
  padding: 5rem 0 10rem 0;
  ${({ theme }) => theme.tablet_mobile`
    padding: 0rem 0 10rem 0;
  `}
`;
const StyledWrapper = styled.ul`
  list-style: none;
  width: 100%;
  /* @include clearfix; */
  &::after {
    content: "";
    display: table;
    clear: both;
  }
  transform: skewY(4deg);
  ${({ theme }) => theme.mobile`
    transform: skewY(0deg);
  `}
`;
const StyledWorkWrapper = styled.li`
  display: block;
  float: left;
  width: 100%;
  ${({ theme }) => theme.mobile`
    width: 100%;
    margin-bottom: 1.8rem;
  `}
`;
const StyledWorkLink = styled.a.attrs<{ link: string }>(({ link }) => ({
  href: link,
  target: '_blank',
}))<{ link: string }>``;
const StyledWorkImg = styled.img.attrs<{ img: { pc: string; mobile: string; } }>(({ img }) => ({
  src: window.matchMedia(MEDIA_QUERIES.isMobile).matches
    ? img?.mobile : img?.pc,
}))<{ img: { pc: string; mobile: string; } }>`
  opacity: 0.15;
  width: 100%;
  height: auto;
  transform: translateY(1.8rem) scale(1.3) skewY(-4deg);
  transition: transform 0.5s, opacity 0.5s;
  ${({ theme }) => theme.tablet`
    height: 100%;
  `}
  ${({ theme }) => theme.mobile`
    transform: translateY(1.8rem) scale(1.3) skewY(0deg);
  `}
`;
const StyledWorkInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: skewY(-4deg) translate(-50%, -50%);
  width: 85%;
  opacity: 1;
  color: ${({ theme }) => theme.color.primaryDark};
  word-spacing: .3rem;
  transition: all .5s;
  ${({ theme }) => theme.mobile`
    transform: skewY(0deg) translate(-50%, -50%);
  `}
`;
const StyledInfoTitle = styled.h4`
  margin-bottom: 1.5rem;
  font-size: 2.4rem;
  font-weight: bold;
  ${({ theme }) => theme.tablet_mobile`
    font-size: 2rem;
  `}
`;
const StyledInfoContent = styled.p`
  ${({ theme }) => theme.tablet_mobile`
    font-size: 1.4rem;
  `}
  ${({ theme }) => theme.mobile`
    font-weight: 600;
  `}
`;
const StyledWorkImgWrapper = styled.figure`
  position: relative;
  width: 100%;
  margin: 0;
  height: 35rem;
  overflow: hidden;
  background: linear-gradient(
  to bottom,
  ${({ theme }) => theme.color.primaryDarkOpLevel4},
  transparent ,
  ${({ theme }) => theme.color.primaryDarkOpLevel9});

  ${({ theme }) => theme.mobile`
    height: 15rem;
    background: linear-gradient(
      to bottom,
      ${theme.color.white},
      ${theme.color.transparent},
      ${theme.color.blackOpLevel3}
    );
  `}

  ${({ theme }) => theme.hoverable`
    &:hover {
      ${StyledWorkImg} {
        opacity: 1;
        transform: translateY(1.8rem) scale(1.17) skewY(-4deg);
        ${theme.mobile`
          transform: translateY(1.8rem) scale(1.17) skewY(0deg);
        `}
      }
      
      ${StyledWorkInfo} {
        opacity: 0;
        transform: translate(-50%, 200%) skewY(-4deg);
      }
    }
  `}
`;
interface WorkProps {
  link: string;
  title: string;
  tool: string;
  img: {
    pc: string;
    mobile: string;
  };
}
const Work = ({ link, title, tool, img }: WorkProps) => (
  <StyledWorkWrapper>
    <StyledWorkLink link={link}>
      <StyledWorkImgWrapper>
        <StyledWorkImg img={img} />
        <StyledWorkInfo>
          <StyledInfoTitle>{title}</StyledInfoTitle>
          <StyledInfoContent>{tool}</StyledInfoContent>
        </StyledWorkInfo>
      </StyledWorkImgWrapper>
    </StyledWorkLink>
  </StyledWorkWrapper>
);

const resumeWorks = () => {
  const works = useSelector((state: RootState) => state.resume.works.works);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllWorks())
  }, [])
  
  const slides = useMemo(() => (
    works.map(work => (
      <SwiperSlide
        key={work.title}
        style={{ listStyle: 'none' }}
      >
        <div className="slide">
          <Work
            title={work.title}
            link={work.link}
            tool={work.tool}
            img={work.img}
          />
        </div>
      </SwiperSlide>
    ))
  ), [works]);
  const slidesPerViewCondition = useMemo(() => (
    window.matchMedia(MEDIA_QUERIES.isMobile).matches
      ? 1 : window.matchMedia(MEDIA_QUERIES.isPad).matches
        ? 3 : 4
  ), [])

  return (
    <Container id="section_works">
      <HeadingSecondary>Portfolio</HeadingSecondary>
      <StyledWrapper>
        <Swiper
          id="swiper"
          slidesPerView={slidesPerViewCondition}
          initialSlide={4}
          spaceBetween={16}
          navigation
          pagination
          loop
          // loopFillGroupWithBlank
        >
          {slides}
        </Swiper>
      </StyledWrapper>
    </Container>
  );
}
;

export default resumeWorks;
