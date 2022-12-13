import React from "react";

function Filter() {
  const filter = [
    {
      name: "Sedací soupravy",
      filterName: "sedaci_soupravy",
    },
    {
      name: "Křesla",
      filterName: "kresla",
    },
    {
      name: "Postele",
      filterName: "postele",
    },
  ];

  return (
    <div className="w-[265px] ml-4 lg:ml-10 mt-4 lg:border lg:rounded-lg lg:h-auto lg:p-2">
      <div className="lg:flex lg:gap-4 lg:relative hidden lg:border-b-2  lg:pb-2 ">
        <div className="flex gap-2 ">
          <img className="w-[24px]" src="/folder.svg" alt="" />
          <p>Kategorie</p>
        </div>
        <img
          className="w-[16px] absolute pt-1 right-0"
          src="/arrow-up.svg"
          alt=""
        />
      </div>
      <div className="flex gap-2 border-b-2 border-b-slate-100 pb-4 lg:mt-4">
        <img className="w-[16px]" src="/arrow-left.svg" alt="back" />
        <p className="text-slate-300">Všechny produkty</p>
      </div>
      {filter.map((d, i) => (
        <div key={i} className="lg:flex lg:justify-between lg:mt-2 hidden">
          <a href="/">
            <p className="lg:text-slate-400 lg:hover:text-slate-700 lg:transition-all">
              {d.name}
            </p>
          </a>

          <p className="lg:text-slate-400">4</p>
        </div>
      ))}
    </div>
  );
}

export default Filter;
