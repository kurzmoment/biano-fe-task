import React, { useState } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../data/filterData";

function Filter() {
  const [state, setState] = useState(true);

  return (
    <div className="w-auto mr-5 md:w-[265px] ml-5 xl:ml-10 mt-4 xl:border xl:rounded-lg xl:h-fit xl:p-2">
      {/* TADY POD TIMTO KOMENTAREM BYLO HIDDEN */}
      <div className="mb-4 flex gap-4 xl:flex xl:gap-4 md:relative xl:border-b-2  xl:pb-2 ">
        <div className="flex gap-2 ">
          <img className="w-[24px]" src="category/folder.svg" alt="" />
          <p>Kategorie</p>
        </div>
        <img
          onClick={() => setState(false)}
          className={
            state
              ? `w-[16px] absolute right-5 xl:pt-1 md:right-0 cursor-pointer`
              : `hidden`
          }
          src="category/arrow-up.svg"
          alt="up arrow"
        />
        <img
          onClick={() => setState(true)}
          className={
            !state
              ? `w-[16px] absolute right-5 xl:pt-1 md:right-0 cursor-pointer`
              : `hidden`
          }
          src="category/arrow-down.svg"
          alt="up arrow"
        />
      </div>

      <div className={!state ? `hidden` : `relative`}>
        <div className="flex gap-2 border-b-2 border-b-slate-100 pb-4 xl:mt-4">
          <img className="w-[16px]" src="category/arrow-left.svg" alt="back" />
          <p className="text-slate-600">Všechny produkty</p>
        </div>
        {filterData.map((d, i) => (
          <div key={i} className="flex justify-between mt-2">
            <Link to={`/${d.filterName}`}>
              <p className="text-slate-400 hover:text-slate-700 transition-all ">
                {d.name}
              </p>
            </Link>

            <p className="text-slate-400">{d.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
