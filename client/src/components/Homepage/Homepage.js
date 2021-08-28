import React from "react";
import tama1 from '../../assets/tama1.png';
import tama2 from '../../assets/tama2.png';
import tama3 from '../../assets/tama3.png';
import tama4 from '../../assets/tama4.png';
import tama5 from '../../assets/tama5.png';
import '../Header/Header';
// import Matching from '../components/Matching'

function Homepage() {
    return (
        <body>
            <div class="x">
                <img class="y" src={tama1} alt="tamago"/>
            </div>
            <div class="x2">
                <img class="y2" src={tama2} alt="tamago"/>
            </div>
            <div class="x3">
                <img class="y3" src={tama3} alt="tamago"/>
            </div>
            <div class="x4">
                <img class="y4" src={tama4} alt="tamago"/>
            </div>
            <div class="x5">
                <img class="y5" src={tama5} alt="tamago"/>
            </div>

        </body>
    );
}

export default Homepage;