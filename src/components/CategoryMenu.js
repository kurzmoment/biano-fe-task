import React from "react";
import CategoryMenuCard from "./CategoryMenuCard";

function CategoryMenu() {
  const data = [
    {
      name: "Rozkládací",
      image: "/rozkladaci.jpg",
    },
    {
      name: "Šedé",
      image: "/seda.jpg",
    },
    {
      name: "Skandinávské",
      image: "skandinavska.jpg",
    },
    {
      name: "Retro",
      image: "retro.jpg",
    },
    {
      name: "Moderní",
      image: "moderni.jpg",
    },
    {
      name: "Kožené",
      image: "kozene.jpg",
    },
  ];

  return (
    <div className="mt-4 ml-4 lg:ml-10">
      <div className="pb-4 ">
        <h2 className="font-semibold lg:text-[26px]">Nábytek</h2>
        <a
          onClick={() => sessionStorage.clear()}
          href="/"
          className={
            sessionStorage.getItem("cat") !== null
              ? `text-sm text-slate-400 underline`
              : `hidden`
          }
        >
          Vymazat filter
        </a>
      </div>
      <div className="flex overflow-x-auto no-scrollbar pb-6 gap-8 pl-1">
        {data.map((d, i) => (
          <CategoryMenuCard key={i} name={d.name} image={d.image} />
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
