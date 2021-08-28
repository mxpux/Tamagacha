import React from "react";
import Hamburger from 'hamburger-react';
import '../styles/style.css';

const Button = ({ onClick }) => (
    <button onClick={onClick}>
        <Hamburger distance="md" color="lightyellow" >
        </Hamburger>
    </button>


);

export default Button;