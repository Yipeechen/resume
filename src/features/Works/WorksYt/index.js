import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

const StyledContainer = styled.div`
  margin: 40px auto;
`;
class Yt extends React.Component {
  constructor (props) {
    super();
    this.state = {};
  }

  render () {
    const { data, onSearchVideo } = this.props;
    return (
      <StyledContainer>
        <SearchBar
          fetchPlaylist={onSearchVideo}
        />
        <SearchResult
          data={data}
        />
      </StyledContainer>
    );
  }
}

Yt.propTypes = {
  data: PropTypes.array,
  onSearchVideo: PropTypes.func,
};
Yt.defaultProps = {
  data: [],
  onSearchVideo: null,
};

export default Yt;
