import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const UsersTable = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterColumn, setFilterColumn] = useState('name');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/users');
                console.log('Fetched users:' , response.data);
                setUsers(response.data);
                setFilteredUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => { 
        const results = users.filter(user => {
            const value = user[filterColumn].toString().toLowerCase();
            return value.includes(searchTerm.toLowerCase());
    });
        setFilteredUsers(results);
    },[searchTerm,filterColumn,users]);

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Score',
            selector: row => row.score,
            sortable: true,
        },
        {
            name: 'Created At',
            selector: row => row.createdAt,
            sortable: true,
        }
    ];

    return (
        <div className="container">
            <h1>Users List</h1>
            <select
            value = {filterColumn}
            onChange = {(e) => setFilterColumn(e.target.value)}
            className = "form-select mb-3"
            style = {{matginBottom: '10px', padding : '5px',
                width: '150px'
            }}>
                <option value = "id">ID</option>
                <option value = "name">Name</option>
                <option value = "email">Email</option>
                <option value = "score">Score</option>
                <option value = "createdAt">CreatedAt</option>
            </select>
            <input
            type = "text"
            placeholder = "Search..."
            value = {searchTerm}
            onChange = {(e) => setSearchTerm(e.target.value)}
            className = "form-control mb-3"
            style = {{marginBottom: '10px', padding: '5px'
                , width: '200px' 
            }}
            />
            <DataTable
                columns={columns}
                data={filteredUsers}
                pagination
                highlightOnHover
                responsive
                className = "table table-striped table-hover"
            />
        </div>
    );
};

export default UsersTable;
