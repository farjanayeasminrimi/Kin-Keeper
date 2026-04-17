import { Archive, BellRing, Trash2 } from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import "../../../App.css";
import call from "../../../assets/call.png";
import msg from "../../../assets/text.png";
import video from "../../../assets/video.png";
import { useContext } from "react";
import { HistoryContext } from "../../../Context/HistoryProvider";

const CardDetails = () => {
  const { callHandle, chatHandle, videoHandle } = useContext(HistoryContext);
  const cardData = useLoaderData();
  const { id } = useParams();
  const details = cardData.find((card) => card.id == id);
  const {
    name,
    tags,
    status,
    bio,
    days_since_contact: contact,
    goal,
    next_due_date,
    picture,
  } = details;
  // console.log(name, tags, status, bio, contact, goal, next_due_date);

  return (
    <div className="bg-[#F8FAFC] my-5 py-6 container mx-auto px-4  grid grid-cols-1 lg:grid-cols-4 gap-4">
      {/* Side bar */}
      <div className="col-span-1">
        {/* person details */}

        <div className="space-y-2 flex flex-col items-center p-5 shadow-lg rounded-2xl bg-white justify-center text-center ">
          <div className=" w-[60px] h-[60px]">
            <img className="rounded-full" src={picture} alt="human picture" />
          </div>
          <h2 className="text-[#1F2937] text-2xl font-bold">{name}</h2>
          <span
            className={`text-white font-semibold px-3  py-1 rounded-3xl capitalize  text-[.8rem] ${status === "overdue" ? "bg-red-400" : status === "almost due" ? "bg-yellow-500" : "bg-green-700"}`}
          >
            {status}
          </span>
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
          <h3 className="text-[1.1rem] font-medium secondary-color italic ">"{bio}"</h3>
          <p className="text-[1rem] secondary-color  ">Preferred: email</p>
        </div>
        {/* snooze area */}
        <div className="mt-5 space-y-3">
          <div className="flex gap-3 items-center justify-center p-5 shadow-lg rounded-2xl bg-white  text-center ">
            <BellRing></BellRing>
            <h2 className="font-semibold text-xl text-[#1F2937]">Snooze 2 weeks</h2>
          </div>
          <div className="flex gap-3 items-center justify-center p-5 shadow-lg rounded-2xl bg-white  text-center ">
            <Archive></Archive>
            <h2 className="font-semibold text-xl text-[#1F2937]">Archive</h2>
          </div>
          <div className="flex gap-3 items-center justify-center p-5 shadow-lg rounded-2xl bg-white  text-center ">
            <Trash2 color="red"></Trash2>
            <h2 className="font-semibold text-xl text-red-500">Delete</h2>
          </div>
        </div>
      </div>

      {/* right bar details */}
      <div className="col-span-1 md:col-span-3">
        {/* Intro Stats */}
        <div className="my-9 px-4 md:px-0 grid grid-cols-2 md:grid-cols-3 gap-4 container mx-auto">
          <div className="text-center bg-white shadow-lg rounded-lg p-8">
            <h2 className="primary-color font-bold text-3xl">{contact}</h2>
            <span className="secondary-color font-medium mt-1">Days Since Contact</span>
          </div>
          <div className="text-center bg-white shadow-lg rounded-lg p-8">
            <h2 className="primary-color font-bold text-3xl">{goal}</h2>
            <span className="secondary-color font-medium mt-1">Goal (Days)</span>
          </div>
          <div className="text-center bg-white shadow-lg rounded-lg p-8">
            <h2 className="primary-color font-bold text-3xl">{next_due_date}</h2>
            <span className="secondary-color font-medium mt-1">Next Due</span>
          </div>
        </div>

        {/* relationship goals */}
        <div className="bg-white shadow-lg rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-center ">
            <h2 className="text-xl font-semibold primary-color">Relationship Goal</h2>
            <button className="btn text-[#1F2937] font-bold">Edit</button>
          </div>
          <h3 className="secondary-color font-medium">
            Connect every{" "}
            <span className="text-[1.2rem] font-bold text-[#1F2937]">{goal} days</span>
          </h3>
        </div>

        {/* check in */}
        <div className="mt-9 py-6  shadow-sm rounded-lg p-4 space-y-3">
          <h2 className="text-2xl font-semibold primary-color mb-3">Quick Check-In</h2>

          <div className=" px-4 md:px-0 grid grid-cols-2 md:grid-cols-3 gap-4 container mx-auto">
            {/* call */}
            <div
              onClick={() => callHandle(name)}
              className="text-center bg-white shadow-lg rounded-lg p-8"
            >
              <div className="flex justify-center mb-3">
                <img src={call} alt="icon" />
              </div>
              <span className="secondary-color font-medium mt-1">Call</span>
            </div>
            {/* chat */}
            <div
              onClick={() => chatHandle(name)}
              className="text-center bg-white shadow-lg rounded-lg p-8"
            >
              <div className="flex justify-center mb-3">
                <img src={msg} alt="icon" />
              </div>
              <span className="secondary-color font-medium mt-1">Text</span>
            </div>
            {/* Video */}
            <div
              onClick={() => videoHandle(name)}
              className="text-center bg-white shadow-lg rounded-lg p-8"
            >
              <div className="flex justify-center mb-3">
                <img src={video} alt="icon" />
              </div>
              <span className="secondary-color font-medium mt-1">Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
