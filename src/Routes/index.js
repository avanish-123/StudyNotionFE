import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import { Navbar } from "../Components/Navbar";
import { ForgotPassword } from "../Pages/ForgotPassword";

export default function Router() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 font-inter">
      <div className="pb-20">
        <Navbar />
      </div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="forgot-password" element={<ForgotPassword/>}></Route>
      </Routes>
    </div>
  );
}
