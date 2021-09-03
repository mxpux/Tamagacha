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
    password: '$2b$10$J.QAdHBeBab7y84f6MEkju9b1/eG.jeesOSwvlSi54dAw7FfiTJjG'
  },
  {
    username: 'johnny',
    email: 'johnny@mail.com',
    password: '$2b$10$J.QAdHBeBab7y84f6MEkju9b1/eG.jeesOSwvlSi54dAw7FfiTJjG'
  },
  {
    username: 'samantha',
    email: 'samantha@mail.com',
    password: '$2b$10$J.QAdHBeBab7y84f6MEkju9b1/eG.jeesOSwvlSi54dAw7FfiTJjG'
  },
  {
    username: 'eddie',
    email: 'eddie@mail.com',
    password: '$2b$10$J.QAdHBeBab7y84f6MEkju9b1/eG.jeesOSwvlSi54dAw7FfiTJjG'
  }
]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser;