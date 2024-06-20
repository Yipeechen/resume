import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import SearchBar from '@src/features/Works/WorksYt/components/SearchBar';
import SearchResult from '@src/features/Works/WorksYt/components/SearchResult';
import * as actionCreators from '@src/redux/modules/worksYt/worksYtActions';
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

  const infiniteScroll = useCallback(() => {
    const hasScrolledToBottom = (window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 300);

    if (videos.length && !!nextPageToken && !loading && hasScrolledToBottom) {
      if (searchTerm) {
        dispatch(actionCreators.fetchVideo({ searchTerm, nextPageToken }));
      } else {
        dispatch(actionCreators.fetchMostPopularVideo({ nextPageToken }));
      }
    }
  }, [videos, loading, nextPageToken, searchTerm, dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);
    dispatch(actionCreators.fetchMostPopularVideo({}));

    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, []);

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
