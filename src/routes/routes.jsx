import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import Settings from "../pages/Settings";
import Branding from "../pages/Branding";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/settings',
        element: <Settings />
    },
    {
        path: '/branding',
        element: <Branding />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />
    },

])

export default routes