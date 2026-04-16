import React from "react";
import "../../App.css";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center primary-bg  p-10 pb-6 text-white">
        <h1 className="font-semibold text-5xl inline-block ">
          <span className="font-extrabold ">Keen</span>Keeper
        </h1>
        <p className="text-[1rem]">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships
          that matter most.
        </p>
        <nav>
          <h4 className="font-semibold text-[1.2rem] mb-3">Social Links</h4>
          <div className="grid grid-flow-col gap-4">
            <a>
              <img src={Instagram} alt="" />
            </a>
            <a>
              <img src={Facebook} alt="" />
            </a>
            <a>
              <img src={Twitter} alt="" />
            </a>
          </div>
        </nav>
        <div className="flex w-full flex-col">
          <div className="divider p-0 m-0  before:bg-gray-400 after:bg-gray-400 text-gray-600"></div>
          <div className="flex justify-between items-center w-full px-5">
            <aside className="mt-2">
              <p>
                Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd
              </p>
            </aside>
            <div className="flex justify-around items-center gap-5">
              <Link to="/policy">Privacy Policy</Link>
              <Link to="/service">Terms of Service</Link>
              <Link to="/cookies">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
