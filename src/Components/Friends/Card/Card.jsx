import React from "react";
import { Link } from "react-router";
import "../../../App.css";

const Card = ({ friend }) => {
  const { id, name, days_since_contact: joining, tags, status, picture } = friend;
  return (
    <Link to={`/carts/${id}`}>
      <div className="space-y-2 flex flex-col items-center p-5 shadow-lg rounded-2xl bg-white justify-center text-center">
        <div className=" w-[60px] h-[60px]">
          <img className="rounded-full" src={picture} alt="human picture" />
        </div>
        <h2 className="text-[#1F2937] text-2xl font-bold">{name}</h2>
        <p className="secondary-color font-medium">{joining}d ago</p>
        <div className="flex gap-3 flex-wrap md:flex-nowrap justify-center text-center">
          {tags.map((tag, index) => (
            <span
              className="primary-color bg-green-100 font-semibold px-3  py-1 rounded-3xl uppercase text-[.7rem]"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          className={`text-white font-semibold px-3  py-1 rounded-3xl capitalize  text-[.8rem] ${status === "overdue" ? "bg-red-400" : status === "almost due" ? "bg-yellow-500" : "bg-green-700"}`}
        >
          {status}
        </span>
      </div>
    </Link>
  );
};

export default Card;
