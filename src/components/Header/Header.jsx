import profile from '..////../assets/profile.png'
import React from 'react';

const Header = () => {
    return (
        <header className='flex justify-between  mt-8 p-4 items-center border-b-2  '>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};


export default Header;