import React from "react";
import ExpiryProductCreateCard from "../CreateCard/ExpiryProductCreateCard";
import ProductCreateCard from "../CreateCard/ProductCreateCard";
import ExpiryProductDeleteCard from "../DeleteCard/ExpiryProductDeleteCard";
import ProductDeleteCard from "../DeleteCard/ProductDeleteCard";
import ProductEditCard from "../EditCard/ProductEditCard";

const PopupWindows = () => {
  return (
    <>
      {/* edit */}
      <ProductEditCard />

      {/* create */}
      <ProductCreateCard />
      <ExpiryProductCreateCard />

      {/* delete */}
      <ProductDeleteCard />
      <ExpiryProductDeleteCard />
    </>
  );
};

export default PopupWindows;
