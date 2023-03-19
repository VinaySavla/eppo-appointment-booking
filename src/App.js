import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./components/landing";
import Login from "./components/login";
import SignUp from "./components/SignUp";
import Checkout from "./Components_Payment/Checkout";
import Otp from "./components/otpverification";
import Maingrid from "./components/maingrid";

import ProfDetails from "./components/components_ProfDetails/ProfDetails";
import ReviewForm from "./components/component_review/ReviewForm";
import ShowReview from "./components/component_ShowReview/ShowReview";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Dashboard from "./Components_Prof/Dashboard";

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
        path: "/otp",
        element: <Otp/>,


    },
    {
        path :"/Checkout",
        element: <Checkout/>,
    },
    {
        path :"/Professionals",
        element: <Maingrid/>,
    },
    {
        path :"/ProfDetails",
        element: <ProfDetails/>,
    },
    {
        path :"/ReviewForm",
        element: <ReviewForm/>,
    },
    {
        path :"/ShowReview",
        element: <ShowReview/>,
    },
    {
        path :"/Dashboard",
        element: <Dashboard/>,
    },
]);

function App() {


    return (
        <RouterProvider router={router} />
    );
}



export default App;
