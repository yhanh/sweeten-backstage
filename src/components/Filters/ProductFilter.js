import React from "react";
import { HiSortDescending, HiSortAscending } from "react-icons/hi";

export const ProductFilter = () => {
  return (
    <>
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
        // className={`${
        //   currentSort.priceIsASC && "bg-secondary"
        // } text-3xl mx-3 bg-white p-1 rounded-sm cursor-pointer hover:bg-primary`}
        // onClick={(e) => {
        //   setSortByPrice("1");
        //   setCurrentSort({ priceIsASC: true });
        // }}
        />
        {/* price DESC */}
        <HiSortDescending
        // className={`${
        //   currentSort.priceIsDESC && "bg-secondary"
        // } text-3xl bg-white p-1 rounded-sm cursor-pointer hover:bg-primary`}
        // onClick={(e) => {
        //   setSortByPrice("2");
        //   setCurrentSort({ priceIsDESC: true });
        // }}
        />
      </div>
    </>
  );
};
