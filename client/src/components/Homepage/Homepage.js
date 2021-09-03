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
            <div className="x">
                <img className="y" src={tama1} alt="tamago"/>
            </div>
            <div className="x2">
                <img className="y2" src={tama2} alt="tamago"/>
            </div>
            <div className="x3">
                <img className="y3" src={tama3} alt="tamago"/>
            </div>
            <div className="x4">
                <img className="y4" src={tama4} alt="tamago"/>
            </div>
            <div className="x5">
                <img className="y5" src={tama5} alt="tamago"/>
            </div>

        </body>
    );
}

export default Homepage;