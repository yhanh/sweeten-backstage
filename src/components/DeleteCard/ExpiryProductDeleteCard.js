import React, { useContext, useEffect } from "react";
import { EditContext, PassProduct } from "../../layout/Main";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { API_URL } from "../../utils/config";
import { BASE_URL } from "../../utils/config";
import axios from "axios";

const ExpiryProductDeleteCard = () => {
  // context
  const editState = useContext(EditContext);
  const passProductState = useContext(PassProduct);
  const { productSwitch, setProductSwitch, page } = passProductState; // 上架 / 即期 / 下架 / 頁碼

  // 刷新頁面
  let reloadAfterDelete = async () => {
    let response = await axios.get(`${API_URL}/expiry/expire_product`, {
      params: {
        page: page,
      },
    });
    passProductState.setProducts(response.data.data);
  };

  // delete
  async function handelDelete(e) {
    e.preventDefault();
      let deleteExpiryProduct = await axios.delete(
        `${API_URL}/expiry/${editState.sweetenData.id}`
      );
    // deleteExpiryProductFunction();
    editState.setIsOpen(false);
    reloadAfterDelete();
    // window.location.reload();
  }
  // console.log(editState.sweetenData);

  // useEffect(() => {
  //   // reloadAfterDelete();
  //   setProductSwitch(productSwitch);
  // }, [passProductState.products]);

  return editState.isOpen.deleteExpiryProduct ? (
    <>
      {/* occupy the space of a screen page */}
      <div className="fixed w-screen h-screen z-10 mx-auto">
        {/* background */}
        <div className="w-full h-full bg-test opacity-70"></div>

        {/* card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col min-w-0 mx-auto break-words w-1/4 shadow-lg rounded-lg bg-zinc-100 border-0">
          <div className="rounded-t bg-white px-6 py-4">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                確定刪除即期商品：{editState.sweetenData.product_id}？
              </h6>
              <div className="h-7 flex">
                <AiOutlineCloseCircle
                  className="h-7 w-7 cursor-pointer m-auto hover:text-warning"
                  onClick={(e) => {
                    editState.setIsOpen(false);
                    // setPath("");
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form className="flex">
              <div className="pt-8 flex-1 block uppercase text-blueGray-600 text-xs font-bold mb-2 w-full h-40">
                <div className="border-test border-2 border-dashed h-full rounded-md w-11/12">
                  <img
                    src={
                      BASE_URL +
                      `/public/product/${editState.sweetenData.product_id}.jpg`
                    }
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>

              <div className="pt-8 flex-1">
                <div className="flex flex-wrap">
                  {/* name */}
                  <div className="w-full lg:w-12/12 px-2">
                    <div className="relative w-full mb-3">
                      <p>商品：</p>
                      <p className=" pt-1 text-sm">
                        {editState.sweetenData.name}
                      </p>
                    </div>
                  </div>
                </div>

                {/* button */}
                <div className="text-center flex flex-wrap justify-between px-2 mt-6">
                  <button
                    className=" bg-test hover:bg-gray-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={(e) => {
                      editState.setIsOpen(false);
                    }}
                  >
                    否
                  </button>
                  <button
                    className="bg-secondary hover:bg-warning text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={handelDelete}
                  >
                    是
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

export default ExpiryProductDeleteCard;
