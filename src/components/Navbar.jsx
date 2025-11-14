import React from "react";

const Navbar = ({ handlecompleted, handletasks, handlepending }) => {
  return (
    <nav className="flex justify-between items-center bg-[#f4efe6] text-gray-700 py-4 px-8 shadow-sm border-b border-[#e5dcc8] sticky top-0 z-50">
      <div className="logo">
        <span className="font-extrabold text-2xl tracking-tight text-gray-800">
          iTask
        </span>
      </div>

      <ul className="flex gap-10 text-lg font-medium">
        <li
          onClick={handletasks}
          className="cursor-pointer hover:text-[#6d5dfc] transition-colors"
        >
          All
        </li>
        <li
          onClick={handlepending}
          className="cursor-pointer hover:text-[#6d5dfc] transition-colors"
        >
          Pending
        </li>
        <li
          onClick={handlecompleted}
          className="cursor-pointer hover:text-[#6d5dfc] transition-colors"
        >
          Completed
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
