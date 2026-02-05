import { getAllFoods } from '@/action/server';
import FoodCard from '@/components/cards/FoodCard';
import InputSearch from '@/components/InputSearch';
import React from 'react';

export const metadata = {
    metadataBase: new URL("https://haqq-kitchen.vercel.app"),
    title: {
        default: "Haqq Kitchen – Delicious Meals, Recipes & Easy Order Online",
        template: "%s | Haqq Kitchen",
    },
    description: "Explore Haqq Kitchen – discover amazing foods, recipes, and order online",
    openGraph: {
        title: "Haqq Kitchen – Delicious Meals & Recipes",
        description: "Explore Haqq Kitchen — tasty meals & easy ordering.",
          keywords: [
    "Haqq Kitchen",
    "food ordering",
    "online food",
    "restaurant",
    "recipes",
    "Bangladesh food",
    "chef food",
    "meal delivery",
  ],
        url: "https://haqq-kitchen.vercel.app/",
        siteName: "Haqq Kitchen",
        images: [
            {
                url: "https://i.ibb.co.com/9mGV5gQW/Screenshot-2026-02-05-at-10-42-44-PM.png",
                width: 1200,
                height: 630,
                alt: "Haqq Kitchen Homepage Preview",
            }
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        images: ["https://i.ibb.co.com/9mGV5gQW/Screenshot-2026-02-05-at-10-42-44-PM.png"],
    },
};
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