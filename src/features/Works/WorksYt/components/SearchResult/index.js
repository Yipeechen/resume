import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
const StyledCard = styled.a.attrs(props => ({
  href: `https://www.youtube.com/watch?v=${props.videoId}`,
  target: '_blank',
}))`
  overflow: hidden;
  width: 100%;
  text-align: center;
`;
const StyledCardImg = styled.img.attrs(props => ({
  src: props.img,
}))`
  width: 100%;
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

const ResultCard = ({ img, title, videoId, channelTitle, publishTime }) => {
  return (
    <StyledCard videoId={videoId}>
      <StyledCardImg img={img} />
      <StyledCardDetail>
        <StyledCardAvatarWrapper>
          <StyledAvatar />
        </StyledCardAvatarWrapper>
        <StyledCardTitle>
          {title}
        </StyledCardTitle>
        <StyledCardInfo>
          <StyledCardInfoChannel>
            {channelTitle}
          </StyledCardInfoChannel>
          {publishTime}
        </StyledCardInfo>
      </StyledCardDetail>
    </StyledCard>
  );
};
ResultCard.propTypes = {
  channelTitle: PropTypes.string,
  img: PropTypes.string,
  publishTime: PropTypes.string,
  title: PropTypes.string,
  videoId: PropTypes.string,
};
ResultCard.defaultProps = {
  channelTitle: '',
  img: '',
  title: '',
  publishTime: '',
  videoId: '',
};

const SearchResult = ({ data = [] }) => {
  return (
    <StyledContainer>
      {data.map((item, i) => {
        return (
          <ResultCard
            key={i}
            videoId={item.id.videoId}
            img={item.snippet.thumbnails.medium.url}
            title={item.snippet.title}
            channelTitle={item.snippet.channelTitle}
            publishTime={item.snippet.publishTime}
          />
        );
      })}
    </StyledContainer>
  );
};

SearchResult.propTypes = {
  data: PropTypes.array,
};
SearchResult.defaultProps = {
  data: [],
};

export default SearchResult;
