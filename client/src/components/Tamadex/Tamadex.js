import React from "react";
import tama1 from '../../assets/tama1.png';
import tama2 from '../../assets/tama2.png';
import tama3 from '../../assets/tama3.png';
import tama4 from '../../assets/tama4.png';
import tama5 from '../../assets/tama5.png';
import './tamadex.css';

function Tamadex() {
    return (
        <body>
            <h2>TAMADEX!</h2>
            <div className="tamadexcontainer">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div className="tamadexcard">
                            <img
                                className="card-img-top"
                                src={tama1}
                                alt="Mametchi"
                            />
                            <div class="flip-card-back">
                                <h2>Mametchi</h2>
                                Mametchi is extremely clever with an IQ of around 250. He is a serious prodigy type, and one of the smartest Tama. However, he has poor drawing skills. Rumor has it that he is seeing someone named Mimitchi.
                            </div>
                        </div>
                    </div>
                </div>
            


           
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div className="tamadexcard">
                            <img
                                className="card-img-top"
                                src={tama2}
                                alt="Kuchipatchi"
                            />
                            <div class="flip-card-back">
                                <h2>Kuchipatchi</h2>
                                Kuchipatchi has a carefree and gentle nature. He is mild and lazy, but very romantic and a daydreamer. He sometimes cheats if playing games. He has a supersized passion for food, especially Tama-Donuts, and he also loves to take naps.
                            </div>
                        </div>
                    </div>
                </div>
         

         <div class="flip-card">
                    <div class="flip-card-inner">
                        <div className="tamadexcard">
                            <img
                                className="card-img-top"
                                src={tama3}
                                alt="Violetchi"
                            />
                            <div class="flip-card-back">
                                <h2>Violetchi</h2>
                                Violetchi is softhearted and easygoing, and is very knowledgeable about flowers and gardening. She has a profound understanding of flowers. Aside from flowers, Violetchi loves the color pink, drawing, and going on bike rides.
                            </div>
                        </div>
                    </div>
                </div>
        



        <div class="flip-card">
                    <div class="flip-card-inner">
                        <div className="tamadexcard">
                            <img
                                className="card-img-top"
                                src={tama4}
                                alt="Memetchi"
                            />
                            <div class="flip-card-back">
                                <h2>Memetchi</h2>
                                Memetchi is  a very stylish, feminine Tama who loves to have fun. She enjoys daydreaming, dancing, dressing up. She is often seeing with pink roll cake and swirly-faced teddy bears.Despite being bright and cheerful, she is sensitive and somewhat defensive of her appearance. 
                            </div>
                        </div>
                    </div>
                </div>
        



        <div class="flip-card">
                    <div class="flip-card-inner">
                        <div className="tamadexcard">
                            <img
                                className="card-img-top"
                                src={tama5}
                                alt="Gozarutchi"
                            />
                            <div class="flip-card-back">
                                <h2>Gozarutchi</h2>
                                Gozarutchi's specialty is throwing ninja stars, and he hopes to someday be a ninja. He possesses many ninja abilities. Besides wanting to become a ninja, he is a bit shy. Gozarutchi actually has low blood pressure and is not a morning person. Violetchi has a crush on him.
                            </div>
                        </div>
                    </div>
                </div>
        </div>




        </body>
    );
}

export default Tamadex;