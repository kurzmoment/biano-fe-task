import React from "react";

function Navbar() {
  return (
    <div className="border-b-2 border-slate-200 xl:border-b-0">
      <div className="flex p-4 xl:relative xl:p-0">
        <div className="">
          <img
            className="w-[24px] h-[24px] xl:w-[42px] xl:h-[42px] justify-start xl:absolute xl:bg-white xl:rounded-full xl:right-0 xl:-m-2 xl:p-2 xl:border xl:shadow-lg"
            src="category/x.svg"
            alt="close"
          />
        </div>
        <div className="justify-center m-auto">
          <h2 className="font-medium text-[18px] xl:hidden ">
            Vyberte produkt
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
