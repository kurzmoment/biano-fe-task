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
    <div className="w-[265px] ml-4 lg:ml-10 mt-4 lg:border lg:rounded-lg lg:h-fit lg:p-2">
      <div className="lg:flex lg:gap-4 lg:relative hidden lg:border-b-2  lg:pb-2 ">
        <div className="flex gap-2 ">
          <img className="w-[24px]" src="/folder.svg" alt="" />
          <p>Kategorie</p>
        </div>
        <img
          onClick={() => setState(false)}
          className={
            state ? `w-[16px] absolute pt-1 right-0 cursor-pointer` : `hidden`
          }
          src="/arrow-up.svg"
          alt="up arrow"
        />
        <img
          onClick={() => setState(true)}
          className={
            !state ? `w-[16px] absolute pt-1 right-0 cursor-pointer` : `hidden`
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
          <div key={i} className="lg:flex lg:justify-between lg:mt-2 hidden">
            <a
              href="/"
              onClick={() => sessionStorage.setItem("cat", d.filterName)}
            >
              <p className="lg:text-slate-400 lg:hover:text-slate-700 lg:transition-all ">
                {d.name}
              </p>
            </a>

            <p className="lg:text-slate-400">{d.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
