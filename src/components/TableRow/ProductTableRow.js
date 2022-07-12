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
  const [timeOut, setTimeOut] = useState(false);

  // context
  const editState = useContext(EditContext);
  // console.log(editState);
  const passProductState = useContext(PassProduct);
  const { productSwitch, setProductSwitch } = passProductState; // 上架 / 即期 / 下架
  // console.log(editState);

  // // 剩餘時間轉換
  // let time;
  // // let strtime = "2022-07-06 14:12:00";
  // let strtime = `${product.expiry_date}`;
  // // product.expiry_date
  // let date = new Date(strtime);
  // date = new Date(strtime.replace(/-/g, "/"));
  // time = date.getTime();

  // let now = () => String(+new Date());

  // let timeDifference = () => time - now();

  // let stampToDate = new Date(timeDifference());
  // // let Y = stampToDate.getFullYear() + "-";
  // // let M =
  // //   (stampToDate.getMonth() + 1 < 10
  // //     ? "0" + (stampToDate.getMonth() + 1)
  // //     : stampToDate.getMonth() + 1) + "-";
  // let D = stampToDate.getDate() - 1 + "天 ";
  // let H = stampToDate.getHours() - 8 + "時 ";
  // let M = stampToDate.getMinutes() + "分 ";
  // let S = stampToDate.getSeconds() + "秒";
  // // console.log(D + h + m + s);
  // // 如果 D H M S 都是 0 => 就要跳到期

  //現在的時間->轉換成時間戳記
  const dateNow = new Date();
  const timeNow = dateNow.getTime();
  //資料庫即期時間->轉換成時間戳記
  const expiredate = new Date(product.expiry_date);
  const expireTime = expiredate.getTime();
  // console.log(expireTime);
  //相減剩餘的時間(時間戳記)
  let restTime = Math.floor((expireTime - timeNow) / 1000);

  restTime = restTime - 1;
  let leaveTime = restTime;
  const D = parseInt(leaveTime / (60 * 60 * 24));
  leaveTime = leaveTime - D * (60 * 60 * 24);
  const H = parseInt(leaveTime / (60 * 60));
  leaveTime = leaveTime - H * (60 * 60);
  const M = parseInt(leaveTime / 60);
  const S = parseInt(leaveTime % 60);

  // useEffect(() => {
  //   if (timeDifference() <= 1) {
  //     // clearInterval(contDown);
  //     setTimeout(true);
  //     return;
  //   }
  //   let contDown = setInterval(() => {
  //     if (timeDifference() <= 1) {
  //       // clearInterval(contDown);
  //       setTimeout(true);
  //       return;
  //     }
  //     setTimer([D, H, M, S]);
  //   }, 1000);

  //   return () => clearInterval(contDown);
  // }, []);

  useEffect(() => {
    let countDown = setInterval(() => {
      if (restTime <= 1) {
        clearInterval(countDown);
        setTimeOut(true);
        return;
      }
      setTimer([D, H, M, S]);
    }, 1000);
    return () => clearInterval(countDown);
  }, [timer]);

  return (
    <>
      {/* row */}
      {/* <tr key={props.key} className="h-16 border border-gray-300 rounded"> */}
      <tr className="h-16 border border-gray-300 rounded">
        {/* checkbox */}
        <td>
          <div className="ml-5">
            <div className="relative flex items-center justify-center flex-shrink-0 w-5 h-5 bg-gray-200 rounded-sm">
              <input
                type="checkbox"
                className="absolute w-full h-full cursor-pointer checkbox"
              />
            </div>
          </div>
        </td>
        {/* name */}
        <td>
          <div className="flex items-center pl-5">
            <p className="mr-2 text-base font-medium leading-none text-gray-700">
              {product.name}
            </p>
          </div>
        </td>
        {/* price or count */}
        <td className="pl-10">
          <div className="flex items-center">
            <p className="ml-2 text-sm leading-none text-right text-gray-600">
              {productSwitch == 1 ? product.count : product.price}
            </p>
          </div>
        </td>
        {/* express or discount */}
        <td className="pl-5">
          <div className="flex items-center">
            <p className="ml-2 text-sm leading-none text-gray-600">
              {productSwitch == 1 ? product.discount : product.express_id}
            </p>
          </div>
        </td>
        {/* created_at or expiry_date */}
        <td className="pl-5">
          <div className="flex items-center">
            <p className="ml-2 text-sm leading-none text-gray-600">
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
                  : D + "天 " + H + "時 " + M + "分 " + S + "秒"
                : product.valid}
            </p>
          </div>
        </td>
        {/* 加入即期品 */}
        {productSwitch !== 0 ? (
          <></>
        ) : (
          <td>
            <div className="relative pt-2 pl-5 pr-1">
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
            <div className="relative pt-2 pl-5 pr-1">
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
          <div className="relative pt-2 pl-5 pr-1" onClick={toggle}>
            {show === true ? (
              <>
                <AiOutlineUp className="text-xl text-gray-600 transition-all rotate-0 cursor-pointer" />
              </>
            ) : (
              <>
                <AiOutlineUp className="text-xl text-gray-600 transition-all rotate-180 cursor-pointer" />
                {/* <AiOutlineDown className="text-xl text-gray-600 cursor-pointer" /> */}
              </>
            )}
          </div>
        </td>
      </tr>
      {show === true ? (
        <tr className="w-full h-16 transition-all border border-gray-300 rounded">
          <td colSpan={10}>
            <div className="flex items-center pl-5">
              <p>產品說明</p>
            </div>
            <div className="flex items-center pl-5 my-3">
              <p className="pr-5 whitespace-pre-wrap">
                {product.description == ""
                  ? "目前暫無商品說明"
                  : product.description}
              </p>
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
