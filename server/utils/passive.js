const fetch = require("node-fetch");

//!Tweak with numbers for gameplay balance.  These numbers are used to subtract from upkeep
const upkeepVals = {
  hunger: 1,
  bladder: 1,
  happiness: 20,
  status: 1
};

//!Returns an array of user objects
function getAllUserTama (SERVER) {
  return fetch(`${SERVER}/api/usertama`)
    .then(res => res.json())
};

//!Returns an array of userTama objects
function createUserTamaArr (data) {
  let newArr = []
  data.forEach((user) => {
    user.tamas_owned.forEach((tama) => {
      if (tama.userTama.is_alive) { //checks if tama is alive
        newArr.push(tama.userTama)
      }
    })
  })
  // console.log(newArr);
  return newArr
};

//! Update the database
async function userTamaUpdate (userTamaArr, SERVER) {
  let newUserTamaArr = []; //Will contain updated userTama stats
  userTamaArr.forEach((userTama) => {
    //! Apply upkeep values for each userTama, then PUT to db
    newUserTama = userTamaUpkeep(userTama)
    newUserTamaArr.push(newUserTama) //push updated userTamas
  })
  Promise.all(newUserTamaArr.map(tama => { //Promise.all will ensure each fetch route is complete before moving on
    console.log(`${SERVER}/api/usertama/unique/${tama.id}`)
    fetch(`${SERVER}/api/usertama/unique/${tama.id}`, {
      method: "PUT",
      body: JSON.stringify(tama),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(console.log(`Usertama ${tama.id} updated`))
  }))
  .then(console.log('All finished'))
};


//change stats
/**
 * @param { age, hunger, happiness, bladder, date_modified, date_created, is_alive, is_awake, status} userTama 
 */
function userTamaUpkeep (userTama) {
  //!Declare variables
  // console.log('userTama before change', userTama)
  let id = userTama.id;
  let newAge = userTama.age;
  let hunger = userTama.hunger;
  let happiness = userTama.happiness;
  let bladder = userTama.bladder;
  let date_modified = userTama.date_modified;
  let date_created = userTama.date_created;
  let is_alive = userTama.is_alive;
  // let is_awake = userTama.is_awake;
  let status = userTama.status;

  //! Subtract hunger and bladder
  if ((hunger - upkeepVals.hunger) <= 0) {
    happiness -= upkeepVals.happiness;
    hunger = 0;
  } else {hunger -= upkeepVals.hunger};

  if ((bladder - upkeepVals.bladder) <= 0) {
    happiness -= upkeepVals.happiness;
    bladder = 0
  } else {bladder -= upkeepVals.bladder};

  //! Check happiness
  if (happiness > -10 && happiness <= 0) {
    happiness = 0
    status -= upkeepVals.status
  } else if (happiness <= -10) {
    happiness = 0
    status -= upkeepVals.status*2
  };

  //! Check status
  if (status <= 0) {
    is_alive = false
  };

  date_modified = new Date();
  newAge = (Date.parse(date_modified) - Date.parse(date_created))/1000; //! age in seconds
  // console.log('newAge', newAge)

  //! Createa new object with updated values
  let newUserTama = {
    id: id,
    age: newAge,
    hunger: hunger,
    happiness: happiness,
    bladder: bladder,
    date_modified: date_modified,
    is_alive: is_alive,
    status: status
  };

  // console.log('userTama after change', newUserTama)
  return newUserTama
}

module.exports = {
  getAllUserTama,
  createUserTamaArr,
  userTamaUpdate
}