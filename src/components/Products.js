import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/products";
import ProductCard from "./ProductCard";

function Products() {
  let { menuId } = useParams();
  console.log(menuId);
  return (
    <div className="mt-4 ">
      <h4 className="text-sm text-slate-300 pl-4 xl:hidden">
        Zobrazeno {data.length} produktů podle{" "}
        <span className="text-[#F58A8A] underline">
          {menuId.toLocaleUpperCase()}
        </span>
      </h4>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:h-[564px] xl:overflow-y-auto no-scrollbar">
        {menuId === "undefined" ||
          (menuId === "category" &&
            data.map((p, i) => <ProductCard key={i} image={p.image} />))}
        {data
          .filter((d) => d.wishlist === true && menuId === "wishlist")
          .map((p, i) => (
            <ProductCard key={i} image={p.image} />
          ))}
        {data
          .filter((d) => d.recomended === true && menuId === "recomended")
          .map((p, i) => (
            <ProductCard key={i} image={p.image} />
          ))}
        {data
          .filter((d) => d.category === menuId)
          .map((p, i) => (
            <ProductCard key={i} image={p.image} />
          ))}
      </div>
    </div>
  );
}

export default Products;
