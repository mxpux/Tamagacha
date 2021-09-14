const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
require('dotenv').config();
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const cron = require('node-cron');
const { getAllUserTama, createUserTamaArr, userTamaUpdate } = require('./utils/passive')

const app = express();
const PORT = process.env.PORT || 3005;

// -- check if production and hand URL to passive.js -- \\
const dev = process.env.NODE_ENV !== 'production'
const SERVER = dev ? `http://localhost:${PORT}` : 'https://tamagacha.herokuapp.com'

// -- cron -- \\
//!Tweak schedule based on game balance
cron.schedule('*/10 * * * * *', () => {
    getAllUserTama(SERVER)
    .then((data) => {
        userTamaUpdate(createUserTamaArr(data), SERVER)
    })
})

// -- middleware -- \\
// app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(routes); 

app.get('*', (req, res) => {
    const buildPath = path.join(__dirname, 'build', 'index.html');
    res.sendFile(buildPath);
  });

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});