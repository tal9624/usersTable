const User = require('../models/User');
const sequelize = require('./config');

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
    let insertedCount = 0; 

    try {
        for (let userData of users) {
            const existingUser = await User.findOne({ where: { email: userData.email } });
            if (!existingUser) {
                await User.create(userData);
                insertedCount++;
            } else {
                console.log(`User with email ${userData.email} already exists.`);
            }
        }
        console.log(`${insertedCount} users inserted successfully`);
    } catch (error) {
        console.error('Error inserting users:', error);
    }
}

insertData();