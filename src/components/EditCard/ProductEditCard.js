import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { EditContext, PassProduct } from "../../layout/Main";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { API_URL } from "../../utils/config";
import { BASE_URL } from "../../utils/config";

// TODO Click outside to close

const ProductEditCard = () => {
  const [editProduct, setEditProduct] = useState({
    // info
    name: "",
    price: 0,
    description: "",
    express_id: 1,
    valid: 1,
    created_at: new Date(),
    // img
    photo: "",
  });

  const editState = useContext(EditContext);
  const passProductState = useContext(PassProduct);

  function handleChange(e) {
    setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
  }

  // 抓資料庫裡的資料
  useEffect(() => {
    setEditProduct(editState.sweetenData);
  }, [editState.sweetenData]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      editProduct.name !== "" &&
      editProduct.price !== 0 &&
      editProduct.description !== ""
    )
      try {
        await axios.patch(
          `${API_URL}/product/${editState.sweetenData.id}`,
          editProduct
        );

        editState.setIsOpen({});
        console.log("編輯商品成功");
        // 頁面馬上更新
        passProductState.setProducts([
          ...passProductState.products,
          editProduct,
        ]);
        window.location.reload();
      } catch (e) {
        console.log("編輯商品失敗");
      }
  }

  return editState.isOpen.edit ? (
    <>
      {/* occupy the space of a screen page */}
      <div className="fixed w-screen h-screen z-10 mx-auto">
        {/* background */}
        <div className="w-full h-full bg-test opacity-70"></div>

        {/* card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col min-w-0 mx-auto break-words w-2/5 shadow-lg rounded-lg bg-zinc-100 border-0">
          <div className="rounded-t bg-white px-6 py-4">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                編輯商品 {editState.sweetenData.id}
                {/* :{" "}
                {editState.sweetenData.name} */}
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
                  {/* name */}
                  <div className="w-full lg:w-8/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="editName"
                      >
                        名稱
                      </label>
                      <input
                        type="text"
                        id="editName"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={`${editState.sweetenData.name}`}
                        name="name"
                        //   value={updateProduct.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* valid */}
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="editValid"
                      >
                        啟用
                      </label>
                      <input
                        min="0"
                        max="1"
                        type="number"
                        name="valid"
                        id="editValid"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={`${editState.sweetenData.valid}`}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* price */}
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="editPrice"
                      >
                        價格
                      </label>
                      <input
                        type="number"
                        id="editPrice"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={`${editState.sweetenData.price}`}
                        name="price"
                        //   value={updateProduct.price}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* express */}
                  <div className="w-full lg:w-6/12 px-4">
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
                  {/* date */}
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        建立時間
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={`${editState.sweetenData.created_at}`}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* description */}
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="editDescription"
                      >
                        說明
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={`${editState.sweetenData.description}`}
                        rows="4"
                        name="description"
                        id="editDescription"
                        //   value={editState.sweetenData.description}
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

export default ProductEditCard;
