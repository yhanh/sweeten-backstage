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
    // // img
    // photo: "",
  });

  const editState = useContext(EditContext);
  const passProductState = useContext(PassProduct);
  // console.log(editState.sweetenData);
  const { productSwitch, setProductSwitch, page, sortByPrice } =
    passProductState; // 上架 / 即期 / 下架 / 頁碼

  // 頁面重整 function
  let reloadAfterUpdate = async () => {
    let response = await axios.get(`${API_URL}/product`, {
      params: {
        page: page,
        priceOrder: sortByPrice,
      },
    });
    passProductState.setProducts(response.data.data);
    // setProductSwitch(productSwitch);
  };

  function handleChange(e) {
    setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
  }
  console.log(editProduct);

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      editProduct.name !== "" &&
<<<<<<< HEAD
      editProduct.price !== 0
=======
      editProduct.price !== 0 
>>>>>>> 23c26e184b0a268150510c494d24218f6ec3f596
      // editProduct.description !== ""
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

        // 立即刷新頁面
        reloadAfterUpdate();
        // window.location.reload();
      } catch (e) {
        console.log("編輯商品失敗");
      }
  }

  // 抓資料庫裡的資料
  useEffect(() => {
    setEditProduct(editState.sweetenData);
  }, [editState.sweetenData]);

  return editState.isOpen.edit ? (
    <>
      {/* occupy the space of a screen page */}
      <div className="fixed z-10 w-screen h-screen mx-auto">
        {/* background */}
        <div className="w-full h-full bg-test opacity-70"></div>

        {/* card */}
        <div className="absolute flex flex-col w-2/5 min-w-0 mx-auto break-words -translate-x-1/2 -translate-y-1/2 border-0 rounded-lg shadow-lg top-1/2 left-1/2 bg-zinc-100">
          <div className="px-6 py-4 bg-white rounded-t">
            <div className="flex justify-between text-center">
              <h6 className="text-xl font-bold text-blueGray-700">
                編輯商品 {editState.sweetenData.id}
                {/* :{" "}
                {editState.sweetenData.name} */}
              </h6>
              {/* <button
                className="px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-lightBlue-500 active:bg-lightBlue-600 hover:shadow-md focus:outline-none"
                type="submit"
              >
                完成
              </button> */}
              <div className="flex h-7">
                <AiOutlineCloseCircle
                  className="m-auto cursor-pointer h-7 w-7 hover:text-warning"
                  onClick={(e) => {
                    editState.setIsOpen(false);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
            <form className="flex">
              <div className="flex-1 pt-8">
                <label
                  className="block w-full mb-2 text-xs font-bold uppercase text-blueGray-600 h-96"
                  htmlFor="productImg"
                >
                  上傳圖片
                  <div className="relative w-full h-full mt-2 border-2 border-dashed rounded-md border-test">
                    <div className="relative w-full h-full text-center">
                      <img
                        src={
                          BASE_URL +
                          `/public/product/${editState.sweetenData.id}.jpg`
                        }
                        className="object-cover w-auto h-full m-auto"
                        alt=""
                        name="photo"
                        defaultValue={`${editState.sweetenData.photo}`}
                        onChange={handleChange}
                      />
                      <input
                        type="file"
                        name="photo"
                        id="productImg"
                        className="object-cover w-full h-full opacity-0"
                        // onChange={handelPhoto}
                      />
                    </div>
                  </div>
                </label>
              </div>

              {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}

              <div className="flex-1 pt-8">
                {/* <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
                商品資訊
              </h6> */}
                <div className="flex flex-wrap">
                  {/* name */}
                  <div className="w-full px-4 lg:w-8/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="editName"
                      >
                        名稱
                      </label>
                      <input
                        type="text"
                        id="editName"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        defaultValue={`${editState.sweetenData.name}`}
                        name="name"
                        //   value={updateProduct.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* valid */}
                  <div className="w-full px-4 lg:w-4/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
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
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        defaultValue={`${editState.sweetenData.valid}`}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* price */}
                  <div className="w-full px-4 lg:w-6/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="editPrice"
                      >
                        價格
                      </label>
                      <input
                        type="number"
                        id="editPrice"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        defaultValue={`${editState.sweetenData.price}`}
                        name="price"
                        //   value={updateProduct.price}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* express */}
                  <div className="w-full px-4 lg:w-6/12">
                    <div className="relative w-full mb-3">
                      <label className="block mb-2 text-xs font-bold uppercase text-blueGray-600">
                        配送方式
                      </label>
                      <select
                        name="express_id"
                        className="w-full px-3 py-3 text-sm text-center transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
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
                  <div className="w-full px-4 lg:w-12/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="grid-password"
                      >
                        建立時間
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        defaultValue={`${editState.sweetenData.created_at}`}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* description */}
                <div className="flex flex-wrap">
                  <div className="w-full px-4 lg:w-12/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="editDescription"
                      >
                        說明
                      </label>
                      <textarea
                        type="text"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
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
                <div className="flex flex-wrap justify-end text-center">
                  <button
                    className="px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-secondary hover:bg-warning active:bg-lightBlue-600 hover:shadow-md focus:outline-none"
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
