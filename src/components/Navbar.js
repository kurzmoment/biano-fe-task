import React from "react";

function Navbar() {
  return (
    <div className="border-b-2 border-slate-200 lg:border-b-0">
      <div className="flex p-4 lg:relative lg:p-0">
        <div className="">
          <img
            className="w-[24px] h-[24px] lg:w-[42px] lg:h-[42px] justify-start lg:absolute lg:bg-white lg:rounded-full lg:right-0 lg:-m-2 lg:p-2 lg:border lg:shadow-lg"
            src="category/x.svg"
            alt="close"
          />
        </div>
        <div className="justify-center m-auto">
          <h2 className="font-medium text-[18px] lg:hidden">Vyberte produkt</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
