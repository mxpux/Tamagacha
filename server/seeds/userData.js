const { User } = require('../models')

const userData = [
  {
    username: 'eajay',
    email:'eajay@mail.com',
    password: 'eajay1234'
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
    password: 'eddie1234'
  }
]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser;