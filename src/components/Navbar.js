import React from "react";

function Navbar() {
  return (
    <div className="border-b-2 border-slate-200 md:border-b-0">
      <div className="flex p-4 md:relative md:p-0">
        <div className="">
          <img
            className="w-[24px] h-[24px] md:w-[42px] md:h-[42px] justify-start md:absolute md:bg-white md:rounded-full md:right-0 md:-m-2 md:p-2 md:border md:shadow-lg"
            src="/x.svg"
            alt="close"
          />
        </div>
        <div className="justify-center m-auto">
          <h2 className="font-medium text-[18px] md:hidden">Vyberte produkt</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
