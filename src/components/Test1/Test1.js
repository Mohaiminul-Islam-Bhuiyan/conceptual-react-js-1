import React from 'react';
import Test2 from '../Test2/Test2';
import "./Test1.css"

const Test1 = (props) => {
    const {name} = props
    return (
        <div>
            <h2 className='text-center text-4xl font-bold'>hello h2</h2>
            <Test2 name= {name}/>
        </div>
    );
};

export default Test1;