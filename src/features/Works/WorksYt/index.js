import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import * as actionCreators from '../../../redux/modules/worksYt/worksYtActions';

const StyledContainer = styled.div`
  margin: 40px auto;
  width: 90%;
`;
class Yt extends React.Component {
  constructor (props) {
    super();
    this.state = {
      searchTerm: '',
    };
  }

  componentDidMount = () => {
    const { onFetchMostPopularVideo } = this.props;
    window.addEventListener('scroll', this.infiniteScroll);
    onFetchMostPopularVideo({});
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  infiniteScroll = () => {
    const { videos, onSearchVideo, nextPageToken, loading, onFetchMostPopularVideo } = this.props;
    const { searchTerm } = this.state;
    const hasScrolledToBottom = (window.innerHeight + document.documentElement.scrollTop >=
    document.documentElement.offsetHeight - 300);

    if (videos.length && !!nextPageToken && !loading && hasScrolledToBottom) {
      if (searchTerm) {
        onSearchVideo({
          searchTerm,
          nextPageToken,
        });
      } else {
        onFetchMostPopularVideo({
          nextPageToken,
        });
      }
    }
  }

  updateSearchTerm = value => {
    this.setState({
      searchTerm: value,
    });
  }

  render () {
    const { videos, onSearchVideo, onResetPlaylist } = this.props;
    const { searchTerm } = this.state;

    return (
      <StyledContainer>
        <SearchBar
          searchTerm={searchTerm}
          updateSearchTerm={this.updateSearchTerm}
          fetchPlaylist={onSearchVideo}
          resetPlaylist={onResetPlaylist}
        />
        <SearchResult
          data={videos}
        />
      </StyledContainer>
    );
  }
}

Yt.propTypes = {
  loading: PropTypes.bool,
  nextPageToken: PropTypes.string,
  videos: PropTypes.array,
  onFetchMostPopularVideo: PropTypes.func,
  onResetPlaylist: PropTypes.func,
  onSearchVideo: PropTypes.func,
};
Yt.defaultProps = {
  loading: false,
  nextPageToken: '',
  videos: [],
  onFetchMostPopularVideo: null,
  onResetPlaylist: null,
  onSearchVideo: null,
};

const mapStateToProps = state => {
  return {
    videos: state.yt.videos,
    loading: state.yt.loading,
    nextPageToken: state.yt.nextPageToken,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchMostPopularVideo: result => dispatch(actionCreators.fetchMostPopularVideo(result)),
    onSearchVideo: result => dispatch(actionCreators.fetchVideo(result)),
    onResetPlaylist: () => dispatch(actionCreators.resetPlaylist()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Yt);
