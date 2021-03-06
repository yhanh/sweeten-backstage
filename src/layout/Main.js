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
import ChatBox from "../components/OnlineHelp/ChatBox";

// context
export const EditContext = React.createContext();
export const PassProduct = React.createContext();
export const ProductPage = React.createContext();

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sweetenData, setSweetenData] = useState(null);
  // setIsOpen({ edit: true });
  // setIsOpen({ create: true });
  const [products, setProducts] = useState([]);
  // setProducts([newProduct,...products])
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const [productSwitch, setProductSwitch] = useState(0); // 上架 / 即期 / 下架
  const [sortByPrice, setSortByPrice] = useState("1"); // 價格篩選

  return (
    <>
      <EditContext.Provider
        value={{ isOpen, setIsOpen, sweetenData, setSweetenData }}
      >
        <PassProduct.Provider
          value={{
            products,
            setProducts,
            productSwitch,
            setProductSwitch,
            page,
            setPage,
            totalPage,
            setTotalPage,
            sortByPrice,
            setSortByPrice,
          }}
        >
          <div>
            <PopupWindows />
          </div>

          <Header />

          <TagBar />

          <main className="flex flex-wrap justify-center pb-12 mx-auto pt-10 bg-light bg-opacity-60">
            <div className="relative w-full p-8 bg-white shadow max-w-screen-2xl">
              <Routes>
                <Route path="/product" element={<ProductList />} />
                <Route path="/lesson" element={<LessonList />} />
                <Route path="/user" element={<UserList />} />
                <Route path="/coupon" element={<CouponList />} />
                <Route path="/onlinehelp" element={<ChatBox />} />
              </Routes>
            </div>
          </main>

          <Footer />
        </PassProduct.Provider>
      </EditContext.Provider>
    </>
  );
};

export default Main;
