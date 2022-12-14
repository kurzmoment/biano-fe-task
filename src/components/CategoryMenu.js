import React from "react";
import { data } from "../data/categoryData";
import CategoryMenuCard from "./CategoryMenuCard";

function CategoryMenu() {
  return (
    <div className="mt-4 ml-4 lg:ml-10">
      <div className="pb-4 ">
        <h2 className="font-semibold lg:text-[26px]">Nábytek</h2>
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
