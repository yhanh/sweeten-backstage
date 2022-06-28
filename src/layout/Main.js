import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// components
import LessonList from "../page/LessonList";
import ProductList from "../page/ProductList";
import UserList from "../page/UserList";
import CouponList from "../page/CouponList";
import ProductEditCard from "../components/EditCard/ProductEditCard";
import Header from "./Header";
import TagBar from "./TagBar";
import Footer from "./Footer";

// context
export const EditContext = React.createContext();

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productData, setProductData] = useState(null);

  return (
    <>
      <EditContext.Provider
        value={{ isOpen, setIsOpen, productData, setProductData }}
      >

        {/* edit */}
        <div>
          <ProductEditCard />
        </div>

      <Header/>
      <TagBar/>

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

        <Footer/>
      </EditContext.Provider>
    </>
  );
};

export default Main;
