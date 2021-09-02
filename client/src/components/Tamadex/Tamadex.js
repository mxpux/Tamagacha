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
            <h2>Meet the Tamagacha!</h2>
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
                                Mametchi is a traffic director. He tries helping Kuchipatchi back up, which leads to him bumping into Orenchi, causing the Tamagachas around him to be stuck in traffic. Rumor has it that he is now seeing someone that likes pink roll cake.
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
                                Violetchi is very knowledgeable about flowers. Gozarutchi happens to fall down next to her when she was reading. She ends up developing a crush on him. She spends the whole day trying to get his attention, but he only seems confused by her weird behavior. She's over him.
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
                                <h2>Orenchi</h2>
                                Orenchi is a very stylish Tama who loves to have fun. She enjoys daydreaming and dressing up. She is often seeing with pink roll cake. Despite being bright and cheerful, she is sensitive and somewhat defensive of her appearance.
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
                                Gozarutchi hopes to someday be a ninja. However, he is very shy which often gets misunderstood. Gozarutchi also has low blood pressure. Hidden underneath his costume is a picture of someone reading in a garden full of flowers.
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </body>
    );
}

export default Tamadex;