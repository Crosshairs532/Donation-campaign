/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mainlayout from '../component/Mainlayout/Mainlayout';
import Error from '../component/Error/Error';
import Home from '../component/Home/Home';
import Donation from '../component/Donation/Donation';
import Detail from '../component/Home/Details/Detail';
import Statistics from '../component/Statistics/Statistics';

function App() {
    const [txt, setTxt] = useState('')
    const handleClick = text => {
        console.log('im outside')
        setTxt(text)
    }


    const Router = createBrowserRouter([
        {
            path: '/',
            element: <Mainlayout handleClick={handleClick}></Mainlayout>,
            errorElement: <Error></Error>,
            children: [
                {
                    path: '/',
                    element: <Home text={txt} ></Home>,
                    loader: () => fetch('/donate.json'),

                },
                {
                    path: '/donation',
                    element: <Donation></Donation>,
                },
                {

                    path: '/home/:id',
                    element: <Detail ></Detail>,
                    // loader: () => fetch('/donate.json')
                },
                {
                    path: '/statistics',
                    element: <Statistics></Statistics>,
                    loader: () => fetch('/donate.json')
                },

            ]
        }

    ])
    return (
        <>
            <RouterProvider router={Router} ></RouterProvider>
        </>
    )
}

// export default Router;
export default App;