import React from "react";
import Dialog from "@mui/material/Dialog";
import { RxCross1 } from "react-icons/rx";

interface props {
  Open: boolean;
  CloseEvent: () => void;
  style?: string;
  children: React.ReactNode;
  Title: string;
}

function DialogueWrapper({ Open, CloseEvent, style, children, Title }: props) {
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
      <div className={`sm:w-[600px]  ${style}`}>
        <div className="w-full bg-brand-main h-[60px] flex sm:gap-0 gap-4 justify-between items-center p-4 sm:p-6">
          <h2 className="font-inter font-semibold text-lg text-white text-center capitalize">
            {Title}
          </h2>
          <button
            type="button"
            onClick={CloseEvent}
            className="font-semibold p-1.5 bg-red-500 text-white rounded-full"
          >
            <RxCross1 size={16} />
          </button>
        </div>
        <div className="max-h-[450px] p-4 sm:p-6 overflow-auto">{children}</div>
        <div className="w-full flex gap-6 items-center justify-end px-4 sm:px-6 py-4 ">
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
            Save
          </button>
        </div>
      </div>
    </Dialog>
  );
}

export default DialogueWrapper;
