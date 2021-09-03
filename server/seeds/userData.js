const { User } = require('../models')

const userData = [
  {
    username: 'eajay',
    email:'eajay@mail.com',
    password: '$2b$10$J.QAdHBeBab7y84f6MEkju9b1/eG.jeesOSwvlSi54dAw7FfiTJjG'
  },
  {
    username: 'maria',
    email: 'maria@mail.com',
    password: 'maria1234'
  },
  {
    username: 'johnny',
    email: 'johnny@mail.com',
    password: 'johnny1234'
  },
  {
    username: 'samantha',
    email: 'samantha@mail.com',
    password: 'samantha1234'
  },
  {
    username: 'eddie',
    email: 'eddie@mail.com',
    password: '$2b$10$J.QAdHBeBab7y84f6MEkju9b1/eG.jeesOSwvlSi54dAw7FfiTJjG'
  }
]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser;