/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types'
const Mainlayout = ({ handleClick }) => {
    // const [val, setVal] = useState('home')

    return (
        <div>

            <div>
                <Header handleClick={handleClick}></Header>

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Mainlayout;
Mainlayout.propTypes = {
    handleClick: PropTypes.func

}