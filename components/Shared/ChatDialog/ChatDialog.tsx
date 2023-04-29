import React from "react";
import Dialog from "@mui/material/Dialog";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

interface props {
  Open: boolean;
  CloseEvent: () => void;
  style?: string;
}

function ChatDialog({ Open, CloseEvent, style }: props) {
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
      <div className={`sm:w-[800px]  ${style}`}>
        <div className="w-full bg-brand-main h-[70px] flex sm:gap-0 gap-4 justify-between items-center p-4 sm:p-6">
          <h2 className="font-inter font-semibold text-2xl text-white text-center capitalize">
            Download The App
          </h2>
          <button
            type="button"
            onClick={CloseEvent}
            className="font-semibold p-1.5 bg-red-500 text-white rounded-full"
          >
            <RxCross1 size={16} />
          </button>
        </div>
        
          <div className="w-full max-h-[500px] grid md:grid-cols-2 gap-6 p-4 sm:p-6 overflow-auto">
            {/* left qr code div here*/}
            <div className="w-full flex flex-col items-center justify-center gap-6">
              <p className="font-inter font-medium text-black-main text-[16px]">
                Scan the QR code to download the app to{" "}
                <span className="font-bold">chat with employers</span>, apply to
                jobs in one click, create your CV and follow companies you are
                interested in.
              </p>
              <div className="h-[200px] w-[200px] relative">
                <Image src={"/MobileApp/QR.webp"} alt="" fill />
              </div>
              <p className="font-inter font-medium text-black-abbey/70 text-[16px]">
                Or download the app from the app stores:
              </p>
              <div className="w-full h-[40px] flex justify-center items-center gap-4">
                <div className="h-full w-[120px] relative">
                  <Image src={"/MobileApp/white-appstore.webp"} alt="" fill />
                </div>
                <div className="h-full w-[120px] relative">
                  <Image src={"/MobileApp/white-playstore.webp"} alt="" fill />
                </div>
              </div>
            </div>
            {/* right div here */}
            <div className="w-full h-full flex iem-center justify-center">
            <div className="md:w-full w-[300px] h-[300px] md:h-full relative">
              <Image src={"/MobileApp/mobileApp.webp"} alt="" fill />
            </div>
            </div>
           
          </div>
       
      </div>
    </Dialog>
  );
}

export default ChatDialog;
