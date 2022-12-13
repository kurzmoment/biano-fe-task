import React from "react";

function ProductCard(props) {
  //   const pressedButton = "";
  return (
    <div className="p-2 mt-2">
      <div className="relative">
        <div className="bg-white border-2 border-slate-300 hover:bg-[#F58A8A] transition-all rounded-full absolute p-1 m-2 right-0">
          <img className="w-[14px]" src="/wishlist.svg" alt="" />
        </div>
        <img className="rounded-md h-40 p-2" src={props.image} alt="" />
      </div>
      <div className="bg-[#E8F8EE] mt-2 w-max p-1 rounded-md ">
        <p className=" text-[#25BE66] text-xs ">Skladem</p>
      </div>
      <p className="text-slate-400 text-xs mt-2">Maximálně dvouřádkový název</p>
      <p className="font-bold mt-4">999 Kč</p>
      <div className="flex bg-[#F58A8A] rounded-full mt-2 p-2 justify-center gap-4">
        <img className="w-[15px] text-bold" src="/plus.svg" alt="add" />
        <p className="text-white">Do studia</p>
      </div>
    </div>
  );
}

export default ProductCard;
