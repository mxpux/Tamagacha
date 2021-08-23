import React from "react";

const liCls =
  "p-3 border text-gray-700 hover:text-white hover:bg-indigo-700 cursor-pointer";

const DropDownCard = ({ data = [], setOpen }) => (
  <div className="shadow h-auto w-auto">
    <ul className="text-right">
      {data.map((item, i) => (
        <li key={i} className={liCls} onClick={() => setOpen(false)}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default DropDownCard;
