import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineUp } from "react-icons/ai";

const UserList = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  return (
    <>
      <div>
        <div className="sm:px-6 w-full">
          <div className="px-4 md:px-10 py-4 md:py-7">
            <div className="flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                使用者管理
              </p>
              <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                <p>Sort By:</p>
                <select className="focus:outline-none bg-transparent ml-1">
                  <option className="text-sm text-indigo-800">Latest</option>
                  <option className="text-sm text-indigo-800">Oldest</option>
                  <option className="text-sm text-indigo-800">Latest</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="sm:flex items-center justify-between">
              <div className="flex items-center">
                <a href="#/">
                  <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                    <p>All</p>
                  </div>
                </a>
                <a href="#/">
                  <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                    <p>Done</p>
                  </div>
                </a>
                <a href="#/">
                  <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                    <p>Pending</p>
                  </div>
                </a>
              </div>
              <button className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">
                  Add Task
                </p>
              </button>
            </div>
            <div className="mt-7 overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <thead>
                  <tr className="text-center">
                    <th>
                      <div className="ml-5">
                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                          <input
                            type="checkbox"
                            className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                          />
                          <div className="check-icon  bg-indigo-700 text-white rounded-sm">
                            <svg
                              className="icon icon-tabler icon-tabler-check"
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M5 12l5 5l10 -10" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </th>
                    {/* 名稱 */}
                    <th>
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-700 mr-2">
                          名稱
                        </p>
                      </div>
                    </th>
                    <th className="pl-10">
                      <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          價格
                        </p>
                      </div>
                    </th>
                    <th className="pl-5">
                      <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          貨運
                        </p>
                      </div>
                    </th>
                    <th className="pl-5">
                      <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          建立時間
                        </p>
                      </div>
                    </th>
                  </tr>
                  <tr className="h-3" />
                </thead>
                <tbody>
                  {/* row */}
                  <tr className="h-16 border border-gray-300 rounded">
                    {/* checkbox */}
                    <td>
                      <div className="ml-5">
                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                          <input
                            type="checkbox"
                            className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                          />
                          <div className="check-icon  bg-indigo-700 text-white rounded-sm">
                            <svg
                              className="icon icon-tabler icon-tabler-check"
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M5 12l5 5l10 -10" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* name */}
                    <td>
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-700 mr-2">
                          好吃的蛋糕
                        </p>
                      </div>
                    </td>
                    {/* price */}
                    <td className="pl-10">
                      <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          Urgent
                        </p>
                      </div>
                    </td>
                    {/* express */}
                    <td className="pl-5">
                      <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          04/07
                        </p>
                      </div>
                    </td>
                    {/* created_at */}
                    <td className="pl-5">
                      <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          23
                        </p>
                      </div>
                    </td>
                    {/* 編輯 */}
                    <td>
                      <div className="relative pl-5 pr-1 pt-2">
                        <AiOutlineEdit className="text-xl text-gray-600" />
                      </div>
                    </td>
                    {/* 刪除 */}
                    <td>
                      <div className="relative px-2 pt-2">
                        <AiOutlineDelete className="text-xl text-gray-600" />
                      </div>
                    </td>
                    {/* accordion */}
                    <td>
                      <div className="relative pl-5 pr-1 pt-2" onClick={toggle}>
                        {show === true ? (
                          <>
                            <AiOutlineUp className="text-xl text-gray-600 cursor-pointer rotate-0 transition-all" />
                          </>
                        ) : (
                          <>
                            <AiOutlineUp className="text-xl text-gray-600 cursor-pointer rotate-180 transition-all" />
                            {/* <AiOutlineDown className="text-xl text-gray-600 cursor-pointer" /> */}
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                  {show === true ? (
                    <tr className="h-16 border border-gray-300 rounded transition-all">
                      <td></td>
                      <div className="flex items-center pl-5">
                        <p>產品說明</p>
                      </div>
                      <div className="flex items-center pl-5 my-3">
                        <p>內容填這邊</p>
                      </div>
                      {/* <td>產品說明</td>
                          <td>內容填這邊</td> */}
                    </tr>
                  ) : (
                    <tr className="hidden"></tr>
                  )}
                  <tr className="h-3" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <style>
          {` .checkbox:checked + .check-icon {
                    display: flex;
                }`}
        </style>
      </div>
    </>
  );
};

export default UserList;
