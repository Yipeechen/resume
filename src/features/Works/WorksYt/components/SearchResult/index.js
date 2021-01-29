import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: baseline;
  width: 90%;
  margin: 40px auto;
`;
const StyledCard = styled.a.attrs(props => ({
  href: `https://www.youtube.com/watch?v=${props.videoId}`,
  target: '_blank',
}))`
  overflow: hidden;
  width: calc(25% - 8px);
  text-align: center;
  margin: 16px 4px;
  ${({ theme }) => theme.mobile`
    width: 100%;
  `}
`;
const StyledCardImg = styled.img.attrs(props => ({
  src: props.img,
}))`
  
`;
const StyledCardTitle = styled.h5`
  color: #000;
`;

const ResultCard = ({ img, title, videoId }) => {
  return (
    <StyledCard videoId={videoId}>
      <StyledCardImg img={img} />
      <StyledCardTitle>
        {title}
      </StyledCardTitle>
    </StyledCard>
  );
};
ResultCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  videoId: PropTypes.string,
};
ResultCard.defaultProps = {
  img: '',
  title: '',
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
