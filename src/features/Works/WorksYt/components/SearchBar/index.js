import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;
const StyledInput = styled.input.attrs({
  type: 'text',
})`
  margin-right: 8px;
  outline: none;
  border: 0;
  border-bottom: 2px solid pink;
`;
const StyledSearchButton = styled.button.attrs({
  type: 'button',
})`
  background-color: pink;
  width: auto;
  height: 30px;
  outline: none;
  border: 0;
  cursor: pointer;
`;

const SearchBar = ({ fetchPlaylist }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = event => {
    const value = event.target.value;
    setSearchTerm(value);
  };
  const handleClick = () => {
    // console.log('search:', searchTerm);
    fetchPlaylist(searchTerm);
  };

  return (
    <StyledContainer>
      <StyledInput
        onChange={handleChange}
        value={searchTerm}
      />
      <StyledSearchButton
        onClick={handleClick}
      >
        Search
      </StyledSearchButton>
    </StyledContainer>
  );
};

SearchBar.propTypes = {
  fetchPlaylist: PropTypes.func,
};
SearchBar.defaultProps = {
  fetchPlaylist: null,
};

export default SearchBar;
