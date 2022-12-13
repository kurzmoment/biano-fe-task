import React from "react";

function CategoryMenuCard(props) {
  return (
    <div className="lg:shadow-xl lg:m-2 lg:rounded-xl lg:hover:scale-110 lg:transition-all">
      <div className="flex flex-col w-16 lg:w-32 items-center md:rouded-3xl">
        <img
          className="rounded-xl lg:rounded-t-md lg:rounded-none shadow-xl lg:shadow-none m-2 w-16 lg:w-32 h-12 lg:h-24"
          src={props.image}
          alt={props.name}
        />
        <div>
          <p className="text-[12px] lg:text-[14px] text-center p-2 lg:mb-2 lg:p-0">
            {props.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategoryMenuCard;
