import React, { useState, FormEvent } from "react";
import Dialog from "@mui/material/Dialog";
import { RxCross1 } from "react-icons/rx";
import ToggleSwitch from "./ToggleSwitch";
import CheckBox from "./CheckBox";
import { dialogFilterTypes } from "../../../types/types";

interface props {
  Open: boolean;
  CloseEvent: () => void;
  SubmitEvent: (event: FormEvent<HTMLFormElement>) => void;
  style?: string;
}

function FilterDialogue({ Open, CloseEvent, SubmitEvent, style }: props) {
  const [filters, setFilters] = useState<dialogFilterTypes>({
    easyApply: false,
    partTime: false,
    fullTime: false,
    noExperience: false,
    imediateStart: false,
    french: false,
    italian: false,
    english: false,
    spanish: false,
    german: false,
  });
  // function to select or unselect a selected a filter
  const toggleFilters = (filter: keyof dialogFilterTypes) => {
    setFilters((prevState) => ({
      ...prevState,
      [filter]: !prevState[filter],
    }));
  };
  return (
    <Dialog
      open={Open}
      sx={{
        "& .MuiPaper-root": {
          background: "#FFFFFF",
          borderRadius: "8px",
          maxWidth: "unset",
        },
        "& ::-webkit-scrollbar": {
          width: "0px",
          height: "0px",
        },
      }}
    >
      <form onSubmit={SubmitEvent} className={`sm:w-[600px] ${style}`}>
        <div className="w-full bg-brand-main h-[60px] flex sm:gap-0 gap-4 justify-between items-center p-4 sm:p-6">
          <h2 className="font-inter font-semibold text-lg text-white text-center capitalize">
            Filters
          </h2>
          <button
            type="button"
            onClick={CloseEvent}
            className="font-semibold p-1.5 bg-red-500 text-white rounded-full"
          >
            <RxCross1 size={16} />
          </button>
        </div>
        <div className="max-h-[450px] p-4 sm:p-6 overflow-auto">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex items-center justify-between py-2 border-b-[2px]">
              <p className="font-inter font-semibold text-[15px] text-black-main">
                Easy Apply
              </p>
              <ToggleSwitch
                isChecked={filters.easyApply}
                setIsChecked={() => toggleFilters("easyApply")}
              />
            </div>
            <div className="w-full flex flex-col gap-2 py-2 border-b-[2px]">
              <p className="font-inter font-semibold text-[15px] text-black-main">
                Employment Types
              </p>
              <div className="w-full flex items-center gap-1">
                <CheckBox
                  isChecked={filters.partTime}
                  setIsChecked={() => toggleFilters("partTime")}
                />
                <p className="font-inter font-medium text-[15px] text-black-main">
                  Part-Time
                </p>
              </div>
              <div className="w-full flex items-center gap-1">
                <CheckBox
                  isChecked={filters.fullTime}
                  setIsChecked={() => toggleFilters("fullTime")}
                />
                <p className="font-inter font-medium text-[15px] text-black-main">
                  Full-Time
                </p>
              </div>
            </div>
            <div className="w-full flex items-center justify-between py-2 border-b-[2px]">
              <p className="font-inter font-semibold text-[15px] text-black-main">
                Immediate start
              </p>
              <ToggleSwitch
                isChecked={filters.imediateStart}
                setIsChecked={() => toggleFilters("imediateStart")}
              />
            </div>
            <div className="w-full flex items-center justify-between py-2 border-b-[2px]">
              <p className="font-inter font-semibold text-[15px] text-black-main">
                No experience
              </p>
              <ToggleSwitch
                isChecked={filters.noExperience}
                setIsChecked={() => toggleFilters("noExperience")}
              />
            </div>
            <div className="w-full flex flex-col gap-2 py-2 border-b-[2px]">
              <p className="font-inter font-semibold text-[15px] text-black-main">
                Languages
              </p>
              <div className="w-full grid grid-cols-2">
                <div className="w-full flex items-center gap-1">
                  <CheckBox
                    isChecked={filters.english}
                    setIsChecked={() => toggleFilters("english")}
                  />
                  <p className="font-inter font-medium text-[15px] text-black-main">
                    English
                  </p>
                </div>
                <div className="w-full flex items-center gap-1">
                  <CheckBox
                    isChecked={filters.spanish}
                    setIsChecked={() => toggleFilters("spanish")}
                  />
                  <p className="font-inter font-medium text-[15px] text-black-main">
                    Spanish
                  </p>
                </div>
                <div className="w-full flex items-center gap-1">
                  <CheckBox
                    isChecked={filters.italian}
                    setIsChecked={() => toggleFilters("italian")}
                  />
                  <p className="font-inter font-medium text-[15px] text-black-main">
                    Italian
                  </p>
                </div>
                <div className="w-full flex items-center gap-1">
                  <CheckBox
                    isChecked={filters.german}
                    setIsChecked={() => toggleFilters("german")}
                  />
                  <p className="font-inter font-medium text-[15px] text-black-main">
                    German
                  </p>
                </div>
                <div className="w-full flex items-center gap-1">
                  <CheckBox
                    isChecked={filters.french}
                    setIsChecked={() => toggleFilters("french")}
                  />
                  <p className="font-inter font-medium text-[15px] text-black-main">
                    French
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-6 items-center justify-end p-4 sm:px-6 sm:py-4 ">
          <button
            onClick={CloseEvent}
            type="button"
            className={`font-inter font-bold text-[14px] leading-[21px] text-center text-white bg-red-500  h-[40px] w-[100px] rounded-[6px] `}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`font-inter font-bold text-[14px] leading-[21px] text-center text-black-main bg-transparent border-2 h-[40px] w-[100px] rounded-[6px] `}
          >
            Search
          </button>
        </div>
      </form>
    </Dialog>
  );
}

export default FilterDialogue;
