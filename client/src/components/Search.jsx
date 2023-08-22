import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { search } from '../store/search.js';
import { useDispatch } from 'react-redux';

const SearchbarContainer = styled.form`
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
  const [searchVal, setSearchVal] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeSearch = (e) => {
    setSearchVal(e.target.value);
    console.log(searchVal);
  };
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (searchVal) {
      setSearchParams({ q: searchVal });
      dispatch(search(searchVal));
    } else {
      navigate('/questions');
    }
    console.log(searchVal);
  };

  return (
    <SearchbarContainer onSubmit={searchSubmitHandler}>
      <SearchboxInput
        className="searchbox"
        type="text"
        param={searchParams}
        placeholder="Search..."
        onChange={onChangeSearch}
        value={searchVal}
      />
    </SearchbarContainer>
  );
};

export default Search;
