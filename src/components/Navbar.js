import React from "react";

function Navbar() {
  return (
    <div className="border-b-2 border-slate-200">
      <div className="flex  p-4">
        <div>
          <img
            className="w-[24px] h-[24px] justify-start"
            src="/x.svg"
            alt="close"
          />
        </div>

        <div className="justify-center m-auto">
          <h2 className="font-medium text-[18px]">Vyberte produkt</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
