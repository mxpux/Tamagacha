import React from "react";
import Hamburger from 'hamburger-react';
import './style.css';

const Button = ({ onClick }) => (
    <div class="menu">
        <button onClick={onClick}>
            <Hamburger distance="md" color="lightyellow" >
            </Hamburger>
        </button>
    </div>


);

export default Button;
