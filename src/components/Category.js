import React, { useState } from "react";
import { Link } from "react-router-dom";

function Category() {
  const [state, setState] = useState("");
  sessionStorage.setItem("state", state);

  return (
    <div>
      <div className="flex p-4 m-auto justify-center lg:justify-start lg:ml-6 lg:mt-4">
        <Link
          to={"/category"}
          onClick={() => setState("category")}
          className={
            state === "category"
              ? `bg-[#616A92] rounded-l-full p-2 w-[114px] lg:w-[126px] text-center text-white border cursor-pointer`
              : `bg-white rounded-l-full p-2 w-[114px] lg:w-[126px] text-center text-black border cursor-pointer`
          }
        >
          <p className="text-[12px] lg:text-[14px]">Kategorie</p>
        </Link>
        <Link
          to={"/wishlist"}
          onClick={() => setState("wishlist")}
          className={
            state === "wishlist"
              ? `bg-[#616A92] flex p-2 w-[114px] lg:w-[126px] border text-white  gap-1 justify-center cursor-pointer`
              : `flex p-2 w-[114px] lg:w-[126px] border  gap-1 justify-center cursor-pointer`
          }
        >
          <img
            className="w-[10px] lg:w-[14px]"
            src="category/wishlist.svg"
            alt=""
          />
          <p className="text-[12px] lg:text-[14px]">Oblíbené</p>
        </Link>
        <Link
          to={"/recomended"}
          onClick={() => setState("recomended")}
          className={
            state === "recomended"
              ? `bg-[#616A92] flex p-2 w-[114px] lg:w-[126px] text-white rounded-r-full gap-1 border justify-center cursor-pointer`
              : `flex p-2 w-[114px] lg:w-[126px] rounded-r-full gap-1 border justify-center cursor-pointer`
          }
        >
          <img
            className="w-[10px] lg:w-[14px]"
            src="/category/star.svg"
            alt="recomended"
          />
          <p className="text-[12px] lg:text-[14px]">Doporučené</p>
        </Link>
      </div>
    </div>
  );
}

export default Category;
