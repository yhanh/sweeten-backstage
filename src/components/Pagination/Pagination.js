import React, { useContext, useEffect } from "react";
import axios from "axios";
import { PassData } from "../../layout/Main";
import { API_URL } from "../../utils/config";

const Pagination = (props) => {
  const { productSwitch, setProductSwitch } = props;

  // context
  const passProductState = useContext(PassData);
  const { page, setPage, totalPage, setDatas, setTotalPage } = passProductState;

  useEffect(() => {
    let getProducts = async () => {
      let response = await axios.get(`${API_URL}/product`, {
        params: {
          page: page,
        },
      });
      //   console.log(response)
      setDatas(response.data.data);
      setTotalPage(response.data.pagination.totalPage);
    };
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    window.scrollTo({ top: 0, left: 0 });
  }, [page]);

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
  console.log(getPages());

  return (
    <>
      {/* {getPages()} */}
      <li>{}</li>
    </>
  );
};

export default Pagination;
