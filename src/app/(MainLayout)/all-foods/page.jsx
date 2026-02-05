import { getAllFoods } from '@/action/server';
import FoodCard from '@/components/cards/FoodCard';
import InputSearch from '@/components/InputSearch';
import React from 'react';


const AllFoods = async ({ searchParams }) => {
    const { search } = await searchParams
    const foods = await getAllFoods(search)
    return (
        <div>
            <div className='flex items-center gap-5'>
                <h1 className='text-2xl my-5'>Foods <span className='font-bold text-orange-400'>({foods.length})</span> </h1>
                <InputSearch></InputSearch>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                {
                    foods.map(food => <FoodCard key={food.id} food={food} />)
                }
            </div>
        </div>
    );
};

export default AllFoods;