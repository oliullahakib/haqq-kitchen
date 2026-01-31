"use client"
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const AuthButtons = () => {
    const session = useSession()
    return (
        <div>
            {session.status==="authenticated" ? <div className='flex items-center'>
            <p className='font-bold'>{session.data.user.name}</p>
            <button onClick={() => signOut()} className='btn text-black bg-amber-400'>Logout</button>
            </div> : <>
                <button onClick={() => signIn()} className='btn text-black bg-amber-400'>Login</button>
                <Link href={'/register'} className='btn'>Register</Link>
            </>}

        </div>
    );
};

export default AuthButtons;