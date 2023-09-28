/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { getLocal } from '../../utility/localS';
import Alldonation from '../alldonation/Alldonation';
const Donation = () => {
    const [objects, setObject] = useState([]);
    const [val, setVal] = useState(false)

    useEffect(() => {
        const get = getLocal();
        if (get.length > 0) {
            setObject([...get])
            setVal(!val)

        }


    }, [])


    return (
        <div>

            <div>
                <div className=' container mx-auto flex justify-center items-center ' >
                    {
                        !val ? <h1 className=' text-xl lg:text-5xl font-[800] pb-[500px]'>no donation have been added....</h1> : <Alldonation objects={objects}> </Alldonation>
                    }
                </div>
            </div>
        </div>
    );
};

export default Donation;