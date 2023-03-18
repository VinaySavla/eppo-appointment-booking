import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./components/landing";
import Login from "./components/login";
import SignUp from "./components/SignUp";
import Checkout from "./Components_Payment/Checkout";
import ProfProfiles from "./components/components_ProfProfiles/ProfProfiles";
import ProfDetails from "./components/components_ProfDetails/ProfDetails";
import ReviewForm from "./components/component_review/ReviewForm";
import ShowReview from "./components/component_ShowReview/ShowReview";
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
    },
    {
        path :"/ProfProfiles",
        element: <ProfProfiles/>,
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
    }
]);

function App() {


    return (
        <RouterProvider router={router} />
    );
}



export default App;
