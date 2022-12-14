import React from "react";
import ProductCard from "./ProductCard";

function Products() {
  const data = [
    {
      image:
        "https://scontoeshop.vshcdn.net/content/images/product/default/aqua_37062.jpg",
      category: "sedaci_soupravy",
      wishlist: true,
      recomended: true,
    },
    {
      image:
        "https://www.hezkynabytek.cz/images/MOB_82/KINETON/ITAKA10/Kineton_itaka10_4.jpg",
      category: "sedaci_soupravy",
      wishlist: false,
      recomended: true,
    },
    {
      image:
        "https://www.signal-nabytek.cz/ver/20220627015025/variant/eshop/product-detail/edeeshop/product/galerie/070-0185/kb77.jpg",
      category: "sedaci_soupravy",
      wishlist: true,
      recomended: false,
    },
    {
      image:
        "https://www.kasvo.cz/productphoto/5a0279406f4649a00edfb4fdb71c5c5db1eee84f/",
      category: "sedaci_soupravy",
      wishlist: false,
      recomended: false,
    },
    {
      image: "https://media.moebelix.com/i/moebelix/PICkD8oJatyjOF8t4ErntsAA",
      category: "kresla",
      wishlist: false,
      recomended: false,
    },
    {
      image:
        "https://www.designpropaganda.cz/galerie_produkty/big/46183_sphaus-designove-zahradni-kresla-fargo-80.jpg",
      category: "kresla",
      wishlist: true,
      recomended: true,
    },
    {
      image: "https://www.dako.cz/obr/typ1/attachments/kreslo-brixton.png",
      category: "kresla",
      wishlist: true,
      recomended: false,
    },
    {
      image:
        "https://sobnabytek.cz/54854-large_default/drevena-postel-160x200-z-akacie-solomon-masiv.jpg",
      category: "postele",
      wishlist: true,
      recomended: false,
    },
    {
      image:
        "https://scontoeshop.vshcdn.net/content/images/product/default/maestro-1_26829.jpg",
      category: "postele",
      wishlist: false,
      recomended: true,
    },
    {
      image: "https://i00.eu/img/141/1024x1024/6srrnpt6/186559.jpg",
      category: "postele",
      wishlist: true,
      recomended: true,
    },
  ];
  console.log(sessionStorage.getItem("cat"));
  console.log(data.filter((d) => d.category === "postele"));

  return (
    <div className="mt-4 ">
      <h4 className="text-sm text-slate-300 pl-4 lg:hidden">
        Zobrazeno {data.length} produktů podle{" "}
        <span className="text-[#F58A8A] underline">Doporučené</span>
      </h4>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:h-[564px] lg:overflow-y-auto no-scrollbar">
        {sessionStorage.getItem("cat") === null &&
          data.map((d, i) => <ProductCard key={i} image={d.image} />)}
        {sessionStorage.getItem("cat") !== null &&
          data
            .filter((d) => d.category === sessionStorage.getItem("cat"))
            .map((p, i) => <ProductCard key={i} image={p.image} />)}
        {/* {data.map((d, i) => (
          <ProductCard key={i} image={d.image} />
        ))} */}
      </div>
    </div>
  );
}

export default Products;
