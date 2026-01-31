
import React from 'react';
import Navlink from './NavLink';
import AuthButtons from '../../AuthButtons';

const Navbar = () => {
    return (
        <div className='flex justify-between container bg-amber-800 mx-auto px-3 py-3 border border-gray-400 rounded-2xl sticky top-0'>
            <h1 className='text-3xl'>Haqq <span className='text-orange-300'>Kitchen</span> </h1>
            <ul className='flex gap-5 items-center'>
                <Navlink href={'/'}>Home</Navlink>
                <Navlink href={'/all-foods'}>All Foods</Navlink>
                <Navlink href={'/about'}>About</Navlink>
                <Navlink href={'/reviews'}>Reviews</Navlink>
                <Navlink href={'/dashboard'}>Dashboard</Navlink>
            </ul>        
                <AuthButtons/>
        </div>
    );
};

export default Navbar;