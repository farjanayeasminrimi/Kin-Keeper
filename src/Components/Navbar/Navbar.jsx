import React from "react";
import { NavLink } from "react-router";
import "../../App.css";
import { ChartArea, Clock, Home } from "lucide-react";

const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-sm sticky top-0 left-0 z-10">
      <div className="navbar px-8 py-3 flex flex-col md:flex-row gap-3  justify-between ">
        <div className="">
          <h1 className="font-bold text-4xl primary-color">
            <span className="font-extrabold text-black">Keen</span>Keeper
          </h1>
        </div>
        <div className="">
          <ul className=" flex gap-2 md:gap-7">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "primary-bg text-white flex items-center gap-1 px-5 py-2 rounded-lg "
                  : "text-[1.1rem] font-medium secondary-color flex items-center gap-1 px-5 py-2 rounded-lg hover:bg-green-100"
              }
              to="/"
            >
              <Home size={18}></Home> Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "primary-bg text-white flex items-center gap-1 px-5 py-2 rounded-lg "
                  : "text-[1.1rem] font-medium secondary-color flex items-center gap-1 px-5 py-2 rounded-lg hover:bg-green-100"
              }
              to="/timeline"
            >
              <Clock size={18}></Clock> Timeline
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "primary-bg text-white flex items-center gap-1 px-5 py-2 rounded-lg "
                  : "text-[1.1rem] font-medium secondary-color flex items-center gap-1 px-5 py-2 rounded-lg hover:bg-green-100"
              }
              to="/stats"
            >
              <ChartArea size={18}></ChartArea> Stats
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
