import React from "react";

function ProductCard(props) {
  //   const pressedButton = "";
  return (
    <div className="p-2 mt-2">
      <div className="relative md:hover:scale-105 md:transition-all">
        <div className="bg-white border-2 border-slate-300 hover:bg-red-200 transition-all rounded-full absolute p-1 m-2 right-0 xl:right-4">
          <img className="w-[14px]" src="category/wishlist.svg" alt="" />
        </div>
        <div className="md:flex md:justify-center">
          <img
            className="rounded-md h-40 xl:h-56  p-2"
            src={props.image}
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#E8F8EE] mt-2 w-max p-1 rounded-md ">
        <p className=" text-[#25BE66] text-xs ">Skladem</p>
      </div>
      <p className="text-slate-400 text-xs mt-2">Maximálně dvouřádkový název</p>
      <p className="font-bold mt-4">999 Kč</p>
      <div className="flex bg-[#F58A8A] rounded-full mt-2 md:ml-4 md:mr-4 p-2 xl:ml-4 xl:mr-4 justify-center gap-4 cursor-pointer md:hover:scale-105 md:transition-all ">
        <img className="w-[15px] text-bold" src="category/plus.svg" alt="add" />
        <p className="text-white">Do studia</p>
      </div>
    </div>
  );
}

export default ProductCard;
