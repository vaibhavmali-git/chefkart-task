import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col justify-center items-center gap-4 py-3 mx-6 mb-10">
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-200 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-600 p-3 border border-gray-200 rounded-lg" >
          {new Date().toUTCString().slice(0, 16)}
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;
