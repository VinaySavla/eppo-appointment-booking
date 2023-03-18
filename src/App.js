import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./components/landing";
import Login from "./components/login";
import SIgnUp from "./components/SignUp";
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
        element: <SIgnUp/>,
    }
]);

function App() {


    return (
        <RouterProvider router={router} />
    );
}



export default App;
