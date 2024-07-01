import styled, { keyframes } from 'styled-components';
import { useAppSelector } from '@src/redux/hooks';

import timeUtils from '@src/utils/time';
import { VideoItem } from '@src/redux/modules/worksYt/worksYtSlice';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4 ,1fr);
  grid-gap: 32px 16px;
  margin: 48px auto;
  ${({ theme }) => theme.tablet`
    grid-template-columns: repeat(3 ,1fr);
  `}
  ${({ theme }) => theme.mobile`
    grid-template-columns: repeat(1 ,1fr);
  `}
`;
const loading = keyframes`
  100% { 
    transform: translateX(100%); 
  } 
`;
const StyledCard = styled.a.attrs<{ videoId?: string }>(props => ({
  href: `https://www.youtube.com/watch?v=${props.videoId}`,
  target: '_blank',
}))<{ videoId?: string }>`
  overflow: hidden;
  width: 100%;
  text-align: center;

  &:empty {
    position: relative; 
    background: ${({ theme }) => theme.color.grey};
    min-height: 200px;
    &::after {
      display: block; 
      content: ''; 
      position: absolute; 
      width: 100%; 
      height: 100%; 
      transform: translateX(-100%); 
      background: -webkit-gradient(linear, left top, right top,
                  from(transparent),  
                  color-stop(rgba(255, 255, 255, 0.2)), 
                  to(transparent)); 
                    
      background: linear-gradient(90deg, transparent, 
                  rgba(255, 255, 255, 0.2), transparent); 
      animation: ${loading} 0.8s infinite;
    }
  }
`;
const StyledCardImg = styled.img.attrs<{ img: string }>(props => ({
  src: props.img,
}))<{ img: string }>`
  width: 100%;
  background: ${({ theme }) => theme.color.grey};
`;
const StyledCardDetail = styled.div`
  margin: 8px auto;
  display: grid;
  grid-template-columns: 2fr 10fr;
  grid-template-rows: auto;
  grid-gap: 8px 8px;
  grid-template-areas:
  "avatar title"
  "avatar info";
`;
const StyledCardAvatarWrapper = styled.div`
  grid-area: avatar;
`;
const StyledAvatar = styled.img.attrs({
  src: 'https://via.placeholder.com/400?text=avatar',
})`
  margin-top: -4px;
  width: 95%;
  border-radius: 50%;
`;
const StyledCardTitle = styled.h5`
  grid-area: title;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 2rem;
  max-height: 4rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-align: left;
`;
const StyledCardInfo = styled.div`
  grid-area: info;
  color: ${({ theme }) => theme.color.greyDark};
  font-size: 14px;
  text-align: left;
`;
const StyledCardInfoChannel = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 2rem;
  max-height: 4rem;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

interface CardDetailProps {
  videoId: string;
  img: string;
  title: string;
  channelTitle: string;
  publishTime: string;
}

const ResultCard = ({ cardDetail }: { cardDetail: CardDetailProps | null }) => (
  <>
    {cardDetail
      ? <StyledCard videoId={cardDetail.videoId}>
        <StyledCardImg img={cardDetail.img} />
        <StyledCardDetail>
          <StyledCardAvatarWrapper>
            <StyledAvatar />
          </StyledCardAvatarWrapper>
          <StyledCardTitle>
            {cardDetail.title}
          </StyledCardTitle>
          <StyledCardInfo>
            <StyledCardInfoChannel>
              {cardDetail.channelTitle}
            </StyledCardInfoChannel>
            {cardDetail.publishTime}
          </StyledCardInfo>
        </StyledCardDetail>
      </StyledCard>
      : <StyledCard />
    }
  </>
);

const SearchResult = ({ data }: { data: VideoItem[]}) => {
  const isLoading: boolean = useAppSelector(state => state.yt.loading);

  return (
    <StyledContainer>
      {data.map((item, i = 0) => {
        return (
          <ResultCard
            key={i}
            cardDetail={{
              videoId: item?.id?.videoId,
              img: item?.snippet?.thumbnails.medium.url,
              title: item?.snippet?.title,
              channelTitle: item?.snippet?.channelTitle,
              publishTime: timeUtils.relativeNow(
                timeUtils.convertISOtoTimestamp(item?.snippet?.publishedAt)),
            }}
          />
        );
      })}
      {isLoading &&
        [...Array(8)].map((e, i) => (
          <ResultCard
            key={i}
            cardDetail={null}
          />
        ))
      }
    </StyledContainer>
  );
};

export default SearchResult;
