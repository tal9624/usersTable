const express = require('express');
const cors = require('cors');
const sequelize = require('./config');
const User = require('./models/User');
const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());


async function insertData() {
    await sequelize.sync();

    const users = [];

    for (let i = 1; i <= 100; i++) {
        users.push({
            name: `User${i}`,
            email: `user${i}@example.com`,
            score: Math.floor(Math.random() * 100) + 1, 
        });
    }

    try {
        for (let userData of users) {
            const existingUser = await User.findOne({ where: { email: userData.email } });
            if (!existingUser) {
                await User.create(userData);
            } else {
                console.log(`User with email ${userData.email} already exists.`);
            }
        }
        console.log('100 users inserted successfully');
    } catch (error) {
        console.error('Error inserting users:', error);
    }
}

insertData();
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll(); // שליפת כל המשתמשים מהדאטהבייס
        res.json(users); // החזרת המשתמשים בפורמט JSON
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' }); // טיפול בשגיאות
    }
});


app.get('/',(req,res) => {
    res.send('API is working!');
});

app.post('/users', async (req,res) => { 
    try { 
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch(error) { 
        res.status(400).json({ error: error.message });
    }
});

app.listen(port,() => { 
    console.log(`Server is running on http://localhost:${port}`); 

});