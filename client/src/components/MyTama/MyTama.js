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
            <h2>Select your Tama!</h2>

        <div className="mytamacontainer">
            <div className="card">
                <div className="icon">
                    <img
                        className="mytamacard-img-top"
                        src={tama1}
                        alt="Mametchi"
                    />
                    {/* <div className="card-body"> */}
                    <div class="mytamatextcont">
                        <h5 className="title">Mametchi</h5>
                        <p className="text">Favorite Food: Hamburger</p>
                    </div>
                    </div>
                {/* </div> */}



            

               

             
           

         </div>
            </div>
        </body>
    );
}

export default MyTama;