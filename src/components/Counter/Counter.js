import React, { useState } from 'react';
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0)
    function handleAdd(){
        setCount(count + 1)
    }
    return (
        <div className='name'>
            <h1>{count}</h1>
            <button onClick={handleAdd}>Add</button>
            <button>Minus</button>
        </div>
    );
};

export default Counter;