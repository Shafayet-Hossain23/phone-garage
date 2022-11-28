import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React from 'react';
import Category from './Category';

const PhoneCategories = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch('https://phone-garage-server.vercel.app/categories')
            const data = await res.json()
            return data
        }
    })
    // console.log(categories)
    // const date = new Date()
    // const formatDate = format(date, "PPpp")
    // console.log(formatDate)

    return (
        <div>
            <div className='mb-10'>
                <h1 className='text-center text-3xl font-bold'>Product Categories</h1>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default PhoneCategories;