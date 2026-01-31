import Link from 'next/link';
import React from 'react';

const ForbiddenPage = () => {
    return (
        <div className='flex flex-col min-w-screen min-h-screen justify-center items-center '>
            <h1 className='text-4xl text-red-400'>Forbidden Access</h1>
           <Link className='px-4 py-2 bg-amber-200 text-black rounded-2xl mt-2 font-bold' href={"/"} >Back to Home</Link>
        </div>
    );
};

export default ForbiddenPage;