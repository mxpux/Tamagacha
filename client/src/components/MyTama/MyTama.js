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
            <h2 className='characters-h2'>Meet the Characters!</h2>
            <div className="containter characters-container">
                <div className="card">
                    <img
                        className="card-img-top"
                        src={tama1}
                        alt="Mametchi"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Mametchi</h5>
                        <p className="card-text">Favorite Food: Hamburger</p>
                    </div>
                </div>

                <div className="card">
                    <img
                        className="card-img-top"
                        src={tama2}
                        alt="Kuchipatchi"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Kuchipatchi</h5>
                        <p className="card-text">Favorite Food: Jumbo Steak</p>
                    </div>
                </div>

                <div className="card">
                    <img
                        className="card-img-top"
                        src={tama3}
                        alt="Violetchi"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Violetchi</h5>
                        <p className="card-text">Favorite Food: Cabbage Salad</p>
                    </div>
                </div>

                <div className="card">
                    <img
                        className="card-img-top"
                        src={tama4}
                        alt="Memetchi"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Memetchi</h5>
                        <p className="card-text">Favorite Food: California Rolls</p>
                    </div>
                </div>

                <div className="card">
                    <img
                        className="card-img-top"
                        src={tama5}
                        alt="Gozarutchi"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Gozarutchi</h5>
                        <p className="card-text">Favorite Food: Sushi</p>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default MyTama;