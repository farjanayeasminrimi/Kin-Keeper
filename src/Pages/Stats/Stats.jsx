import React, { useContext } from "react";
import "../../App.css";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { HistoryContext } from "../../Context/HistoryProvider";

const Stats = () => {
  const { call } = useContext(HistoryContext);
  const callCount = call.filter((item) => item.type == "Call").length;
  const chatCount = call.filter((item) => item.type == "Chat").length;
  const videoCount = call.filter((item) => item.type == "Video").length;
  const data = [
    { name: "Call", value: callCount, fill: "#244D3F" },
    { name: "Text", value: chatCount, fill: "#7E35E1" },
    { name: "Video", value: videoCount, fill: "#37A163" },
  ];
  return (
    <div className="my-9 px-4 md:px-0 container mx-auto bg-[#F8FAFC]">
      {/*Stats intro */}

      <h1 className="text-[#1F2937] font-bold text-3xl ml-4 ">Friendship Analytics </h1>

      {/* History */}
      <div className="shadow-lg rounded-2xl bg-white my-4 p-7">
        <p className="primary-color text-[1.1rem] font-semibold">By Interaction Type</p>

        <div className="flex items-center justify-center pt-4 pb-10">
          <PieChart
            style={{ width: "100%", maxWidth: "300px", maxHeight: "40vh", aspectRatio: 1 }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="50%"
              fill="#8884d8"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Tooltip></Tooltip>
            <Legend iconType="circle" wrapperStyle={{ paddingTop: "30px" }}></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;
