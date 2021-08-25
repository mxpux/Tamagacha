const User = require('./User');
const UserTama = require('./UserTama');
const Tama = require('./Tama');


Tama.belongsToMany(User, {
    as: "tamagacha", // we can change this naming, it needs to have a unique constraint placed on it
    through: UserTama,
    unique: false,
    foreignKey: "tama_id",
});

User.belongsToMany(Tama, {
    as: "tamas_owned", // this naming sense can change
    through: UserTama,
    unique: false,
    foreignKey: "user_id",
});

module.exports = { User, Tama, UserTama};