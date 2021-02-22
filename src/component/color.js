import React from 'react';
import './color.css';

const color = props => (
    <div className="main-Container">
    <div className={props.color}></div>
    </div>
);

export default color;