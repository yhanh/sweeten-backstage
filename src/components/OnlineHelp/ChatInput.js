import React from "react";
import { io } from "socket.io-client";

// const socket = io("http://localhost:8001", {
//   query: {
//     "my-key": "my-value",
//   },
// });

const ChatInput = (props) => {
  const { message, setMessage, hendleChange, inputRef, socket } = props;
  console.log(socket);

  //   console.log(sendMessage);
  function handelSubmit(e) {
    if (message !== "") {
      e.preventDefault();
      //   let messageArr = [...sendMessage];
      //   messageArr.push(message);
      //   setSendMessage(messageArr);

      // console.log(message);
      socket.emit("support", {
        side: "official",
        content: message,
      });
      setMessage("");
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Message"
        className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
        name="message"
        required
        value={message}
        onChange={hendleChange}
        ref={inputRef}
      />

      <button type="submit" onClick={handelSubmit}>
        <svg
          className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      </button>
    </>
  );
};

export default ChatInput;
