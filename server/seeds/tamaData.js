const { Tama } = require('../models')

const tamaData = [
  {
    name: 'tama1',
    description: 'this is tama1 description',
    pictures: 'pic1'
  },
  {
    name: 'tama2',
    description: 'this is tama2 description',
    pictures: 'pic2'
  },
  {
    name: 'tama3',
    description: 'this is tama3 description',
    pictures: 'pic3'
  },
  {
    name: 'tama4',
    description: 'this is tama4 description',
    pictures: 'pic4'
  },
  {
    name: 'tama5',
    description: 'this is tama5 description',
    pictures: 'pic5'
  }
]

const seedTama = () => Tama.bulkCreate(tamaData)

module.exports = seedTama;