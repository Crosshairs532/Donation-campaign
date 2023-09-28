/* eslint-disable no-unused-vars */
import React from 'react';
import { useLocation } from 'react-router-dom';

const Error = () => {
    const loc = useLocation();
    console.log(loc.pathname)
    return (
        <div className=''>
            <div>   <h1 className=' text-xl lg:text-6xl text-center mt-[50%] md:mt-[10%] lg:mt-[10%]'>Page Not Found</h1></div>

        </div>
    );
};

export default Error;