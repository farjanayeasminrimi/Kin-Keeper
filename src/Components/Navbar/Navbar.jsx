import React from "react";
import { Link } from "react-router";
import "../../App.css";
import { ChartArea, Clock, Home } from "lucide-react";

const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar px-8 py-3 flex flex-col md:flex-row gap-3  justify-between ">
        <div className="">
          <h1 className="font-bold text-4xl primary-color">
            <span className="font-extrabold text-black">Keen</span>Keeper
          </h1>
        </div>
        <div className="">
          <ul className=" flex gap-7">
            <Link
              className="text-[1.1rem] font-medium secondary-color flex items-center gap-1"
              to="/"
            >
              <Home size={18}></Home> Home
            </Link>
            <Link
              className="text-[1.1rem] font-medium secondary-color flex items-center gap-1"
              to="/timeline"
            >
              <Clock size={18}></Clock> Timeline
            </Link>
            <Link
              className="text-[1.1rem] font-medium secondary-color flex items-center gap-1"
              to="/stats"
            >
              <ChartArea size={18}></ChartArea> Stats
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
