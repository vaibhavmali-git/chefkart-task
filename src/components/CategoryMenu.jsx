import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6">

      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden justify-center items-center">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-orange-500 hover:text-white ${selectedCategory === "All" && "bg-orange-500 text-white"
            }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-orange-500 hover:text-white ${selectedCategory === category && "bg-orange-500 text-white"
                } `}
            >
              {category}
            </button>
          );
        })}
      </div>
      <h3 className="text-xl font-semibold">Recommended</h3>
    </div>
  );
};

export default CategoryMenu;