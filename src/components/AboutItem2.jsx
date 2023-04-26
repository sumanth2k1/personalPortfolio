import React from "react";

export default function AboutItem2({title, details }) {
  return (

      <div className="flex flex-col md:flex-row relative border-l border-stone-200 justify-center">
        <div className="border-2 rounded-md  border-[#001b5e] md:w-2/3 md md:md:p-6 p-4 m-3 md:text-xl hover:border-2 hover:border-blue-500">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-[#001b5e]" />
          <h1>
            <span className="font-semibold">{title} :- </span>
            {details}
          </h1>
        </div>
      </div>
  );
}
