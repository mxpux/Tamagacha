const { UserTama } = require('../models')

const userTamaData = [
  {
    user_id: 1,
    tama_id: 1,
    age: 0,
    hunger: 100,
    happiness: 100,
    bladder: 100,
    date_modified: new Date().setDate(new Date().getDate()-10),
    status: 10
  },
  {
    user_id: 2,
    tama_id: 2,
    age: 0,
    hunger: 100,
    happiness: 100,
    bladder: 100,
    date_modified: new Date().setDate(new Date().getDate()-7),
    status: 10
  },
  {
    user_id: 3,
    tama_id: 3,
    age: 0,
    hunger: 100,
    happiness: 100,
    bladder: 100,
    date_modified: new Date().setDate(new Date().getDate()-5),
    status: 10
  },
  {
    user_id: 4,
    tama_id: 4,
    age: 0,
    hunger: 100,
    happiness: 100,
    bladder: 100,
    date_modified: new Date().setDate(new Date().getDate()-3),
    status: 10
  },
  {
    user_id: 5,
    tama_id: 5,
    age: 0,
    hunger: 100,
    happiness: 100,
    bladder: 100,
    date_modified: new Date(),
    status: 10
  },
]

const seedUserTama = () => UserTama.bulkCreate(userTamaData)

module.exports = seedUserTama;