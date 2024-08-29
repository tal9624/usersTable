import React from 'react';
import SelectFilter from './SelectFilter';
import SearchInput  from './SearchInput';

const Filter = ({ filterColumn, setFilterColumn, searchTerm, setSearchTerm }) => (
  <>
    <SelectFilter filterColumn={filterColumn} setFilterColumn={setFilterColumn} />
    <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  </>
);

export default Filter;
