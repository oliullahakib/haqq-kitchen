'use server'
export const getAllFoods = async (search = "") => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`)
    const data = await res.json()
    return data.foods
}
export const getSingleFood = async (id) => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`)
    const data = await res.json()
    return data.details
}
