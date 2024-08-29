const { Sequelize } = require ( 'sequelize' );

const sequelize = new Sequelize('home_project', 'root', '8096913' , {
    host: 'localhost',
    dialect: 'mysql'
 });

 module.exports = sequelize;