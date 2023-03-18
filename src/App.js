import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./components/landing";
import Login from "./components/login";
import SignUp from "./components/SignUp";
import Checkout from "./Components_Payment/Checkout";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing/>,

    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/UserSignUp",
        element: <SignUp/>,

        
    },
    {
        path :"/Checkout",
        element: <Checkout/>,
    }
]);

function App() {


    return (
        <RouterProvider router={router} />
    );
}



export default App;
