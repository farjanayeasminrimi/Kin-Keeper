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
  const { filterData, manageFilter } = useContext(HistoryContext);
  // const { username, date, icon, type } = call;
  return (
    <div className="my-9 px-4 md:px-0 container mx-auto bg-[#F8FAFC]">
      {/* Time line intro */}
      <div className="space-y-4">
        <h1 className="text-[#1F2937] font-bold text-3xl">Timeline </h1>

        <div className="dropdown dropdown-bottom mb-4">
          <div tabIndex={0} role="button" className="btn m-1 secondary-color font-semibold ">
            Filter timeline <ChevronDown></ChevronDown>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => manageFilter("All")}>
              <a>All</a>
            </li>
            <li onClick={() => manageFilter("Call")}>
              <a>Short by Call</a>
            </li>
            <li onClick={() => manageFilter("Chat")}>
              <a>Short by Text</a>
            </li>
            <li onClick={() => manageFilter("Video")}>
              <a>Short by Video</a>
            </li>
          </ul>
        </div>
      </div>

      {/* History */}
      <div className="space-y-4">
        {/* history card  */}
        {filterData.map((item, index) => (
          <div key={index} className="flex gap-4 items-center p-5 shadow-lg rounded-2xl bg-white">
            <div>{item.icon}</div>
            <div>
              <h1 className="primary-color font-bold text-xl">
                {item.type}{" "}
                <span className="secondary-color font-normal">with {item.username}</span>
              </h1>
              <span className="font-bold secondary-color text-[.9rem]">{formatDateTime()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
