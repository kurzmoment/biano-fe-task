import React, { useState } from "react";

function Category() {
  localStorage.setItem("state", "category");
  const [state, setState] = useState("category");
  return (
    <div>
      <div className="flex p-4 m-auto justify-center lg:justify-start lg:ml-6 lg:mt-4">
        <div
          onClick={() =>
            setState("category") && localStorage.setItem("state", "category")
          }
          className={
            state === "category"
              ? `bg-[#616A92] rounded-l-full p-2 w-[114px] lg:w-[126px] text-center text-white border cursor-pointer`
              : `bg-white rounded-l-full p-2 w-[114px] lg:w-[126px] text-center text-black border cursor-pointer`
          }
        >
          <p className="text-[12px] lg:text-[14px]">Kategorie</p>
        </div>
        <div
          onClick={() =>
            setState("wishlist") && localStorage.setItem("state", "wishlist")
          }
          className={
            state === "wishlist"
              ? `bg-[#616A92] flex p-2 w-[114px] lg:w-[126px] border text-white  gap-1 justify-center cursor-pointer`
              : `flex p-2 w-[114px] lg:w-[126px] border  gap-1 justify-center cursor-pointer`
          }
        >
          <img className="w-[10px] lg:w-[14px]" src="/wishlist.svg" alt="" />
          <p className="text-[12px] lg:text-[14px]">Oblíbené</p>
        </div>
        <div
          onClick={() =>
            setState("recomended") &&
            localStorage.setItem("state", "recomended")
          }
          className={
            state === "recomended"
              ? `bg-[#616A92] flex p-2 w-[114px] lg:w-[126px] text-white rounded-r-full gap-1 border justify-center cursor-pointer`
              : `flex p-2 w-[114px] lg:w-[126px] rounded-r-full gap-1 border justify-center cursor-pointer`
          }
        >
          <img
            className="w-[10px] lg:w-[14px]"
            src="/star.svg"
            alt="recomended"
          />
          <p className="text-[12px] lg:text-[14px]">Doporučené</p>
        </div>
      </div>
    </div>
  );
}

export default Category;
