/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
import React from 'react';

const Tech = ({first, second, third, fourth, fifth, sixth}) => {
    return (
        <div className="flex flex-wrap gap-y-2 overflow-hidden">
           <span data-aos="zoom-out-left" className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{first}</span>
           <span data-aos="zoom-out-left" className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{second}</span>
           <span data-aos="zoom-out-left" className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{third}</span>
           <span data-aos="zoom-out-right" className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">{fourth}</span>
           <span data-aos="zoom-out-right" className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{fifth}</span>
           <span data-aos="zoom-out-right" className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">{sixth}</span>
        </div>
    );
};

export default Tech;