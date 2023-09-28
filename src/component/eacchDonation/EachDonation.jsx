/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
const EachDonation = ({ object }) => {
    const navigate = useNavigate();
    const { image, title, donation_amount, color, necessity } = object
    const { text_color, background_color, text_bg } = color

    const handleDetail = val => {
        navigate(`/${val.necessity}`)
    }
    // 
    // w-full object-fill lg:w-[220px] h-[212px]
    return (
        <div>
            <div style={{ backgroundColor: `${background_color}` }} className=" flex lg:flex-row rounded-lg space-y-4 lg:space-y-0 flex-col shadow-xl items-center w-[300px] lg:h-[200px] lg:w-[600px]">
                <div className=' lg:w-[220px] h-[200px]'>
                    <img className=' object-fill w-full h-full ' src={image} />
                </div>
                <div className=" py-[12px] lg:px-[20px] lg:py-[15px] flex-1 space-y-3">
                    <div className=' w-fit'> <h1 style={{ backgroundColor: `${text_bg}`, color: `${text_color}` }} className={` p-2 rounded-lg  text-sm font-normal text-center `}>{necessity}</h1></div>
                    <h2 className=" text-xl lg:text-2xl">{title}</h2>
                    <p style={{ color: `${text_color}` }} className=' text-base font-semibold'>${donation_amount}</p>
                    <div className=" justify-start">
                        <button onClick={() => handleDetail(object)} style={{ backgroundColor: `${text_color}` }} className={` text-white rounded-md lg:py-2 py-2 px-2 lg:px-5`}>View Details</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default EachDonation;
EachDonation.propTypes = {
    object: PropTypes.object
}