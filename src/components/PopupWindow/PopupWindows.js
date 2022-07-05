import React from "react";
import ExpiryProductCreateCard from "../CreateCard/ExpiryProductCreateCard";
import ProductCreateCard from "../CreateCard/ProductCreateCard";
import ProductEditCard from "../EditCard/ProductEditCard";

const PopupWindows = () => {
  return (
    <>
      {/* edit */}
      <ProductEditCard />

      {/* create */}
      <ProductCreateCard />
      <ExpiryProductCreateCard />
    </>
  );
};

export default PopupWindows;
