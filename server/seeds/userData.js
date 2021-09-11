const { User } = require('../models')

const userData = [
  {
    username: 'eajay',
    email:'eajay@mail.com',
    password: '12345678'
  },
  {
    username: 'maria',
    email: 'maria@mail.com',
    password: '12345678'
  },
  {
    username: 'johnny',
    email: 'johnny@mail.com',
    password: '12345678'
  },
  {
    username: 'samantha',
    email: 'samantha@mail.com',
    password: '12345678'
  },
  {
    username: 'eddie',
    email: 'eddie@mail.com',
    password: '12345678'
  }
]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser;