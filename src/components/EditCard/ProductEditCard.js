import React, { useContext } from "react";
import { EditContext } from "../../layout/Main";

const ProductEditCard = () => {
  const editState = useContext(EditContext);

  return editState.isOpen ? (
    <>
      {/* <div className="w-screen "> */}
        <div className="absolute z-10 top-25-px flex flex-col min-w-0 mx-auto break-words w-1/2 shadow-lg rounded-lg bg-zinc-100 border-0 md:w-7/12">
          <div className="rounded-t bg-white px-6 py-4">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                {editState.productData.id} : {editState.productData.name}
              </h6>
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="submit"
              >
                完成
              </button>
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
                  <div className="w-full lg:w-4/12 px-4">
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
                        defaultValue={`${editState.productData.id}`}
                      />
                    </div>
                  </div>
                  {/* name */}
                  <div className="w-full lg:w-8/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        名稱
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={`${editState.productData.name}`}
                        name="name"
                        //   value={updateProduct.name}
                        //   onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* price */}
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        價格
                      </label>
                      <input
                        type="number"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={`${editState.productData.price}`}
                        name="price"
                        //   value={updateProduct.price}
                        //   onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* express */}
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        配送方式
                      </label>
                      <input
                        type="number"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={`${editState.productData.express_id}`}
                        name="express_id"
                        //   value={updateProduct.express_id}
                        //   onChange={handleChange}
                      />
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
                        defaultValue={`${editState.productData.created_at}`}
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
                        htmlFor="grid-password"
                      >
                        說明
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={`${editState.productData.description}`}
                        rows="4"
                        name="description"
                        //   value={updateProduct.description}
                        //   onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* button */}
                <div className="text-center flex flex-wrap justify-end">
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    完成
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      {/* </div> */}
    </>
  ) : (
    <></>
  );
};

export default ProductEditCard;
