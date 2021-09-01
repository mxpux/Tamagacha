const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedTama = require('./tamaData');
const seedUserTama = require('./userTamaData');




const seedAll = async () => {
  await sequelize.sync({ force : true})

  await seedUser();

  await seedTama();

  await seedUserTama();

  process.exit(0)
}

seedAll()