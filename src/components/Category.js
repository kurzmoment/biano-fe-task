import React from "react";

function Category() {
  //   const activeTab = "#616A92";
  return (
    <div>
      <div className="flex p-4 m-auto justify-center">
        <div className="bg-[#616A92] rounded-l-full p-2 w-[114px] text-center text-white border">
          <p className="text-[12px]">Kategorie</p>
        </div>
        <div className="flex p-2 w-[114px] border  gap-1 justify-center">
          <img className="w-[10px]" src="/wishlist.svg" alt="" />
          <p className="text-[12px]">Oblíbené</p>
        </div>
        <div className="flex p-2 w-[114px] rounded-r-full gap-1 border justify-center">
          <img
            className="w-[10px] text-[12px] text-red-400"
            src="/star.svg"
            alt="recomended"
          />
          <p className="text-[12px]">Doporučené</p>
        </div>
      </div>
      <div className="flex gap-2 border-b-2 border-b-slate-100 pb-4">
        <img className="w-[16px]" src="/arrow-left.svg" alt="back" />
        <p className="text-slate-300">Sedací soupravy</p>
      </div>
    </div>
  );
}

export default Category;
