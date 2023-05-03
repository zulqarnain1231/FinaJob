import React, { useEffect, useState } from "react";
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

  const [canReSendOtp, setReSendOtp] = useState<boolean>(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (minutes === 0 && seconds === 0) setReSendOtp(true);
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds, minutes]);
  const SetTimer = () => {
    setMinutes(1);
    setSeconds(0);
  };
  useEffect(() => {
    setReSendOtp(false);
    SetTimer();
  }, []);

  const reSendOtp = async () => {
    try {
      const response = await api.post("/resendOTP", { email: user?.email });
      if (response) {
        if (response?.status === 200) {
          ToastSuccess(response?.data?.message);
          setReSendOtp(false);
          setMinutes(1);
          setSeconds(0);
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
            {canReSendOtp && ( // => Yes
              <Button
                OnCLick={reSendOtp}
                variant="contained"
                style="bg-brand-main text-white h-[45px] mt-6 w-[120px]"
                Type="button"
                Text="Re-send"
              />
            )}
            {!canReSendOtp && (
              <div
                onClick={SetTimer}
                className="font-inter font-bold text-[14px] leading-[21px] text-center min-w-[60px] border-[2px] border-transparent rounded-[6px] bg-brand-main disabled pointer-events-none flex justify-center items-center text-white h-[45px] mt-6 w-[120px]"
              >
                {"0" + minutes + ":"}
                {seconds < 10 ? `0${seconds}` : seconds}
              </div>
            )}
          </div>
        </form>
      </div>
    </Dialog>
  );
}

export default OtpVerifyPop;
