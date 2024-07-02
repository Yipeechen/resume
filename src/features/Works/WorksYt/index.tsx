import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import { useAppSelector, useAppDispatch } from '@src/redux/hooks';
import SearchBar from '@src/features/Works/WorksYt/components/SearchBar';
import SearchResult from '@src/features/Works/WorksYt/components/SearchResult';
import { clearPlaylist, fetchMostPopularVideo, fetchVideo } from '@src/redux/modules/worksYt/worksYtSlice';

const StyledContainer = styled.div`
  margin: 40px auto;
  width: 90%;
`;

const Yt = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { videos, loading, nextPageToken } = useAppSelector(state => ({
    videos: state.yt.videos,
    loading: state.yt.loading,
    nextPageToken: state.yt.nextPageToken,
  }));

  const dispatch = useAppDispatch();

  const infiniteScroll = useCallback(() => {
    const hasScrolledToBottom = (window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 300);

    if (videos.length && !!nextPageToken && !loading && hasScrolledToBottom) {
      if (searchTerm) {
        dispatch(fetchVideo({ searchTerm, nextPageToken }));
      } else {
        dispatch(fetchMostPopularVideo({ nextPageToken }));
      }
    }
  }, [videos, loading, nextPageToken, searchTerm, dispatch]);

  useEffect(() => {
    dispatch(fetchMostPopularVideo({}));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infiniteScroll]);

  const updateSearchTerm = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <StyledContainer>
      <SearchBar
        searchTerm={searchTerm}
        updateSearchTerm={updateSearchTerm}
        fetchPlaylist={result => dispatch(fetchVideo(result))}
        resetPlaylist={() => dispatch(clearPlaylist())}
      />
      <SearchResult
        data={videos}
      />
    </StyledContainer>
  );
};

export default Yt;
