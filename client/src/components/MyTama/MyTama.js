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
                                alt="Mametchi"
                            />
                            <div class="mytamatextcont">
                                <h5 className="title">Mametchi</h5>
                                <p className="mytamatext">Favorite Food: Hamburger</p>
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
                                    alt="Mametchi"
                                />
                                <div class="mytamatextcont">
                                    <h5 className="title">Mametchi</h5>
                                    <p className="mytamatext">Favorite Food: Hamburger</p>
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
                                        alt="Mametchi"
                                    />
                                    <div class="mytamatextcont">
                                        <h5 className="title">Mametchi</h5>
                                        <p className="mytamatext">Favorite Food: Hamburger</p>
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
                                            alt="Mametchi"
                                        />
                                        <div class="mytamatextcont">
                                            <h5 className="title">Mametchi</h5>
                                            <p className="mytamatext">Favorite Food: Hamburger</p>
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
                                                alt="Mametchi"
                                            />
                                            <div class="mytamatextcont">
                                                <h5 className="title">Mametchi</h5>
                                                <p className="mytamatext">Favorite Food: Hamburger</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>







                </div>
            </div>
        </body>
    );
}

export default MyTama;