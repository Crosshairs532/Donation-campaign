/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../card/Card';
import PropTypes from 'prop-types'
const Home = ({ text }) => {
    const [matchedarr, setArr] = useState([]);
    const [condition, setCondition] = useState(false)
    const loadCards = useLoaderData();
    console.log(text, "im home")

    useEffect(() => {
        const Marr = loadCards?.filter(obj => obj.necessity == text);
        {
            Marr.length > 0 ? (setArr(Marr), setCondition(true)) : setCondition(false)
        }

    }, [text])
    return (
        <div className=' max-w-[1200px] mx-auto gap-6 grid grid-cols-1 place-items-center lg:grid-cols-4 md:grid-cols-2 my-[80px]'>
            {
                condition ? matchedarr.map((card, idx) => <Card key={idx} card={card}></Card>) : loadCards.map((card, idx) =>
                    <Card key={idx} card={card}></Card>)

            }
        </div>

    );
};

export default Home;
Home.propTypes = {
    text: PropTypes.string
}