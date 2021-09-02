import React from "react";
import tama1 from '../../assets/tama1.png';
import tama2 from '../../assets/tama2.png';
import tama3 from '../../assets/tama3.png';
import tama4 from '../../assets/tama4.png';
import tama5 from '../../assets/tama5.png';
import './myTama.css';


function MyTama() {
    return (
        <body>
            <div className="mytamapagetitle">Select your Tama!</div>
            <div className="mytamacontainer">

                {/* === TAMA PER CARD === */}
                <div className="mytamacardcont">
                    <div className="mytamamaincard">
                        <div className="icon">
                            <img
                                className="mytamacard-img-top"
                                src={tama1}
                                name="tama1"
                                alt="Mametchi"
                            />
                            <div class="mytamatextcont">
                                <h5 className="title">Mametchi</h5>
                                <p className="mytamatext">Favorite food: hamburger</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* === TAMA PER CARD === */}
                <div className="mytamacardcont">
                    <div className="mytamamaincard">
                        <div className="icon">
                            <img
                                className="mytamacard-img-top"
                                src={tama2}
                                alt="Kuchipatchi"
                            />
                            <div class="mytamatextcont">
                                <h5 className="title">Kuchipatchi</h5>
                                <p className="mytamatext">Favorite food: mango pudding</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* === TAMA PER CARD === */}
                <div className="mytamacardcont">
                    <div className="mytamamaincard">
                        <div className="icon">
                            <img
                                className="mytamacard-img-top"
                                src={tama3}
                                alt="Violetchi"
                            />
                            <div class="mytamatextcont">
                                <h5 className="title">Violetchi</h5>
                                <p className="mytamatext">Favorite food: toast and honey</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* === TAMA PER CARD === */}
                <div className="mytamacardcont">
                    <div className="mytamamaincard">
                        <div className="icon">
                            <img
                                className="mytamacard-img-top"
                                src={tama4}
                                alt="Orenchi"
                            />
                            <div class="mytamatextcont">
                                <h5 className="title">Orenchi</h5>
                                <p className="mytamatext">Favorite food: donuts</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* === TAMA PER CARD === */}
                <div className="mytamacardcont">
                    <div className="mytamamaincard">
                        <div className="icon">
                            <img
                                className="mytamacard-img-top"
                                src={tama5}
                                alt="Gozarutchi"
                            />
                            <div class="mytamatextcont">
                                <h5 className="title">Gozarutchi</h5>
                                <p className="mytamatext">Favorite snack: Grape juice</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default MyTama;