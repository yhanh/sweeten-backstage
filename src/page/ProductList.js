import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { API_URL } from "../utils/config";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiSortDescending, HiSortAscending } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";

// components
import ProductTableRow from "../components/TableRow/ProductTableRow";
import { EditContext, PassProduct } from "../layout/Main";

const ProductList = () => {
  // const [products, setProducts] = useState([]);
  // const [page, setPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(1);

  // const [productSwitch, setProductSwitch] = useState(0); // 上架 / 即期 / 下架
  // console.log(productSwitch)

  // const [sortByPrice, setSortByPrice] = useState("1");
  const [currentSort, setCurrentSort] = useState({});
  // console.log(currentSort);
  // const [cur,setCur]=useState({})

  // context
  const editState = useContext(EditContext);
  const passProductState = useContext(PassProduct);

  // console.log(passProductState.products);

  const {
    productSwitch,
    setProductSwitch,
    page,
    setPage,
    totalPage,
    setTotalPage,
    sortByPrice,
    setSortByPrice,
  } = passProductState; // 上架 / 即期 / 下架 / 頁碼

  // useEffect(init)
  // onClick(setData(res))

  /*
  delete => onClick({
  backend update database
  local setData(newList)
  })
  */

  // 上架商品 & 分頁
  useEffect(() => {
    let getProducts = async () => {
      let response = await axios.get(`${API_URL}/product`, {
        params: {
          page: page,
          priceOrder: sortByPrice,
        },
      });
      passProductState.setProducts(response.data.data);
      setTotalPage(response.data.pagination.totalPage);
    };
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    window.scrollTo({ top: 0, left: 0 });
  }, [page]);
  // [page, passProductState, productSwitch]

  // 製作分頁
  // TODO 如果刪除沒有資料，要跳前一頁
  const getPages = () => {
    let pages = [];
    if (productSwitch === 0)
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

  // 篩選 useEffect
  useEffect(() => {
    const priceASC = async () => {
      let response = await axios.get(`${API_URL}/product`, {
        params: {
          page: page,
          priceOrder: sortByPrice,
        },
      });
      passProductState.setProducts(response.data.data);
    };
    priceASC();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortByPrice]);

  return (
    <>
      <div>
        <div className="sm:px-6 w-full">
          <div className="px-4 md:px-10 py-4 md:py-7">
            <div className="flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                商品管理
              </p>
              <div className="py-2 px-3 flex text-gray-600 rounded border-2">
                <div className="flex items-center text-sm font-medium leading-none ">
                  <p>建立時間：</p>
                  {/* time ASC */}
                  <HiSortAscending className="text-3xl mx-3 bg-white p-1 rounded-sm cursor-pointer hover:bg-primary" />
                  {/* time DESC */}
                  <HiSortDescending className="text-3xl bg-white p-1 rounded-sm cursor-pointer hover:bg-primary" />
                </div>
                <div className="pl-5 flex items-center text-sm font-medium leading-none">
                  <p>價格：</p>
                  {/* price ASC */}
                  <HiSortAscending
                    className={`${
                      currentSort.priceIsASC && "bg-secondary"
                    } text-3xl mx-3 bg-white p-1 rounded-sm cursor-pointer hover:bg-primary`}
                    onClick={(e) => {
                      setSortByPrice("1");
                      setCurrentSort({ priceIsASC: true });
                    }}
                  />
                  {/* price DESC */}
                  <HiSortDescending
                    className={`${
                      currentSort.priceIsDESC && "bg-secondary"
                    } text-3xl bg-white p-1 rounded-sm cursor-pointer hover:bg-primary`}
                    onClick={(e) => {
                      setSortByPrice("2");
                      setCurrentSort({ priceIsDESC: true });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="sm:flex items-center justify-between">
              <div className="flex items-center">
                <a
                  href="#/"
                  onClick={(e) => {
                    setProductSwitch(0);
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
                  }}
                >
                  <div
                    className={
                      productSwitch === 0
                        ? "py-2 px-8 bg-secondary rounded-full"
                        : "py-2 px-8 text-gray-600 hover:text-black hover:bg-primary rounded-full"
                    }
                  >
                    <p>上架商品</p>
                  </div>
                </a>
                <a
                  href="#/"
                  onClick={(e) => {
                    setProductSwitch(1);
                    let getExpiryProducts = async () => {
                      let response = await axios.get(
                        `${API_URL}/expiry/expire_product`,
                        {
                          params: {
                            page: page,
                          },
                        }
                      );
                      passProductState.setProducts(response.data.data);
                    };
                    getExpiryProducts();
                  }}
                >
                  <div
                    className={
                      productSwitch === 1
                        ? "py-2 px-8 bg-secondary rounded-full ml-4 sm:ml-8"
                        : "py-2 px-8 text-gray-600 hover:text-black hover:bg-primary rounded-full ml-4 sm:ml-8"
                    }
                  >
                    <p>即期良品</p>
                  </div>
                </a>
                <a
                  href="#/"
                  onClick={(e) => {
                    setProductSwitch(2);
                    let getDiscontinuedProduct = async () => {
                      let response = await axios.get(
                        `${API_URL}/product/discontinued`
                      );
                      // console.log(response.data);
                      passProductState.setProducts(response.data);
                    };
                    getDiscontinuedProduct();
                  }}
                >
                  <div
                    className={
                      productSwitch === 2
                        ? "py-2 px-8 bg-secondary rounded-full ml-4 sm:ml-8"
                        : "py-2 px-8 text-gray-600 hover:text-black hover:bg-primary rounded-full ml-4 sm:ml-8"
                    }
                  >
                    <p>下架商品</p>
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
                            className="checkbox absolute cursor-pointer w-full h-full checked:bg-secondary"
                          />
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
                    {/* 價格 or 數量 */}
                    <th className="pl-10">
                      <div className="flex items-center">
                        {productSwitch == 1 ? (
                          <p className="text-sm leading-none text-gray-600 ml-2">
                            數量
                          </p>
                        ) : (
                          <p className="text-sm leading-none text-gray-600 ml-2">
                            價格
                          </p>
                        )}
                      </div>
                    </th>
                    {/* 貨運 or 折扣 */}
                    <th className="pl-5">
                      <div className="flex items-center">
                        {productSwitch == 1 ? (
                          <p className="text-sm leading-none text-gray-600 ml-2">
                            折扣
                          </p>
                        ) : (
                          <p className="text-sm leading-none text-gray-600 ml-2">
                            貨運
                          </p>
                        )}
                      </div>
                    </th>
                    {/* 建立時間 or 到期時間 */}
                    <th className="pl-5">
                      <div className="flex items-center">
                        {productSwitch == 1 ? (
                          <p className="text-sm leading-none text-gray-600 ml-2">
                            到期時間
                          </p>
                        ) : (
                          <p className="text-sm leading-none text-gray-600 ml-2">
                            建立時間
                          </p>
                        )}
                      </div>
                    </th>
                    {/* 啟用 or 剩餘時間 */}
                    {productSwitch == 1 ? (
                      <th className="pl-5">
                        <div className="flex items-center">
                          <p className="text-sm leading-none text-gray-600 ml-2">
                            剩餘時間
                          </p>
                        </div>
                      </th>
                    ) : (
                      <th className="pl-5">
                        <div className="flex items-center">
                          <p className="text-sm leading-none text-gray-600 ml-2">
                            啟用
                          </p>
                        </div>
                      </th>
                    )}
                  </tr>
                  <tr className="h-3" />
                </thead>
                <tbody>
                  {(passProductState.products || []).map((product) => {
                    return (
                      <Fragment key={uuidv4()}>
                        <ProductTableRow
                          product={product}
                          page={page}
                          setProductSwitch={setProductSwitch}
                          productSwitch={productSwitch}
                        />
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
