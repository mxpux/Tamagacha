const { UserTama } = require('../models')

const userTamaData = [
  {
    user_id: 1,
    tama_id: 1,
    age: 0,
    hunger: 100,
    happiness: 100,
    bladder: 100,
    date_modified: new Date(),
    date_created: new Date(),
    is_alive: true,
    is_awake: true,
    status: 10
  },
  {
    user_id: 2,
    tama_id: 2,
    age: 0,
    hunger: 100,
    happiness: 100,
    bladder: 100,
    date_modified: new Date(),
    date_created: new Date(),
    is_alive: true,
    is_awake: true,
    status: 10
  },
  {
    user_id: 3,
    tama_id: 3,
    age: 0,
    hunger: 100,
    happiness: 100,
    bladder: 100,
    date_modified: new Date(),
    date_created: new Date(),
    is_alive: true,
    is_awake: true,
    status: 10
  },
  {
    user_id: 4,
    tama_id: 4,
    age: 0,
    hunger: 100,
    happiness: 100,
    bladder: 100,
    date_modified: new Date(),
    date_created: new Date(),
    is_alive: true,
    is_awake: true,
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
    date_created: new Date(),
    is_alive: true,
    is_awake: true,
    status: 10
  },
]

const seedUserTama = () => UserTama.bulkCreate(userTamaData)

module.exports = seedUserTama;