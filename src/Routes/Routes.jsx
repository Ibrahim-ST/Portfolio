import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import AllWorks from '../Layout/AllWorks';
import Main from "../Layout/Main"; 
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>, 
        children: [
            {
                path :"/",
                element: <Home></Home>
            }             
        ]
    },
    {
        path: "/allWorks",
        element: <AllWorks></AllWorks>
    }
])

export default router;