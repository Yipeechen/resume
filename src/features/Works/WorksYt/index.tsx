import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import * as actionCreators from '../../../redux/modules/worksYt/worksYtActions';
import { RootState } from '@src/redux/root';

const StyledContainer = styled.div`
  margin: 40px auto;
  width: 90%;
`;

const Yt = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { videos, loading, nextPageToken } = useSelector((state: RootState) => ({
    videos: state.yt.videos,
    loading: state.yt.loading,
    nextPageToken: state.yt.nextPageToken,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    const infiniteScroll = () => {
      const hasScrolledToBottom = (window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 300);

      if (videos.length && !!nextPageToken && !loading && hasScrolledToBottom) {
        if (searchTerm) {
          dispatch(actionCreators.fetchVideo({ searchTerm, nextPageToken }));
        } else {
          dispatch(actionCreators.fetchMostPopularVideo({ nextPageToken }));
        }
      }
    };
    window.addEventListener('scroll', infiniteScroll);
    dispatch(actionCreators.fetchMostPopularVideo({}));

    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [videos, loading, nextPageToken, searchTerm, dispatch]);

  const updateSearchTerm = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <StyledContainer>
      <SearchBar
        searchTerm={searchTerm}
        updateSearchTerm={updateSearchTerm}
        fetchPlaylist={result => dispatch(actionCreators.fetchVideo(result))}
        resetPlaylist={() => dispatch(actionCreators.resetPlaylist())}
      />
      <SearchResult
        data={videos}
      />
    </StyledContainer>
  );
};

export default Yt;
