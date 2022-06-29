import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { API_URL } from "../utils/config";
import { AiOutlinePlusCircle } from "react-icons/ai";

// components
import ProductTableRow from "../components/TableRow/ProductTableRow";
import { EditContext, PassProduct } from "../layout/Main";

const ProductList = () => {
  // const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  // context
  const editState = useContext(EditContext);
  const passProductState = useContext(PassProduct);

  useEffect(() => {
    let getProducts = async () => {
      let response = await axios.get(`${API_URL}/product`, {
        params: {
          page: page,
        },
      });
      passProductState.setProducts(response.data.data);
      setTotalPage(response.data.pagination.totalPage);
    };
    getProducts();
  }, [page, passProductState]);

  // 製作分頁
  // TODO 如果刪除沒有資料，要跳前一頁
  const getPages = () => {
    let pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <li
          key={i}
          onClick={(e) => {
            setPage(i);
          }}
          className="text-center rounded"
          style={{
            margin: "2px",
            backgroundColor: page === i ? "#F39898" : "",
            borderColor: page === i ? "#A9A9A9" : "#dbdbdb",
            color: page === i ? "#fff" : "#765544",
            borderWidth: "1px",
            width: "28px",
            height: "28px",
          }}
        >
          {i}
        </li>
      );
    }
    return pages;
  };

  return (
    <>
      <div>
        <div className="sm:px-6 w-full">
          <div className="px-4 md:px-10 py-4 md:py-7">
            <div className="flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Tasks
              </p>
              <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                <p>Sort By:</p>
                <select className="focus:outline-none bg-transparent ml-1">
                  <option className="text-sm text-indigo-800">Latest</option>
                  <option className="text-sm text-indigo-800">Oldest</option>
                  <option className="text-sm text-indigo-800">Latest</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="sm:flex items-center justify-between">
              <div className="flex items-center">
                <a href="#/">
                  <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                    <p>All</p>
                  </div>
                </a>
                <a href="#/">
                  <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                    <p>Done</p>
                  </div>
                </a>
                <a href="#/">
                  <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                    <p>Pending</p>
                  </div>
                </a>
              </div>
              {/* create new product btn */}
              {/* <button className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">
                  Add Task
                </p>
              </button> */}
              <div className="w-7 h-7">
                <AiOutlinePlusCircle
                  className="w-7 h-7 cursor-pointer hover:text-green-600"
                  onClick={(e) => {
                    editState.setIsOpen({ create: true });
                  }}
                />
              </div>
            </div>
            <div className="mt-7 overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <thead>
                  <tr className="text-center">
                    <th>
                      <div className="ml-5">
                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                          <input
                            type="checkbox"
                            className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                          />
                          <div className="check-icon  bg-indigo-700 text-white rounded-sm">
                            <svg
                              className="icon icon-tabler icon-tabler-check"
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M5 12l5 5l10 -10" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </th>
                    {/* 名稱 */}
                    <th>
                      <div className="flex items-center pl-5">
                        <p className="text-sm leading-none text-gray-600 mr-2">
                          名稱
                        </p>
                      </div>
                    </th>
                    <th className="pl-10">
                      <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          價格
                        </p>
                      </div>
                    </th>
                    <th className="pl-5">
                      <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          貨運
                        </p>
                      </div>
                    </th>
                    <th className="pl-5">
                      <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          建立時間
                        </p>
                      </div>
                    </th>
                  </tr>
                  <tr className="h-3" />
                </thead>
                <tbody>
                  {passProductState.products.map((product) => {
                    return (
                      <Fragment key={product.id}>
                        <ProductTableRow product={product} />
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <style>
          {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
        </style>
      </div>
      <ul className="flex justify-center mt-8">{getPages()}</ul>
    </>
  );
};

export default ProductList;
