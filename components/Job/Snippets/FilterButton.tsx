import React from "react";
import {FiFilter} from "react-icons/fi"
interface Props {
  setState?: any;
}

const FilterButton: React.FC<Props> = ({ setState }) => {
  return (
    <button
      onClick={setState}
      className={`w-[110px] h-[46px] flex justify-center items-center gap-2 border text-black-main rounded-[6px] text-[15px]  font-inter font-normal hover:border-indigo-500 duration-300 `}
    >
    <FiFilter size={20} />
    Filters
    </button>
  );
};

export default FilterButton;
