import { ShieldAlert } from "lucide-react";
import React from "react";
import page404 from "../../assets/page404.jpg";
import { Link } from "react-router";
import "../../App.css";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-15 px-4 text-center">
      <div className="max-w-[600px]">
        <img className="rounded-full" src={page404} alt="Page 404" />
      </div>
      <div className="flex gap-2 mt-10">
        <h1 className="text-3xl font-extrabold text-blue-700">Page Not Found!!!</h1>
        <ShieldAlert size={40} color="orange"></ShieldAlert>
      </div>
      <p className="secondary-color text-xl font-medium my-3">
        We couldn't find the page you are looking for
      </p>
      <Link
        className="btn bg-blue-700 text-white hover:bg-transparent hover:border-blue-700 hover:text-blue-800"
        to="/"
      >
        Back to Home page
      </Link>
    </div>
  );
};

export default NotFound;
