import React from "react";

function Category() {
  //   const activeTab = "#616A92";
  return (
    <div>
      <div className="flex p-4 m-auto justify-center lg:justify-start lg:ml-6 lg:mt-4">
        <div className="bg-[#616A92] rounded-l-full p-2 w-[114px] lg:w-[126px] text-center text-white border">
          <p className="text-[12px] lg:text-[14px]">Kategorie</p>
        </div>
        <div className="flex p-2 w-[114px] lg:w-[126px] border  gap-1 justify-center">
          <img className="w-[10px] lg:w-[14px]" src="/wishlist.svg" alt="" />
          <p className="text-[12px] lg:text-[14px]">Oblíbené</p>
        </div>
        <div className="flex p-2 w-[114px] lg:w-[126px] rounded-r-full gap-1 border justify-center">
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
