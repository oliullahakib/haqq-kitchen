import FoodCard from '@/components/cards/FoodCard';
import InputSearch from '@/components/InputSearch';
import React from 'react';
const getAllFoods = async (search = "") => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`)
    const data = await res.json()
    return data.foods
}

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