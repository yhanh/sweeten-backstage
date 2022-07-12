import React, { Fragment, useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineUp } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import LessonTableRow from "../components/TableRow/LessonTableRow";
import axios from "axios";
import { API_URL } from "../utils/config";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getLessons = async () => {
      let response = await axios.get(`${API_URL}/user`);
      setUsers(response.data);
      //   console.log(response.data);
    };
    getLessons();
  }, []);

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
            <div className="sm:flex items-center justify-end">
              {/* <div className="flex items-center">
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
              </div> */}
              <div className="w-7 h-7">
                <AiOutlinePlusCircle
                  className="w-7 h-7 cursor-pointer hover:text-green-600"
                  // onClick={(e) => {
                  //   editState.setIsOpen({ create: true });
                  // }}
                />
              </div>
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
                            className="checkbox absolute cursor-pointer w-full h-full"
                          />
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
                  {users.map((user) => {
                    return (
                      <Fragment key={user.id}>
                        <LessonTableRow lesson={user} />
                      </Fragment>
                    );
                  })}
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
