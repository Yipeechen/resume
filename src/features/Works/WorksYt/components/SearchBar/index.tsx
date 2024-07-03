import React from 'react';
import styled from 'styled-components';

interface SearchBarProps {
  searchTerm: string;
  updateSearchTerm: (v: string) => void;
  fetchPlaylist: (payload: { searchTerm: string }) => void;
  resetPlaylist: () => void;
}

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

const SearchBar = ({
  searchTerm,
  updateSearchTerm,
  fetchPlaylist,
  resetPlaylist,
}: SearchBarProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    updateSearchTerm(value);
  };
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const code = event.keyCode || event.which;
    if (code === 13 && !!searchTerm) {
      resetPlaylist();
      fetchPlaylist({
        searchTerm,
      });
    }
  };
  const handleClick = () => {
    if (searchTerm) {
      resetPlaylist();
      fetchPlaylist({
        searchTerm,
      });
    }
  };

  return (
    <React.Fragment>
      <StyledContainer>
        <StyledInput
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          value={searchTerm}
        />
        <StyledSearchButton
          onClick={handleClick}
        >
          Search
        </StyledSearchButton>
      </StyledContainer>
    </React.Fragment>
  );
};

export default SearchBar;
