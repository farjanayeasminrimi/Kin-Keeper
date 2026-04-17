import { MessageCircleMore, Phone, Video } from "lucide-react";
import React, { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
export const HistoryContext = createContext();
const HistoryProvider = ({ children }) => {
  const [call, setCall] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const callHandle = (username) => {
    const allCallHistory = {
      username,
      icon: <Phone size={25}></Phone>,
      type: "Call",
    };
    setCall([...call, allCallHistory]);
    setFilterData([...call, allCallHistory]);
    toast.success("Called Successfully!!", {
      position: "top-center",
    });
  };
  const chatHandle = (username) => {
    const allChatHistory = {
      username,
      icon: <MessageCircleMore size={25}></MessageCircleMore>,
      type: "Chat",
    };
    setCall([...call, allChatHistory]);
    setFilterData([...call, allChatHistory]);
    toast.success("Sent Text Successfully!!", {
      position: "top-center",
    });
  };
  const videoHandle = (username) => {
    const allVideoHistory = {
      username,
      icon: <Video size={25}></Video>,
      type: "Video",
    };
    setCall([...call, allVideoHistory]);
    setFilterData([...call, allVideoHistory]);
    toast.success("Video Call Successful!!", {
      position: "top-center",
    });
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
