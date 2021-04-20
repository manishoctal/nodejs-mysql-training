const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("horyaal-sports", "root", "", {
    dialect: 'mysql',
    host: "localhost",
    port: 3306,
    logging: false, 
    dialectOptions: {
  //	useUTC: true
    },
    timezone: '+00:00'
  }); 

  const modelDefiners = [
    require('./banners.model')
  ];

  for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize)
  }

  module.exports = sequelize;