import React from 'react';
import "./Test2.css"

const Test2 = (props) => {
    console.log(props)
    return (
        <div>
            <h1>name= {props.name}</h1>
        </div>
    );
};

export default Test2;