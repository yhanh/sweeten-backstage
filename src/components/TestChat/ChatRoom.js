import React, { useEffect, useRef } from "react";
import ChatInput from "./ChatInput";

const ChatRoom = (props) => {
  const { message, setMessage, sendMessage, setSendMessage, socket } = props;

  //   const inputRef = useRef();

  const chatTable = document.getElementById("chatTable"); // 抓聊天室的元件(要讓新訊息固定在聊天室下面)

  function hendleChange(e) {
    setMessage(e.target.value);
  }

  // 要讓新訊息固定在聊天室下面
  useEffect(() => {
    chatTable && (chatTable.scrollTop = chatTable.scrollHeight);
  }, [sendMessage]);
  return (
    <>
      {/* 聊天室 */}
      <div className="hidden lg:col-span-2 lg:block">
        <div className="w-full">
          <div className="relative flex items-center p-3 border-b border-gray-300">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
              alt="username"
            />
            <span className="block ml-2 font-bold text-gray-600">Emma</span>
            <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
          </div>
          <div
            className="relative w-full p-6 overflow-y-auto h-[40rem]"
            id="chatTable"
          >
            <ul className="space-y-2">
              {/* <li className="flex justify-start">
                    <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                      <span className="block">Hi</span>
                    </div>
                  </li> */}
              {/* <span className="block">Hiiii</span> */}
              {sendMessage.map((messageStr, index) => {
                const strs = messageStr.split("|");
                console.log(strs);
                return (
                  <li className="flex justify-end overflow-auto" key={strs[1]}>
                    <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                      <p>{strs[1]}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </button>
            {/* 對話輸入框 */}
            <ChatInput
              hendleChange={hendleChange}
              //   inputRef={inputRef}
              message={message}
              socket={socket}
              setMessage={setMessage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
