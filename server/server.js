const express = require('express');
const cors = require('cors');
const userUtil = require('./userUtil');

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

app.get('/users', userUtil.getUsers );
// app.post('/users', userUtil.postUsers );

app.listen(port,() => { 
    console.log(`Server is running on http://localhost:${port}`); 
});