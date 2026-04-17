import { MessageCircleMore, Phone, Video } from "lucide-react";
import React, { createContext } from "react";
import { useState } from "react";
export const HistoryContext = createContext();
const HistoryProvider = ({ children }) => {
  const [call, setCall] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const callHandle = (username) => {
    const allCallHistory = {
      username,
      icon: <Phone></Phone>,
      type: "Call",
    };
    setCall([...call, allCallHistory]);
    setFilterData([...call, allCallHistory]);
  };
  const chatHandle = (username) => {
    const allChatHistory = {
      username,
      icon: <MessageCircleMore></MessageCircleMore>,
      type: "Chat",
    };
    setCall([...call, allChatHistory]);
    setFilterData([...call, allChatHistory]);
  };
  const videoHandle = (username) => {
    const allVideoHistory = {
      username,
      icon: <Video></Video>,
      type: "Video",
    };
    setCall([...call, allVideoHistory]);
    setFilterData([...call, allVideoHistory]);
  };
  const manageFilter = (type) => {
    if (type === "All") {
      setFilterData(call);
    } else {
      const filterObj = call.filter((item) => item.type === type);
      setFilterData(filterObj);
    }
  };

  const data = {
    call,
    callHandle,
    chatHandle,
    videoHandle,
    manageFilter,
    filterData,
  };
  return <HistoryContext.Provider value={data}>{children}</HistoryContext.Provider>;
};

export default HistoryProvider;
