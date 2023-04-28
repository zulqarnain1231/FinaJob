import React from "react";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Button from "../../Shared/Buttons/Button";

const EmployerInfo = () => {
  return (
    <div className="w-full h-[280px] flex flex-col gap-2 border rounded-[8px] p-4">
      {/* employer name and info here */}
      <div className="w-full flex items-center justify-between">
        <p className="font-inter font-bold text-[20px] text-black-main">
          Car Developer
        </p>
        <Link
          className="font-inter font-bold text-[20px] text-indigo-500"
          href={"/employer/2"}
        >
          More Info
        </Link>
      </div>
      <div className="w-full flex flex-col gap-2">
        <p className="font-inter font-medium text-black-abbey/70 text-[14px]">
          Job • 1-10 Employees
        </p>
        <p className="font-inter font-medium text-black-abbey/70 text-[14px]">
          Hiring with us since June, 2022
        </p>
      </div>
      <p className="font-inter font-medium text-black-main text-[16px]">
        Developer Car
      </p>
      <p className="font-inter font-bold text-black-main text-lg">Hiring by</p>
      <div className="w-full flex justify-between items-center gap-2">
        <Avatar
          sx={{ bgcolor: deepOrange[500], width: 56, height: 56 }}
          variant="rounded"
        >
          J
        </Avatar>
        <div className="flex flex-col gap-1">
          <p className="font-inter font-bold text-black-main text-lg">
            Jhon Patrik
          </p>
          <p className="font-inter font-medium text-black-abbey/70 text-[14px]">
            Owner•Active 2 months ago
          </p>
        </div>
        <Button
          OnCLick={() => {}}
          Text="Chat"
          variant="outlined"
          style="border-indigo-400 text-indigo-500 border h-[46px] w-[80px]"
        />
      </div>
    </div>
  );
};

export default EmployerInfo;
