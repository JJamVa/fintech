import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchInputBox = styled.input`
  padding: 10px;
  font-size: 16px;
  flex: 1;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
`;

const SearchInput = ({ handleChange, handleClick }) => {
  return (
    <SearchContainer>
      <SearchInputBox onChange={handleChange} />
      <SearchButton onClick={handleClick}>검색</SearchButton>
    </SearchContainer>
  );
};

export default SearchInput;