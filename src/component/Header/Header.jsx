/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
import './Header.css'
import Banner from '../Banner/Banner';
const Header = ({ handleClick }) => {

    const loc = useLocation()
    return (

        <div className={` mb-[100px]  ${loc.pathname == '/' ? 'homebanner' : ''} `}>
            <div className=" max-w-[1200px] mx-auto flex lg:flex-row flex-col gap-5 justify-between items-center pt-[38px]">
                <div>
                    <img src="/Logo.png" alt="" />
                </div>
                <div className=''>
                    <nav>
                        <ul className=' flex font-Inter lg:flex-row flex-col gap-8 items-center'>
                            <NavLink to="/"
                                className={({ isActive }) =>
                                    isActive ? " text-[#FF444A] underline underline-offset-8 text-lg font-[800]" : " text-lg font-[800]"
                                }
                            >   Home
                            </NavLink>
                            <NavLink
                                to="/donation"
                                className={({ isActive }) =>
                                    isActive ? " text-[#FF444A] underline underline-offset-8  text-lg font-[800]" : " text-lg font-[800]"
                                }
                            >
                                Donation
                            </NavLink>
                            <NavLink
                                to="/statistics"
                                className={({ isActive }) =>
                                    isActive ? " text-[#FF444A] underline underline-offset-8  text-lg font-[800]" : " text-lg font-[800]"
                                }
                            >
                                Statistic
                            </NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
            {loc.pathname == '/' && <Banner handleClick={handleClick}></Banner>}
        </div >
    );
};

export default Header;
Header.propTypes = {
    handleHeader: PropTypes.func,
    val: PropTypes.string,
    handleClick: PropTypes.func
}