import React from 'react';

const SelectFilter = ({ filterColumn, setFilterColumn }) => (
  <select
    value={filterColumn}
    onChange={e => setFilterColumn(e.target.value)}
    className="form-select mb-3"
    style={{ marginBottom: '10px', padding: '5px', width: '150px' }}
  >
    <option value="id">ID</option>
    <option value="name">Name</option>
    <option value="email">Email</option>
    <option value="score">Score</option>
    <option value="createdAt">CreatedAt</option>
  </select>
);

const SearchInput = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search..."
    value={searchTerm}
    onChange={e => setSearchTerm(e.target.value)}
    className="form-control mb-3"
    style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
  />
);

const Filter = ({ filterColumn, setFilterColumn, searchTerm, setSearchTerm }) => (
  <>
    <SelectFilter filterColumn={filterColumn} setFilterColumn={setFilterColumn} />
    <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  </>
);

export default Filter;
