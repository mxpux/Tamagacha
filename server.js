const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
require('dotenv').config();
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const cron = require('node-cron');
const { getAllUserTama } = require('./utils/passive')
const fetch = require("node-fetch")

const app = express();
const PORT = process.env.PORT || 3005;

// const sess = {
//     secret: process.env.SESSION_SECRET,
//     cookie: {
//              maxAge: 60*60*1000,
//     },
//     rolling: true,
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };

// -- cron -- \\
cron.schedule('0,05,10,15,20,25,30,35,40,45,50,55 * * * * *', () => {
    getAllUserTama(PORT).then(data => console.log(data))
})

// -- middleware -- \\
// app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});