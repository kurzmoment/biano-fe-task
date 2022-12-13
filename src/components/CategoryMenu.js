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
    <div className="mt-4 ml-4">
      <div className="pb-4 ">
        <h2 className="font-semibold md:text-[26px]">Pohovky a gauče</h2>
        <p className="text-md text-slate-200 md:hidden">
          Pro posun použijte šipky
        </p>
      </div>
      <div className="flex overflow-x-auto no-scrollbar pb-6 gap-8 pl-1">
        {data.map((d) => (
          <CategoryMenuCard name={d.name} image={d.image} />
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
