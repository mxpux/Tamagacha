
# TAMAGACHA
![mit](https://img.shields.io/badge/license-MIT-blue)

## Deployed Link: [**TAMAGACHA**](https://tamagacha.herokuapp.com/)


> **TAMAGACHA** 
> - Collect all five Tamas -- they each have different stories!
> - Feed, play, and take them out
> - See what they're saying when they’re hungry, sad, or happy
> - Make sure to keep up and check on them to see their happiness level..
> - because if they're not happy, they can.... **die** 😔


***
> **TAMAGACHA** 
***
![Screenshot of TAMAGACHA)](https://i.imgur.com/VUZAroC.png)
![Screenshot of TAMAGACHA)](https://i.imgur.com/iN2W8ym.png)
![Screenshot of TAMAGACHA)](https://i.imgur.com/0WjERcL.png)


***
> **TAMAGACHA Demo:**
***
> [**Get a New Tama Demo**](https://i.imgur.com/U7162Dl.gif)
***
> [**Feed a Tama or take them to the bathroom**](https://i.imgur.com/zHKSFWQ.gif)
***
> [**Playing with your Tama**](https://imgur.com/6JRpAgo)
***
> [**Tama Characters**](https://i.imgur.com/d1n0GMS.gif)
***


## Getting Started

***

### Installation
For online deployment to heroku:
<ol>
<li>Set up a Heroku app by accessing <a href='dashboard.heroku.com/apps'>your heroku dashboard</a> and creating a new app.</li>
<li>Optional: Fork or clone the repository to your own GitHub account.</li>
<li>Set up heroku to auto-deploy from your GitHub repository of choice in the <code>deploy</code> tab. </li>
<li>Add a JawsDB MySQL extension from the <code>resources</code> tab.</li>
<li>When the application has finished building and deploying, open the app and explore the features.</li>
</ol>

For offline use (requires prior installation of `MySQL` and `nodejs`):
<ol>
<li>Clone down the repository or download and extract from a zipped folder.</li>
<li>Access the root folder in a terminal.</li>
<li>Install packages by entering <code>npm i</code></li>
<li>In the server folder, create a <code>.env</code> file and add the following lines:
<br /> <code>DB_NAME=tama_db</code>
<br /> <code>DB_USER=root</code>
<br /> <code>DB_PASSWORD=</code> (Your mysql password)</li>
<li> Optional: From the root folder, add seed data by entering <code>npm run seed </code>in the terminal</li>
<li>Run the application by entering <code>npm run develop</code></li>
</ol>

### Technical Usage and Adjustments
In regards to balancing the game aspect, it may be prudent to re-configure `node-cron` and other pertinent code for the best user experience.  Within `<root>/server/server.js`, there is a line of code underneath the `// -- cron -- \\` comment.  Please be sure to read the <a href='https://www.npmjs.com/package/node-cron'>Node Cron documentation</a> in regards to setting the time intervals between scheduled tasks.  

For example, updating the cron schedule to 
```js
cron.schedule('00,10,20,30,40,50 * * * *', ...(more code)...)
``` 
would allow the tasks to be run every **ten** minutes at the 00th, 10th, 20th, etc. minute of the hour.

If the developer would like to make changes to the numbers in the passive time component of the game, please refer to the object `upkeepVals` in `<root>/server/utils/passive.js` and update the numbers as necessary.  Another function of interest is `userTamaUpkeep` which can also be inspected and modified to adjust the difficulty of the game.

Lastly, if the developer would like to adjust how much `fullness` and `bladder` levels change when interacting with the tama, be sure to inspect the `feedTama` and `poopTama` methods in `<root>/client/src/components/profile/profile.js`, with focus on how `newHunger` and `newBladder` variables are implemented.

***


> #### Coding Languages used on this project:
> - [x] HTML
> - [x] CSS
> - [x] Javascript
> - [x] Fetch
> - [x] Web API
> - [x] CSS Framework
> - [x] React
> - [x] LocalStorage
> - [x] JWT
> - [x] Howler
> - [x] SweetAlert2
> - [x] Node
> - [x] NPM
> - [x] Express
> - [x] Bcrypt
> - [x] dotenv
> - [x] MySQL
> - [x] Sequelize ORM  
> - [x] Node-cron
> - [x] Node-fetch

***
### Future plans for Tamagacha

<ul>
<li>Add more tamas to collect</li>
<li>A rarity system for more interesting tamas</li>
<li>Multipliers that can differentiate the rates of upkeep between different tamas</li>
<li>Time-gated gacha system</li>
<li>Currency and a store for purchasing foods</li>
<li>A more interactive gacha page that can reflect different rarities and breeds of tamas</li>
<li>More and more features!</li>
</ul>


***
> **TAMAGACHA Team**


> - Johnny Nguyen: [**github.com/nguyenjohnnyt**](https://github.com/NguyenJohnnyT)
> - Maria Pusparani: [**github.com/mxpux**](https://github.com/mxpux)
> - Eajay Delos Santos: [**github.com/eajayd**](https://github.com/EajayD)
> - Eddie Yeung: [**github.com/eycs0317**](https://github.com/eycs0317)
> - Samantha Yuhan: [**github.com/samyuhan**](https://github.com/samyuhan)

<br/><br/>

## Thank you for playing!

