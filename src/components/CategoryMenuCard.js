import React from "react";

function CategoryMenuCard(props) {
  return (
    <div className="md:shadow-xl md:m-2 md:rounded-xl">
      <div className="flex flex-col w-16 md:w-32 items-center md:rouded-3xl">
        <img
          className="rounded-xl md:rounded-t-md md:rounded-none shadow-xl md:shadow-none m-2 w-16 md:w-32 h-12 md:h-24"
          src={props.image}
          alt={props.name}
        />
        <div>
          <p className="text-[12px] md:text-[14px] text-center p-2 md:mb-2 md:p-0">
            {props.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategoryMenuCard;
