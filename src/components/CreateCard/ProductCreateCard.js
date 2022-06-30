import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
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
        window.location.reload();
      } catch (e) {
        console.log("新增商品失敗");
      }
  }

  // useEffect(() => {
  //   async function fetchNewData() {
  //     await axios.get(`${API_URL}/product`);
  //   }
  //   fetchNewData();
  // }, [passProductState.products]);

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
            <form className="flex">
              <div className="pt-8 flex-1">
                <label
                  className="relative block uppercase text-blueGray-600 text-xs font-bold mb-2 w-full h-full"
                  htmlFor="productImg"
                >
                  上傳圖片
                  <div className="border-test border-2 border-dashed w-full h-full rounded-md mt-2">
                    <img
                      src={process.env.PUBLIC_URL + "/images/uploadImg.png"}
                      className=" top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/3 object-cover absolute opacity-40"
                      alt=""
                    />
                    <input
                      type="file"
                      id="productImg"
                      className="w-full h-full object-cover opacity-0"
                    />
                  </div>
                </label>
              </div>

              {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}

              <div className="pt-8 flex-1">
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
                        htmlFor="productPrice"
                      >
                        價格
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="productPrice"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        min={0}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* express */}
                  <div className="w-full lg:w-7/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        配送方式
                      </label>
                      <select
                        name="express_id"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-center"
                        onChange={handleChange}
                      >
                        {/* TODO 要補上 option 的 value */}
                        <option value={1}>低溫配送</option>
                        <option value={2}>常溫配送</option>
                        <option value={3}>店取</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* description */}
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="productDescription"
                      >
                        說明
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        id="productDescription"
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
