import React, { useState, useEffect } from "react";
import ChatList from "./ChatList";
import ChatRoom from "./ChatRoom";
import { io } from "socket.io-client";

const socket = io("http://localhost:8001", {
  query: {
    "my-key": "my-value",
  },
});

const ChatBox = () => {
  const [message, setMessage] = useState(""); // change 的內容
  const [sendMessage, setSendMessage] = useState([]); // 送出的訊息

  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket", socket.connected); // true
    });
    socket.on("support", (res) => {
      // console.log(res);
      // sendMessage(sendMsg(res));
      const newMsg = res.side + "|" + res.content;
      setSendMessage([...sendMessage, newMsg]); // sendMessage = [...sendMessage, newMsg]

      // console.log(res.side + "|" + res.content);
    });
    return () => {
      socket.off("support");
      socket.off("connect");
    };
  }, [sendMessage]);

  return (
    <>
      <div className="container mx-auto">
        <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
          <ChatList />
          <ChatRoom
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            setSendMessage={setSendMessage}
            socket={socket}
          />
        </div>
      </div>
    </>
  );
};

export default ChatBox;
