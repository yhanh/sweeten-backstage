import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../page/ProductList";

const Main = () => {
  return (
    <main className="flex flex-wrap justify-center pb-12 mx-auto pt-10 bg-light bg-opacity-60">
      <div className="relative w-full p-8 bg-white shadow max-w-screen-2xl">
        <Routes>
          <Route path="/product" element={<ProductList/>} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
