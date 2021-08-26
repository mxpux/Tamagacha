const fetch = require("node-fetch")

//Returns an array of user objects
function getAllUserTama (PORT) {
  return fetch(`http://localhost:${PORT}/api/usertama`)
    .then(res => res.json())
}

//Returns an array of userTama objects
function createUserTamaArr (data) {
  let newArr = []
  data.forEach((user) => {
    user.tamas_owned.forEach((tama) => {
      if (tama.userTama.is_alive) { //checks if alive
        newArr.push(tama.userTama)
      }
    })
  })
  return newArr
}

module.exports = {
  getAllUserTama,
  createUserTamaArr
}