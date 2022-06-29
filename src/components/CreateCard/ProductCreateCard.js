import axios from "axios";
import React, { useContext, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { EditContext } from "../../layout/Main";
import { PassProduct } from "../../layout/Main";
import { API_URL } from "../../utils/config";

const ProductCreateCard = () => {
  const editState = useContext(EditContext);
  const passProductState = useContext(PassProduct);
  // console.log(passProductState);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    description: "",
    express_id: 1,
  });

  function handleChange(e) {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  }

  // 新資料寫入資料庫
  async function handelSubmit(e) {
    e.preventDefault();
    // TODO 加強防呆
    if (
      newProduct.name !== "" &&
      newProduct.price !== 0 &&
      newProduct.description !== ""
    )
      try {
        await axios.post(`${API_URL}/product`, newProduct);
        editState.setIsOpen({});
        console.log("新增商品成功");
        // 頁面馬上更新
        passProductState.setProducts([
          ...passProductState.products,
          newProduct,
        ]);
      } catch (e) {
        console.log("新增商品失敗");
      }
  }

  return editState.isOpen.create ? (
    <>
      {/* occupy the space of a screen page */}
      <div className="fixed w-screen h-screen z-10 mx-auto">
        {/* background */}
        <div className="w-full h-full bg-test opacity-70"></div>

        {/* card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col min-w-0 mx-auto break-words w-2/5 shadow-lg rounded-lg bg-zinc-100 border-0">
          <div className="rounded-t bg-white px-6 py-4">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">新增商品</h6>
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
            <form
              className="flex"
              //   onSubmit={handleSubmit}
            >
              <div className="pt-8 flex-1">
                <img
                  src={process.env.PUBLIC_URL + "/images/lemon.jpg"}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}

              <div className="pt-8 flex-1">
                {/* <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                商品資訊
              </h6> */}
                <div className="flex flex-wrap">
                  {/* id */}
                  {/* <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        id
                      </label>
                      <input
                        type="number"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        // placeholder="商品 id"
                      />
                    </div>
                  </div> */}
                  {/* name */}
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        名稱
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* price */}
                  <div className="w-full lg:w-5/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        價格
                      </label>
                      <input
                        type="number"
                        name="price"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        min={0}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* express */}
                  <div className="w-full lg:w-7/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        配送方式
                      </label>
                      <select
                        name="express"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-center"
                        onChange={handleChange}
                      >
                        {/* TODO 要補上 option 的 value */}
                        <option value={1}>低溫配送</option>
                        <option value={2}>常溫配送</option>
                        <option value={3}>店取</option>
                      </select>
                      {/* <input
                        type="number"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      /> */}
                    </div>
                  </div>
                  {/* date */}
                  {/* <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        建立時間
                      </label>
                      <input
                        type="date"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div> */}
                </div>

                {/* description */}
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        說明
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* button */}
                <div className="text-center flex flex-wrap justify-end">
                  <button
                    className="bg-secondary hover:bg-warning text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={handelSubmit}
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

export default ProductCreateCard;
