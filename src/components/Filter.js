import React, { useState } from "react";

function Filter() {
  const [state, setState] = useState(true);
  const filterData = [
    {
      name: "Sedací soupravy",
      filterName: "sedaci_soupravy",
      count: 4,
    },
    {
      name: "Křesla",
      filterName: "kresla",
      count: 3,
    },
    {
      name: "Postele",
      filterName: "postele",
      count: 3,
    },
  ];

  return (
    <div className="w-auto mr-5 lg:w-[265px] ml-5 lg:ml-10 mt-4 lg:border lg:rounded-lg lg:h-fit lg:p-2">
      {/* TADY POD TIMTO KOMENTAREM BYLO HIDDEN */}
      <div className="mb-4 flex gap-4 lg:flex lg:gap-4 lg:relative lg:border-b-2  lg:pb-2 ">
        <div className="flex gap-2 ">
          <img className="w-[24px]" src="/folder.svg" alt="" />
          <p>Kategorie</p>
        </div>
        <img
          onClick={() => setState(false)}
          className={
            state
              ? `w-[16px] absolute right-5 lg:pt-1 lg:right-0 cursor-pointer`
              : `hidden`
          }
          src="/arrow-up.svg"
          alt="up arrow"
        />
        <img
          onClick={() => setState(true)}
          className={
            !state
              ? `w-[16px] absolute right-5 lg:pt-1 lg:right-0 cursor-pointer`
              : `hidden`
          }
          src="/arrow-down.svg"
          alt="up arrow"
        />
      </div>

      <div className={!state ? `hidden` : `relative`}>
        <div className="flex gap-2 border-b-2 border-b-slate-100 pb-4 lg:mt-4">
          <img className="w-[16px]" src="/arrow-left.svg" alt="back" />
          <p className="text-slate-600">Všechny produkty</p>
        </div>
        {filterData.map((d, i) => (
          <div key={i} className="flex justify-between mt-2">
            <a
              href="/"
              onClick={() => sessionStorage.setItem("cat", d.filterName)}
            >
              <p className="text-slate-400 hover:text-slate-700 transition-all ">
                {d.name}
              </p>
            </a>

            <p className="text-slate-400">{d.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
