import React from "react";
import './statsdropdown.css'

export default function Stats ( { userTama }) {
  let happiness = ['😀', '😐', '😡']
  let emoji = ''
  let quote = ''

  //SELECT EMOJI
  if (userTama.happiness >= 70) {emoji = happiness[0]}
  else if (userTama.happiness >30 && userTama.happiness <70) {emoji = happiness[1]}
  else {emoji = happiness[2]}

  //SELECT BASEQUOTE
  let baseQuote = [
    'Hello!',
    "Let's play!",
    "Hihi!",
    "What are we doing today?",
    "(They're lounging around..)",
    "Welcome back Master.."
  ];

  let hungerQuote = [
    "Feed me..",
    "I'm hungry!",
    "Jerome would have fed me by now."
  ];

  let boredQuote = [
    "I'm bored...!",
    "Play with me!",
    "Are we doing anything yet?",
    "(zzz)"
  ];

  let dyingQuote = [
    "I'm slowly withering away...",
    "Help me..",
    "(Sad noises)"
  ];

  if (userTama.status < 3) {
    quote = dyingQuote[Math.floor(Math.random() * dyingQuote.length)]
  } else if (userTama.happiness < 30) {
    quote = boredQuote[Math.floor(Math.random() * boredQuote.length)]
  } else if (userTama.hunger <50 ) {
    quote = hungerQuote[Math.floor(Math.random() * hungerQuote.length)];
  }
  else {
    quote = baseQuote[Math.floor(Math.random() *baseQuote.length)];
  }

  return (
    <>
      {/* <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#tama_stats" role="button" aria-expanded="false" aria-controls="tama_stats">Show/Hide Stats</a>
      </p> */}
      <div className="row">
        <div className="col">
          <div className="" id="tama_stats">
            <div className="card card-body">

            <h1>{quote}</h1>

              <p>Status: {userTama.status} 💖 </p>
              <p>Fullness: {userTama.hunger} / 100 🍛</p>
              <p>Bladder: {userTama.bladder} / 100 🧻</p>
              <p>Happiness: {userTama.happiness} / 100 
              {emoji}
               </p>
              <p>Age: {userTama.age/60} minutes ⏲️ </p>
              <p>Birthday: {userTama.date_created.split('T')[0]} 🎂</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

//the original return statement
// return (
//   <>
//     <p>
//       <a class="btn btn-primary" data-bs-toggle="collapse" href="#tama_stats" role="button" aria-expanded="false" aria-controls="tama_stats">Show/Hide Stats</a>
//     </p>
//     <div class="row">
//       <div class="col">
//         <div class="collapse multi-collapse" id="tama_stats">
//           <div class="card card-body">
//             <p>Status: {userTama.status} 💖 </p>
//             <p>Fullness: {userTama.hunger} / 100 🍛</p>
//             <p>Bladder: {userTama.bladder} / 100 🧻</p>
//             <p>Happiness: {userTama.happiness} / 100 {emoji} </p>
//             <p>Age: {userTama.age/60} minutes ⏲️ </p>
//             <p>Birthday: {userTama.date_created.split('T')[0]} 🎂</p>
//             {/* is alive? is awake? */}
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
// )