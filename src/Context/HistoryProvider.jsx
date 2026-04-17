import { MessageCircleMore, Phone } from "lucide-react";
import React, { createContext } from "react";
import { useState } from "react";
export const HistoryContext = createContext();
const HistoryProvider = ({ children }) => {
  const [call, setCall] = useState([]);
  const callHandle = (username) => {
    const allCallHistory = {
      username,
      icon: <Phone></Phone>,
      type: "Call",
    };
    setCall([...call, allCallHistory]);
  };
  const chatHandle = (username) => {
    const allChatHistory = {
      username,
      icon: <MessageCircleMore></MessageCircleMore>,
      type: "Chat",
    };
    setCall([...call, allChatHistory]);
  };

  const data = {
    call,
    callHandle,
    chatHandle,
  };
  return <HistoryContext.Provider value={data}>{children}</HistoryContext.Provider>;
};

export default HistoryProvider;
