import React, { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineUp } from "react-icons/ai";

const LessonTableRow = (props) => {
  const { lesson } = props;
  //   console.log(lesson);

  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  return (
    <>
      {/* row */}
      <tr className="h-16 border border-gray-300 rounded">
        {/* checkbox */}
        <td>
          <div className="ml-5">
            <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
              <input
                type="checkbox"
                className="checkbox absolute cursor-pointer w-full h-full"
              />
            </div>
          </div>
        </td>
        {/* name */}
        <td>
          <div className="flex items-center pl-5">
            <p className="text-base font-medium leading-none text-gray-700 mr-2">
              {lesson.name}
            </p>
          </div>
        </td>
        {/* price */}
        <td className="pl-10">
          <div className="flex items-center">
            <p className="text-sm leading-none text-gray-600 ml-2">
              {lesson.price}
            </p>
          </div>
        </td>
        {/* start_date */}
        <td className="pl-5">
          <div className="flex items-center">
            <p className="text-sm leading-none text-gray-600 ml-2">
              {lesson.start_date}
            </p>
          </div>
        </td>
        {/* duration */}
        <td className="pl-5">
          <div className="flex items-center">
            <p className="text-sm leading-none text-gray-600 ml-2">
              {lesson.duration}
            </p>
          </div>
        </td>
        {/* 編輯 */}
        <td>
          <div className="relative pl-5 pr-1 pt-2">
            <AiOutlineEdit className="text-xl text-gray-600 cursor-pointer" />
          </div>
        </td>
        {/* 刪除 */}
        <td>
          <div className="relative px-2 pt-2">
            <AiOutlineDelete className="text-xl text-gray-600 cursor-pointer" />
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
            <p>課程說明</p>
          </div>
          <div className="flex items-center pl-5 my-3">
            <p>{lesson.description}</p>
          </div>
        </tr>
      ) : (
        <tr className="hidden"></tr>
      )}
      <tr className="h-3" />
    </>
  );
};

export default LessonTableRow;
