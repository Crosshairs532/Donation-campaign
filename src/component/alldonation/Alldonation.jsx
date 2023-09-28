/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import EachDonation from '../eacchDonation/EachDonation';
import PropTypes from 'prop-types'
const Alldonation = ({ objects }) => {
    const [length, setLength] = useState(4);
    // const [btntxt, setButtontxt] = useState('See All')
    const [btn, setButton] = useState(false)
    const handleBtn = (btn) => {
        if (btn) {

            setButton(btn)
            setLength(objects.length)
        }
        else {

            setButton(btn)
            setLength(4)
        }
    }

    return (
        <div className=' h-[100vh]'>
            <div className=' grid lg:grid-cols-2 grid-cols-1 gap-[24px] place-items-center'>
                {
                    objects.slice(0, length)?.map((object, idx) => <EachDonation key={idx} object={object}></EachDonation>)
                }
            </div>
            <div className={` ${objects.length > 4 ? 'visible' : 'hidden'} flex justify-center mt-6`}>
                <button onClick={() => handleBtn(!btn)} className={`${btn ? 'hidden' : "visible"} py-[14px] px-[28px] text-lg font-[600] bg-[#009444] text-white rounded-lg`} >See All</button>
            </div>
        </div >
    );
};

export default Alldonation;
Alldonation.propTypes = {
    objects: PropTypes.array
}