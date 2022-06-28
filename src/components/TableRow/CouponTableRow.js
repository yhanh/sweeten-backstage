import React, { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineUp } from "react-icons/ai";

const CouponTableRow = (props) => {
  const { coupon } = props;
//   console.log(coupon);

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
              {coupon.name}
            </p>
          </div>
        </td>
        {/* code */}
        <td className="pl-10">
          <div className="flex items-center">
            <p className="text-sm leading-none text-gray-600 ml-2">
              {coupon.code}
            </p>
          </div>
        </td>
        {/* discount */}
        <td className="pl-5">
          <div className="flex items-center">
            <p className="text-sm leading-none text-gray-600 ml-2">
              {coupon.discount}
            </p>
          </div>
        </td>
        {/* start_date */}
        <td className="pl-5">
          <div className="flex items-center">
            <p className="text-sm leading-none text-gray-600 ml-2">
              {coupon.start_date}
            </p>
          </div>
        </td>
        {/* end_date */}
        <td className="pl-5">
          <div className="flex items-center">
            <p className="text-sm leading-none text-gray-600 ml-2">
              {coupon.end_date}
            </p>
          </div>
        </td>
        {/* limited */}
        <td className="pl-5">
          <div className="flex items-center">
            <p className="text-sm leading-none text-gray-600 ml-2">
              {coupon.limited}
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
      </tr>
      <tr className="h-3" />
    </>
  );
};

export default CouponTableRow;
