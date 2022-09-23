import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({countIncrease}) => {
    const [guns, setGuns] = useState([])

    

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => setGuns(data))
    }, [])

    return (
        <div className='mt-5'>
            <div className='mb-10'>
            <h1 className='text-4xl font-bold mt-4'>Tor ki machine lagbo!!!</h1>
        </div>
        <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
           {
            guns.map(gun => <SingleGun gun= {gun} countIncrease = {countIncrease}></SingleGun>)
           }
        </div>
        </div>
    );
};

export default AllGun;