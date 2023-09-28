/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Card = ({ card }) => {
    const { image, necessity, title, color } = card
    const { background_color, text_color, text_bg
    } = color

    return (
        <div>
            <Link to={`/home/${necessity}`}>
                <div className={` w-[290px] h-[270px] rounded-lg shadow-sm`} style={{ backgroundColor: `${background_color}` }}>
                    <div className='  h-[194px]'><img className=' w-full' src={image} /></div>
                    <div className=" p-[16px] font-Inter">
                        <p className={`text-sm font-Inter font-[500] w-[87px] text-center rounded-lg`} style={{ backgroundColor: `${text_bg}`, color: `${text_color}` }}>{necessity}</p>
                        <h2 className="card-title font-Inter" style={{ color: `${text_color}` }}>{title}</h2>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default Card;
Card.propTypes = {
    card: PropTypes.object
}
