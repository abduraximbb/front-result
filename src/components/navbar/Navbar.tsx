import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="container flex gap-40 justify-between items-center h-[94px] max-xl:gap-28 sticky top-0 left-0 z-10 bg-white">
      <p className="font-inter-medium text-2xl text-primary max-[500px]:text-xl">
        Exclusive
      </p>
      <div className="font-poppins-medium text-base flex flex-row gap-12 text-primary max-xl:gap-9 max-[500px]:text-xs max-[500px]:gap-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/login"}>Sign up</NavLink>
      </div>
      <div className="flex items-center gap-4 max-lg:fixed max-lg:bottom-0 max-lg:left-0 max-lg:bg-primary max-lg:w-full max-lg:text-white max-lg:justify-evenly max-lg:py-2 max-lg:z-10">
        <span className="flex items-center bg-[#F5F5F5] max-w-[243px] h-[38px] px-5 py-[7px] rounded-md max-lg:bg-primary">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-[#F5F5F5]  rounded-[4px] max-lg:hidden"
          />
          <IoSearch className="h-6 w-6 pl-1  max-lg:text-white max-lg:pl-0" />
        </span>
        <NavLink to={"/wishlist"}>
          <FaRegHeart className="h-6 w-6" />
        </NavLink>
        <NavLink to={"/cart"}>
          <IoCartOutline className="h-6 w-6" />
        </NavLink>
        <NavLink to={"/login"}>
          <FiUser className="h-6 w-6" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
