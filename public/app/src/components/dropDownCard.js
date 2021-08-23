import React from "react";

const liCls =
  "p-3 text-gray-700 hover:text-white hover:bg-indigo-700 cursor-pointer";

const DropDownCard = ({ data = [], setOpen }) => (
  <div className="shadow h-auto w-auto" style={{backgroundColor: "white", position: "absolute", right: "0px"}}>
    <ul className="text-center">
      {data.map((item, i) => (
        <li key={i} className={liCls} onClick={() => setOpen(false)}><span>
            {item}
        </span>
        </li>
      ))}
    </ul>
  </div>
);

export default DropDownCard;
