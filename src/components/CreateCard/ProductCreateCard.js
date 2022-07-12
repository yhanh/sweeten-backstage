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
  const [path, setPath] = useState("");

  // set 商品 id(時間戳)

  // product info
  const [newProduct, setNewProduct] = useState({
    id: +new Date(),
    name: "",
    price: 0,
    description: "",
    express_id: 1,
    photo: "",
  });

  // product img
  // const [newProductImg, setNewProductImg] = useState({
  //   photo: "",
  // });

  // product info
  function handleChange(e) {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  }

  function handelPhoto(e) {
    setNewProduct({ ...newProduct, photo: e.target.files[0] });

    // 預覽圖片
    let render = new FileReader();
    render.onload = () => {
      setPath(render.result);
    };
    render?.readAsDataURL(e?.target?.files[0]);
    e.target.value = "";
  }

  // 清除預覽圖片預覽
  // const handleClear = (e) => {
  //   e.preventDefault();
  //   setNewProductImg(null);
  // };

  // product img
  // function handleChangeImg(e) {
  //   setNewProductImg({ ...newProductImg, [e.target.name]: e.target.files[0] });
  // }

  // console.log(newProductImg);

  // 頁面重整 function
  let reloadAfterUpdate = async () => {
    let response = await axios.get(`${API_URL}/product`);
    passProductState.setProducts(response.data.data);
  };

  // 新資料寫入資料庫
  async function handelSubmit(e) {
    e.preventDefault();
    // TODO 加強防呆
    if (
      // newProductImg !== "" &&
      newProduct.photo !== "" &&
      newProduct.name !== "" &&
      newProduct.price !== 0
      // newProduct.description !== ""
    )
      try {
        // 商品資料
        // await axios.post(`${API_URL}/product`, newProduct);

        // 商品圖片

        // let formData = new FormData();
        // formData.append("photo", newProduct.photo);
        // // console.log(formData);
        // await axios.post(`${API_URL}/product/photo`, formData);
        // // console.log(test);
        let formData = new FormData();
        formData.append("id", +new Date());
        formData.append("name", newProduct.name);
        formData.append("price", newProduct.price);
        formData.append("description", newProduct.description);
        formData.append("express_id", newProduct.express_id);
        formData.append("photo", newProduct.photo);

        await axios.post(`${API_URL}/product/photo`, formData);
        // await axios.post(`${API_URL}/product`, formData);

        console.log("新增商品成功");
        setPath("");
        editState.setIsOpen(false);

        passProductState.setProducts([
          ...passProductState.products,
          newProduct,
        ]);
        // 頁面馬上更新
        reloadAfterUpdate();
        // window.location.reload();
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
      <div className="fixed z-10 w-screen h-screen mx-auto">
        {/* background */}
        <div className="w-full h-full bg-test opacity-70"></div>

        {/* card */}
        <div className="absolute flex flex-col w-2/5 min-w-0 mx-auto break-words -translate-x-1/2 -translate-y-1/2 border-0 rounded-lg shadow-lg top-1/2 left-1/2 bg-zinc-100">
          <div className="px-6 py-4 bg-white rounded-t">
            <div className="flex justify-between text-center">
              <h6 className="text-xl font-bold text-blueGray-700">新增商品</h6>
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
                    setPath("");
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
            <form className="flex">
              <div className="flex-1 pt-8">
                <label
                  className="block w-full mb-2 text-xs font-bold uppercase text-blueGray-600 h-80"
                  htmlFor="productImg"
                >
                  上傳圖片
                  <div className="relative w-full h-full mt-2 border-2 border-dashed rounded-md border-test">
                    <img
                      src={process.env.PUBLIC_URL + "/images/uploadImg.png"}
                      className="absolute object-cover w-1/2 -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2 h-1/3 opacity-40"
                      alt=""
                    />
                    {/* 預覽圖片 */}
                    {newProduct.img !== "" ? (
                      <>
                        <div className="relative w-full h-full text-center">
                          <img
                            className="object-cover w-auto h-full m-auto"
                            alt=""
                            src={path}
                          />
                          {/* <button
                            className={
                              newProductImg == "" ? "text-center" : "hidden"
                            }
                            onClick={handleClear}
                          >
                            刪除
                          </button> */}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    <input
                      type="file"
                      name="photo"
                      id="productImg"
                      className="object-cover w-full h-full opacity-0"
                      onChange={handelPhoto}
                    />
                  </div>
                </label>
              </div>

              {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}

              <div className="flex-1 pt-8">
                <div className="flex flex-wrap">
                  {/* name */}
                  <div className="w-full px-4 lg:w-12/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="productName"
                      >
                        名稱
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="productName"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* price */}
                  <div className="w-full px-4 lg:w-5/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="productPrice"
                      >
                        價格
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="productPrice"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        min={0}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* express */}
                  <div className="w-full px-4 lg:w-7/12">
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
                </div>

                {/* description */}
                <div className="flex flex-wrap">
                  <div className="w-full px-4 lg:w-12/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="productDescription"
                      >
                        說明
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        id="productDescription"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        rows="4"
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
