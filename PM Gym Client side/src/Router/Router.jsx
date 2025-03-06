import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Auth/SignUp";
import SignIn from "../Pages/Auth/SignIn";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/sign-Up" element={<SignUp/>}></Route>
                    <Route path="/sign-In" element={<SignIn/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;