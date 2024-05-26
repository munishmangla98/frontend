// import React from 'react'
import PropTypes from 'prop-types';

function Cards({item}) {
    console.log(item)
    return (
        <div className="mt-4 my-3 p-3">
            <div className="card w-90  bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <figure><img src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">${item.price}</div>
                        <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Products</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// Define the PropTypes for the item prop
Cards.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired
        // Add other properties of item here as needed
    }).isRequired,
};

export default Cards;
