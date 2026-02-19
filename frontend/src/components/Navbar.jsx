import React, { useState } from "react";
import logo from "../assets/E_store.png";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/userSlice";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  
  const accessToken = localStorage.getItem("accessToken");

  const logoutHandler = async () => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (res.data.success) {
        dispatch(setUser(null));
        toast.success(res.data.message);
      }
      toast.success("Successfully logged out");
    } catch (error) {
      toast.error("Error in logging out");
      console.log(`Error in logging out: ${error}`);
    }
  };
  return (
    <header className="bg-red-50 fixed w-full z-20 border-b border-lime-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3">
        <div className="">
          <img src={logo} alt="" className="w-[100px]" />
        </div>
        <nav className="flex gap-10 justify-between items-center">
          <ul className="flex gap-7 items-center text-xl font-semibold text-red-700">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/products"}>
              <li>Products</li>
            </Link>
            {/* <Link to={'/'}><li>Home</li></Link> */}
            {user && (
              <Link to={"/profile"}>
                <li>Hello, {user.firstName}</li>
              </Link>
            )}
            <Link to={"/cart"} className="relative ">
              <ShoppingCart />
              <span className="bg-red-500 rounded-full absolute text-white -top-3 -right-5 px-2">
                0
              </span>
            </Link>
            {user ? (
              <Button
                onClick={logoutHandler}
                className="bg-red-600 text-white cursor-pointer"
              >
                Logout
              </Button>
            ) : (
              <Button className="bg-gradient-to-tl from-yellow-600 to-red-600 text-white cursor-pointer">
                <Link to={"/login"}>Login</Link>
              </Button>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
