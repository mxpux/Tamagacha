const fetch = require("node-fetch")

function getAllUserTama (PORT) {
  return fetch(`http://localhost:${PORT}/api/usertama`)
    .then(res => res.json())
}

module.exports = {
  getAllUserTama
}