/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { localS } from '../../../utility/localS';
import Swal from 'sweetalert2';
const Detail = () => {

    const handleLocal = (finding) => {

        localS(finding)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Donation added...',
            showConfirmButton: false,
            timer: 1000,
            width: '300',

        })
    }
    const { id } = useParams();
    const [arr, setArr] = useState([])
    useEffect(() => {

        fetch('/donate.json')
            .then(res => res.json())
            .then(data => setArr(data))
    }, [])
    const finding = arr?.find(i => i.necessity == id)
    if (finding) {
        const { image, description, title, color, donation_amount } = finding
        const { text_color } = color
        return (
            <div>
                <div className=' lg:container  mx-auto my-[80px]'>
                    <div className=' lg:w-full w-[80%] m-auto relative'>
                        <div style={{ backgroundImage: `url(${image})` }} className={` bg-cover object-fill bg-no-repeat w-full h-[200px] lg:h-[700px]`}>
                            <div>
                                <div className=' w-full absolute h-[70px] lg:h-[130px] bg-[#0b0b0b] bg-blend-overlay opacity-50 bottom-0'>
                                </div>
                                <button onClick={() => handleLocal(finding)} style={{ backgroundColor: `${text_color}` }} className={` absolute text-white text-sm lg:text-xl px-[15px] py-[15px] lg:px-[26px] lg:py-[16px] rounded-lg font-semibold bottom-[10px] lg:bottom-[37px] left-[10px] lg:left-[37px]`}>Donate: ${donation_amount}</button>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-[56px] m-auto w-[80%] lg:w-full space-y-5' >
                        <h1 className=' lg:text-4xl text-2xl font-Inter font-bold'>{title}</h1>
                        <p className=' lg:text-base text-sm font-normal font-Inter text-[#0b0b0bb3]'>{description}</p>
                    </div>
                </div>

            </div >
        );
    }


};

export default Detail;