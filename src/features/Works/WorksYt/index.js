import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import * as actionCreators from '../../../redux/modules/worksYt';

const StyledContainer = styled.div`
  margin: 40px auto;
`;
class Yt extends React.Component {
  constructor (props) {
    super();
    this.state = {};
  }

  render () {
    const { videos, onSearchVideo } = this.props;
    return (
      <StyledContainer>
        <SearchBar
          fetchPlaylist={onSearchVideo}
        />
        <SearchResult
          data={videos}
        />
      </StyledContainer>
    );
  }
}

Yt.propTypes = {
  videos: PropTypes.array,
  onSearchVideo: PropTypes.func,
};
Yt.defaultProps = {
  videos: [],
  onSearchVideo: null,
};

const mapStateToProps = state => {
  return {
    videos: state.yt.videos,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSearchVideo: result => dispatch(actionCreators.fetchVideo(result)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Yt);
