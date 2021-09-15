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
    "What are we doing today?",
    "(They're lounging around..)",
    "Welcome back Master.."
  ];

  let hungerQuote = [
    "Feed me... send bread",
    "I'm hangry!!! arhghhh!",
    "Jerome would have fed me by now."
  ];

  let boredQuote = [
    "I'm soooo bored...!",
    "Are we doing anything yet?",
    "(zzz ~dreaming about someone~)"
  ];

  let dyingQuote = [
    "I'm slowly withering away...",
    "Help me...",
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
      <div className="row">
        <div className="col">
          <div className="" id="tama_stats">
            <div className="cardprofile">
            <h1>{quote}</h1>
              <p>Status 💖 {userTama.status} </p>
              <p>Happiness {emoji} {userTama.happiness} / 100 </p>
              <p>Age ⏲️ {Math.round(userTama.age/60)} minutes </p>
              <p>Fullness 🍛 {userTama.hunger} / 100 </p>
              <p>Bladder 🧻 {userTama.bladder} / 100 </p>
              <p>Birthday 🎂 {userTama.date_created.split('T')[0]} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}