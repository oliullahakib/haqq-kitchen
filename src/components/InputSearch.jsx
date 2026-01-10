'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const InputSearch = () => {
    const params = useSearchParams()
    const router = useRouter()
    const handleSearch = (e) => {
        e.preventDefault()
        const newParams = new URLSearchParams(params)
        if(e.target.search.value){
            newParams.set('search', e.target.search.value)
        }else{
            newParams.delete('search')
        }
        // console.log(newParams.toString())
        // console.log(e.target.search.value)
        router.push(`/all-foods?${newParams.toString()}`)
    }
    return (
        <div>
            <form onSubmit={handleSearch} >
                <input className='min-w-80 border border-gray-600 px-4 py-2' type="text" name="search" />
                <input className='px-4 py-2 border border-amber-100' type="submit" value="Search" />
            </form>
        </div>
    );
};

export default InputSearch;