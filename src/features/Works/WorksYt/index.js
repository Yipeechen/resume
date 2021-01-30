import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import * as actionCreators from '../../../redux/modules/worksYt';

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
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  infiniteScroll = () => {
    const { videos, onSearchVideo, nextPageToken, loading } = this.props;
    const { searchTerm } = this.state;

    if (videos.length && window.innerHeight + document.documentElement.scrollTop >=
    document.documentElement.offsetHeight - 300) {
      if (!loading) {
        onSearchVideo({
          searchTerm,
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
  onResetPlaylist: PropTypes.func,
  onSearchVideo: PropTypes.func,
};
Yt.defaultProps = {
  loading: false,
  nextPageToken: '',
  videos: [],
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
    onSearchVideo: result => dispatch(actionCreators.fetchVideo(result)),
    onResetPlaylist: () => dispatch(actionCreators.resetPlaylist()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Yt);
