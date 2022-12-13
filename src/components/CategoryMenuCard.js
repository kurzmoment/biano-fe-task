import React from "react";

function CategoryMenuCard(props) {
  return (
    <div className="">
      <div className="flex flex-col w-16 items-center">
        <img
          className="rounded-xl shadow-xl m-2 w-16 h-12"
          src={props.image}
          alt={props.name}
        />
        <div>
          <p className="text-[12px] text-center p-2">{props.name}</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryMenuCard;
