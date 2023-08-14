import styled from 'styled-components';

const SearchbarContainer = styled.div`
  display: flex;
  position: relative;
  flex-grow: 1;
  margin: 0;
  justify-content: center;
`;

const SearchboxInput = styled.input`
  width: 97%;
  padding: 7.8px 9.1px 7.8px 32px;
  display: block;
  line-height: calc((13 + 2) / 13);
`;

const Search = () => {
  return (
    <SearchbarContainer>
      <SearchboxInput
        className="searchbox"
        type="text"
        placeholder="Search..."
      />
    </SearchbarContainer>
  );
};

export default Search;
