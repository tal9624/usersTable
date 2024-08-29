const User = require('../models/User');

// const postUsers = async (req,res) => { 
//     try { 
//         const user = await User.create(req.body);
//         res.status(201).json(user);
//     } catch(error) { 
//         res.status(400).json({ error: error.message });
//     }
// }

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll(); 
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' }); 
    }
}

module.exports = {getUsers };