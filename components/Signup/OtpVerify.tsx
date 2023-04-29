import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { RxCross1 } from "react-icons/rx";
import Button from "../Shared/Buttons/Button";
import api from "../../utils/axiosInstance";
import OtpInput from "react-otp-input";
import LogError from "../../utils/LogError";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../Shared/Toasts/Notification";
import { useRouter } from "next/router";

interface props {
  Open: boolean;
  close: () => void;
  style?: string;
  user: any;
}

function OtpVerifyPop({ Open, close, style, user }: props) {
  const Router = useRouter();
  const [otp, setOtp] = useState("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post("/verifyOTP", { otp });
      if (response) {
        if (response?.status === 200) {
          ToastSuccess("Verification successful.");
          Router.push("/login");
        }
      }
    } catch (error) {
      LogError("VerifyOTP", error);
      ToastError("Unable to verify");
    }
  };
  const reSendOtp = async () => {
    try {
      const response = await api.post("/resendOTP", { email: user?.email });
      if (response) {
        if (response?.status === 200) {
          ToastSuccess(response?.data?.message);
        }
        if (response?.status === 404) {
          ToastWarning(response?.data?.message);
        }
      }
    } catch (error) {
      LogError("Re-Send OTP", error);
      ToastError("Unable to send otp");
    }
  };
  return (
    <Dialog
      open={Open}
      sx={{
        "& .MuiPaper-root": {
          background: "transparent",
          borderRadius: "8px",
          maxWidth: "unset",
        },
        "& ::-webkit-scrollbar": {
          width: "0px",
          height: "0px",
        },
      }}
    >
      <div className={`sm:w-[500px] ${style}`}>
        <div className="w-full h-[60px] bg-brand-main flex sm:gap-0 gap-4 justify-between items-center p-4 sm:p-6">
          <h2 className="font-inter font-semibold text-lg text-white text-center capitalize">
            Verification
          </h2>
          <RxCross1
            onClick={close}
            size={16}
            color="white"
            className="cursor-pointer"
          />
        </div>
        <form
          onSubmit={onSubmit}
          className="w-full flex justify-center items-center flex-col p-6 bg-white"
        >
          <h4 className="font-Inter text-[18px] font-normal text-black-main">
            Please check your email for verification code.
          </h4>
          <div className="flex justify-center items-center mt-4">
            <OtpInput
              containerStyle={{
                display: "flex",
                gap: "4px",
                justifyItems: "center",
                alignItems: "center",
              }}
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="min-w-[40px] h-[40px] font-inter text-black-main outline-brand-main border-[1px] border-brand-main text-center rounded-[6px]"
                />
              )}
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <Button
              OnCLick={() => {}}
              variant="contained"
              style="bg-brand-main text-white h-[45px] mt-6 w-[120px]"
              Type="submit"
              Text="Verify"
            />
            {user !== null && (
              <Button
                OnCLick={reSendOtp}
                variant="contained"
                style="bg-brand-main text-white h-[45px] mt-6 w-[120px]"
                Type="button"
                Text="Re-send"
              />
            )}
          </div>
        </form>
      </div>
    </Dialog>
  );
}

export default OtpVerifyPop;
