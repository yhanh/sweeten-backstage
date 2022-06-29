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
export const EditContext = React.createContext();
export const PassProduct = React.createContext();

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sweetenData, setSweetenData] = useState(null);
  // setIsOpen({ edit: true });
  // setIsOpen({ create: true });
  const [products, setProducts] = useState([]);
  // setProducts([newProduct,...products])

  return (
    <>
      <EditContext.Provider
        value={{ isOpen, setIsOpen, sweetenData, setSweetenData }}
      >
        <PassProduct.Provider value={{ products, setProducts }}>

          {/* edit */}
          <div>
            {/* <ProductEditCard /> */}
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
