import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// layout
import Header from "./Header";
import TagBar from "./TagBar";
import Footer from "./Footer";

// components
import LessonList from "../page/LessonList";
import ProductList from "../page/ProductList";
import UserList from "../page/UserList";
import CouponList from "../page/CouponList";
import PopupWindows from "../components/PopupWindow/PopupWindows";

// context
export const PassData = React.createContext();

const Main = () => {
  /* ----------------------------------- product --------------------------------------- */
  const [isOpen, setIsOpen] = useState(false); // 開關彈窗
  const [eachData, setEachData] = useState(null); // 每個 id 對應資料
  // setIsOpen({ edit: true });
  // setIsOpen({ create: true });
  const [datas, setDatas] = useState([]); // setData(整頁的)
  // setProducts([newProduct,...products])
  const [page, setPage] = useState(1); // 分頁
  const [totalPage, setTotalPage] = useState(1); // 總頁數

  return (
    <>
      <PassData.Provider
        value={{
          isOpen,
          setIsOpen,
          eachData,
          setEachData,
          datas,
          setDatas,
          page,
          setPage,
          totalPage,
          setTotalPage,
        }}
      >
        {/* 彈窗 */}
        {/* <div>
          <PopupWindows />
        </div> */}

        <Header />
        <TagBar />

        <main className="flex flex-wrap justify-center pb-12 mx-auto pt-10 bg-light bg-opacity-60">
          <div className="relative w-full p-8 bg-white shadow max-w-screen-2xl">
            <Routes>
              <Route path="/product" element={<ProductList />} />
              <Route path="/lesson" element={<LessonList />} />
              <Route path="/user" element={<UserList />} />
              <Route path="/coupon" element={<CouponList />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </PassData.Provider>
    </>
  );
};

export default Main;
