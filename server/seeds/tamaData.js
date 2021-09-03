const { Tama } = require('../models')

const tamaData = [
  {
    name: 'Mametchi',
    description: 'this is tama1 description',
    pictures: 'https://i.imgur.com/fIqgUBA.png'
  },
  {
    name: 'Kuchipatchi',
    description: 'this is tama2 description',
    pictures: 'https://i.imgur.com/9wKRnPZ.png'
  },
  {
    name: 'Violetchi',
    description: 'this is tama3 description',
    pictures: 'https://i.imgur.com/KOqDtIj.png'
  },
  {
    name: 'Orenchi',
    description: 'this is tama4 description',
    pictures: 'https://i.imgur.com/NxR6vjy.png'
  },
  {
    name: 'Gozarutchi',
    description: 'this is tama5 description',
    pictures: 'https://i.imgur.com/ZaGPPo9.png'
  }
]

const seedTama = () => Tama.bulkCreate(tamaData)

module.exports = seedTama;