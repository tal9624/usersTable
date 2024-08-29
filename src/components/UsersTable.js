import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import useUsers from '../hooks/useUsers';
import Filter from './Filter';

const UsersTable = () => {
  const { users } = useUsers(); 
  const [searchTerm, setSearchTerm] = useState('');
  const [filterColumn, setFilterColumn] = useState('name');

  const filteredUsers = users.filter(user => {
    const value = user[filterColumn].toString().toLowerCase();
    return value.includes(searchTerm.toLowerCase());
  });

  const columns = [
    { name: 'ID', selector: row => row.id, sortable: true },
    { name: 'Name', selector: row => row.name, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'Score', selector: row => row.score, sortable: true },
    { name: 'Created At', selector: row => row.createdAt, sortable: true },
  ];

  return (
    <div className="container">
      <h1>Users List</h1>
      <Filter
        filterColumn={filterColumn}
        setFilterColumn={setFilterColumn}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <DataTable
        columns={columns}
        data={filteredUsers} 
        pagination
        highlightOnHover
        responsive
        className="table table-striped table-hover"
      />
    </div>
  );
};

export default UsersTable;
