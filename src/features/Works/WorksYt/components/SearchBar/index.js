import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  ${({ theme }) => theme.tablet_mobile`
    width: 100%;
  `}
`;
const StyledInput = styled.input.attrs({
  type: 'text',
  placeholder: '搜尋',
})`
  margin-right: 8px;
  outline: none;
  flex: 10;
  font-size: 16px;
  line-height: 2;
  border: 1px solid ${({ theme }) => theme.color.grey};
  padding: 0 0 0 8px;
`;
const StyledSearchButton = styled.button.attrs({
  type: 'button',
})`
  background-color: ${({ theme }) => theme.color.grey};
  flex: 2;
  padding: 9.5px;
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
