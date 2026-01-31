import Link from 'next/link';
import React from 'react';

const SideNaveBard = () => {
    return (
        <div className='min-w-60 min-h-screen bg-amber-300 absolute'>
          <Link className='text-black font-bold border' href={"/"} >Home</Link>
        </div>
    );
};

export default SideNaveBard;