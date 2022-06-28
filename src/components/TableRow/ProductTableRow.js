import React, { useContext, useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineUp } from "react-icons/ai";
import { EditContext } from "../../layout/Main";

const ProductTableRow = (props) => {
  const { product } = props;
  //   console.log(product);

  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  const editState = useContext(EditContext);
  // console.log(editState);

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
              {product.name}
            </p>
          </div>
        </td>
        {/* price */}
        <td className="pl-10">
          <div className="flex items-center">
            <p className="text-sm leading-none text-gray-600 ml-2">
              {product.price}
            </p>
          </div>
        </td>
        {/* express */}
        <td className="pl-5">
          <div className="flex items-center">
            <p className="text-sm leading-none text-gray-600 ml-2">
              {product.express_id}
            </p>
          </div>
        </td>
        {/* created_at */}
        <td className="pl-5">
          <div className="flex items-center">
            <p className="text-sm leading-none text-gray-600 ml-2">
              {product.created_at}
            </p>
          </div>
        </td>
        {/* 編輯 */}
        <td>
          <div className="relative pl-5 pr-1 pt-2">
            <AiOutlineEdit
              className="text-xl text-gray-600 cursor-pointer"
              onClick={(e) => {
                editState.setIsOpen(true);
                editState.setProductData(product);
              }}
            />
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
          <td colSpan={8}>
            <div className="flex items-center pl-5">
              <p>產品說明</p>
            </div>
            <div className="flex items-center pl-5 my-3">
              <p>{product.description}</p>
            </div>
          </td>
        </tr>
      ) : (
        <tr className="hidden"></tr>
      )}
      <tr className="h-3" />
    </>
  );
};

export default ProductTableRow;
