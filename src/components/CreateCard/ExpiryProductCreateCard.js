import React, { useContext, useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { EditContext, PassProduct } from "../../layout/Main";
import { BASE_URL } from "../../utils/config";
import { API_URL } from "../../utils/config";
import axios from "axios";

const ExpiryProductCreateCard = () => {
  // contaxt
  const editState = useContext(EditContext);
  //   const passProductState = useContext(PassProduct);

  // 要加進 expiry 資料表的 state
  const [addExpiryProduct, setAddExpiryProduct] = useState({
    // product_id: "",
    id: "",
    count: 0,
    discount: 0,
    expiry_date: "",
  });

  function handleChange(e) {
    setAddExpiryProduct({
      ...addExpiryProduct,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      addExpiryProduct.expiry_date !== "" &&
      addExpiryProduct.count !== 0 &&
      addExpiryProduct.discount !== 0
    )
      try {
        await axios.post(`${API_URL}/expiry`, addExpiryProduct);

        editState.setIsOpen({});
        console.log("新增即期商品成功");

        // passProductState.setProducts([
        //   ...passProductState.products,
        //   addExpiryProduct,
        // ]);
      } catch (e) {
        console.log("新增即期商品失敗");
      }
  }

  // 抓這個 id 在資料庫裡的資料
  useEffect(() => {
    setAddExpiryProduct(editState.sweetenData);
  }, [editState.sweetenData]);
  //   console.log(editState.sweetenData);

  //   console.log(addExpiryProduct);

  return editState.isOpen.createExpiry ? (
    <>
      {/* occupy the space of a screen page */}
      <div className="fixed w-screen h-screen z-10 mx-auto">
        {/* background */}
        <div className="w-full h-full bg-test opacity-70"></div>

        {/* card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col min-w-0 mx-auto break-words w-1/3 shadow-lg rounded-lg bg-zinc-100 border-0">
          <div className="rounded-t bg-white px-6 py-4">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                新增即期商品
              </h6>
              {/* <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="submit"
              >
                完成
              </button> */}
              <div className="h-7 flex">
                <AiOutlineCloseCircle
                  className="h-7 w-7 cursor-pointer m-auto hover:text-warning"
                  onClick={(e) => {
                    editState.setIsOpen(false);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form className="flex">
              <div
                className="pt-8 flex-1 h-72 block uppercase text-blueGray-600 text-xs font-bold mb-2 w-72"
                htmlFor="productImg"
              >
                商品圖片
                <div className="relative border-test border-2 border-dashed w-full h-full rounded-md mt-2">
                  <div className="w-full h-full text-center relative">
                    <img
                      src={
                        BASE_URL +
                        `/public/product/${editState.sweetenData.id}.jpg`
                      }
                      className="w-auto h-full m-auto object-cover"
                      alt=""
                      name="photo"
                      defaultValue={`${editState.sweetenData.photo}`}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}

              <div className="pt-8 flex-1 h-80 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap">
                    {/* name */}
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="productName"
                        >
                          名稱
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="productName"
                          defaultValue={`${editState.sweetenData.name}`}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 disabled:bg-slate-100 disabled:text-slate-600 disabled:border-slate-400"
                          disabled
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* count */}
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="productCount"
                        >
                          數量
                        </label>
                        <input
                          type="number"
                          name="count"
                          id="productCount"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          min={0}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* 折扣 */}
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="productDiscount"
                        >
                          折扣
                        </label>
                        <input
                          type="number"
                          name="discount"
                          id="productDiscount"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          min={0}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* expiry_date */}
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          到期時間
                        </label>
                        <input
                          type="datetime-local"
                          name="expiry_date"
                          id="productPrice"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          min={0}
                          onBlur={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* button */}
                <div className="text-center flex flex-wrap justify-end">
                  <button
                    className="bg-secondary hover:bg-warning text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    完成
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default ExpiryProductCreateCard;
