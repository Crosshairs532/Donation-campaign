import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import Router from './Router/Router'
import App from './Router/Router'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={Router}></RouterProvider> */}
    <App></App>
  </React.StrictMode>,
)
