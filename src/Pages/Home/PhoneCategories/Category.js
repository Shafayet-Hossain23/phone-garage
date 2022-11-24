import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { name, image, bgClass, description } = category
    return (
        <div>
            <Link>
                <div className={`card card-side text-white pl-5 shadow-xl bg-gray-500 hover:bg-primary `}>
                    <figure><img src={image} alt="" className='w-24' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold ml-5">{name}</h2>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Category;