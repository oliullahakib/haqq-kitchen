
import React from 'react';
import Navlink from './NavLink';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='flex justify-between container bg-amber-800 mx-auto px-3 py-3 border border-gray-400 rounded-2xl sticky top-0'>
            <h1 className='text-3xl'>Haqq <span className='text-orange-300'>Kitchen</span> </h1>
            <ul className='flex gap-5 items-center'>
                <Navlink href={'/'}>Home</Navlink>
                <Navlink href={'/all-foods'}>All Foods</Navlink>
                <Navlink href={'/about'}>About</Navlink>
                <Navlink href={'/reviews'}>Reviews</Navlink>
            </ul>
            <div>
                <button  className='btn text-black bg-amber-400'>Login</button>
                <Link href={'/register'} className='btn'>Register</Link>
            </div>
        </div>
    );
};

export default Navbar;