import React from "react";

function CategoryMenuCard(props) {
  return (
    <div className="xl:shadow-xl xl:m-2 xl:rounded-xl md:hover:scale-110 md:transition-all">
      <div className="flex flex-col w-16 xl:w-32 lg:w-24 items-center xl:rouded-3xl">
        <img
          className="rounded-xl xl:rounded-t-md xl:rounded-none shadow-xl xl:shadow-none m-2 w-16 xl:w-32 h-12 xl:h-24 lg:w-24 lg:h-20"
          src={props.image}
          alt={props.name}
        />
        <div>
          <p className="text-[12px] xl:text-[14px] text-center p-2 xl:mb-2 xl:p-0">
            {props.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategoryMenuCard;
