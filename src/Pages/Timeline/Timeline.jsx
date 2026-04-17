import React from "react";
import "../../App.css";
import { ChevronDown } from "lucide-react";
import { useContext } from "react";
import { HistoryContext } from "../../Context/HistoryProvider";

const formatDateTime = () => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format();
};
const Timeline = () => {
  const { call } = useContext(HistoryContext);
  // const { username, date, icon, type } = call;
  console.log(call);
  return (
    <div className="my-9 px-4 md:px-0 container mx-auto bg-[#F8FAFC]">
      {/* Time line intro */}
      <div>
        <h1 className="text-[#1F2937] font-bold text-3xl">Timeline </h1>

        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1 secondary-color font-semibold ">
            Filter timeline <ChevronDown></ChevronDown>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Short by date</a>
            </li>
            <li>
              <a>Short by period</a>
            </li>
          </ul>
        </div>
      </div>

      {/* History */}
      <div>
        {/* history card  */}
        {call.map((item, index) => (
          <div key={index} className="flex gap-3 items-center">
            <div>{item.icon}</div>
            <div>
              <h1 className="primary-color font-bold text-2xl">
                {item.type}{" "}
                <span className="secondary-color font-normal">with {item.username}</span>
              </h1>
              <span className="font-bold secondary-color text-xl">{formatDateTime()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
