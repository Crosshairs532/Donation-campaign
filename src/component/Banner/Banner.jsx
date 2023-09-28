/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import './Banner.css'
import PropTypes from 'prop-types'
const Banner = ({ handleClick }) => {
    const [inputtxt, setInputtxt] = useState('')
    // export searchtext = createContext()
    const Text = e => {
        // setInputtxt(e.target.value)
        e.preventDefault()
        console.log(e.target.text.value, "hello")
        if (e.target.value == '') {
            setInputtxt('')
            handleClick('')
        }
        else {
            setInputtxt(e.target.text.value)
            handleClick(e.target.text.value)
        }
        // console.log(inputtxt)
    }
    return (
        <div>
            <div className=' h-[50vh] font-Inter flex justify-center items-center flex-col gap-[40px]' >
                <h1 className=' lg:text-5xl text-xl text-center font-bold font-Inter' >I Grow By Helping People In Need</h1>
                <div >
                    <form className=' flex items-center lg:w-[470px] w-[300px] h-[50px] rounded-lg' action="" onSubmit={Text}>
                        <input className=' w-full h-full p-[16px] rounded-s-lg bg-white border border-[#DEDEDE]' type="search" name="text" id="" placeholder='Search here....' />
                        <input className=' w-[110px] h-[50px] bg-[#FF444A] text-white text-base font-semibold rounded-e-lg' type="submit" value="Search" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Banner;
Banner.propTypes = {
    handleClick: PropTypes.func
}