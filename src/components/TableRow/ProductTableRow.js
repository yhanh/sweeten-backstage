import React, { useContext, useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineUp } from "react-icons/ai";
import { IoIosTimer } from "react-icons/io";
import { EditContext, PassProduct } from "../../layout/Main";

const ProductTableRow = (props) => {
  const { product, page } = props;
  // console.log(product);

  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  const [timer, setTimer] = useState([0, 0, 0, 0]);
  const [timeOut, setTimeout] = useState(false);

  // context
  const editState = useContext(EditContext);
  // console.log(editState);
  const passProductState = useContext(PassProduct);
  const { productSwitch, setProductSwitch } = passProductState; // 上架 / 即期 / 下架
  // console.log(editState);

  // 剩餘時間轉換
  let time;
  // let strtime = "2022-07-06 14:12:00";
  let strtime = `${product.expiry_date}`;
  // product.expiry_date
  let date = new Date(strtime);
  date = new Date(strtime.replace(/-/g, "/"));
  time = date.getTime();

  let now = () => String(+new Date());

  let timeDifference = () => time - now();

  let stampToDate = new Date(timeDifference());
  // let Y = stampToDate.getFullYear() + "-";
  // let M =
  //   (stampToDate.getMonth() + 1 < 10
  //     ? "0" + (stampToDate.getMonth() + 1)
  //     : stampToDate.getMonth() + 1) + "-";
  let D = stampToDate.getDate() - 1 + "天 ";
  let H = stampToDate.getHours() - 8 + "時 ";
  let M = stampToDate.getMinutes() + "分 ";
  let S = stampToDate.getSeconds() + "秒";
  // console.log(D + h + m + s);
  // 如果 D H M S 都是 0 => 就要跳到期

  useEffect(() => {
    if (timeDifference() <= 1) {
      // clearInterval(contDown);
      setTimeout(true);
      return;
    }
    let contDown = setInterval(() => {
      if (timeDifference() <= 1) {
        // clearInterval(contDown);
        setTimeout(true);
        return;
      }
      setTimer([D, H, M, S]);
    }, 1000);

    return () => clearInterval(contDown);
  }, []);

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
        {/* price or count */}
        <td className="pl-10">
          <div className="flex items-center">
            <p className="text-sm leading-none text-gray-600 ml-2 text-right">
              {productSwitch == 1 ? product.count : product.price}
            </p>
          </div>
        </td>
        {/* express or discount */}
        <td className="pl-5">
          <div className="flex items-center">
            <p className="text-sm leading-none text-gray-600 ml-2">
              {productSwitch == 1 ? product.discount : product.express_id}
            </p>
          </div>
        </td>
        {/* created_at or expiry_date */}
        <td className="pl-5">
          <div className="flex items-center">
            <p className="text-sm leading-none text-gray-600 ml-2">
              {productSwitch == 1 ? product.expiry_date : product.created_at}
            </p>
          </div>
        </td>
        {/* valid or 剩餘時間 */}
        <td className="pl-5">
          <div className="flex items-center">
            <p
              className={`${
                timeOut && "text-warning"
              } text-sm leading-none text-gray-600 ml-2`}
            >
              {productSwitch == 1
                ? timeOut
                  ? "已到期"
                  : D + H + M + S
                : product.valid}
            </p>
          </div>
        </td>
        {/* 加入即期品 */}
        {productSwitch !== 0 ? (
          <></>
        ) : (
          <td>
            <div className="relative pl-5 pr-1 pt-2">
              <IoIosTimer
                className="text-xl text-gray-600 cursor-pointer hover:text-orange-300"
                onClick={(e) => {
                  editState.setIsOpen({ createExpiry: true });
                  editState.setSweetenData(product);
                }}
              />
            </div>
          </td>
        )}

        {/* 編輯 */}
        {productSwitch == 1 ? (
          <></>
        ) : (
          <td>
            <div className="relative pl-5 pr-1 pt-2">
              <AiOutlineEdit
                className={`${
                  timeOut && "opacity-30 cursor-default hover:text-gray-600"
                } text-xl text-gray-600 cursor-pointer hover:text-orange-400`}
                onClick={(e) => {
                  timeOut
                    ? editState.setIsOpen(false)
                    : editState.setIsOpen({ edit: true });
                  editState.setSweetenData(product);
                }}
              />
            </div>
          </td>
        )}

        {/* 刪除 */}
        <td>
          <div className="relative px-2 pt-2">
            <AiOutlineDelete
              className="text-xl text-gray-600 cursor-pointer hover:text-red-600"
              onClick={(e) => {
                productSwitch == 1
                  ? editState.setIsOpen({ deleteExpiryProduct: true })
                  : editState.setIsOpen({ deleteProduct: true });

                editState.setSweetenData(product);
              }}
            />
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
        <tr className="h-16 border border-gray-300 rounded transition-all w-full">
          <td colSpan={10}>
            <div className="flex items-center pl-5">
              <p>產品說明</p>
            </div>
            <div className="flex items-center pl-5 my-3">
              <p className="whitespace-pre-wrap pr-5">{product.description}</p>
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
