import React, { useState } from "react";
import PasswordInput from "../Shared/Inputs/PasswordInput";
import Button from "../Shared/Buttons/Button";
import Link from "next/link";

const ForgetPassword = () => {
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [Inputs, SetInputs] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  const handleInputs = (event: any) => {
    const { name, value } = event.target;
    SetInputs({ ...Inputs, [name]: value });
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-screen grid md:grid-cols-4">
      <form
        onSubmit={submitForm}
        className="w-full h-full flex flex-col md:col-span-2 lg:col-span-1 gap-8 justify-center bg-white p-4"
      >
        <p className="font-inter font-semibold text-2xl text-black">
          Forget Password
        </p>
        {!otpSent && (
          <div className="w-full">
            <Button
              OnCLick={() => setOtpSent(true)}
              variant="contained"
              style="bg-brand-main text-white h-[50px] w-full"
              Type="button"
              Text="Send OTP"
            />
          </div>
        )}

        {otpSent && (
          <div className="w-full flex flex-col  gap-6">
            <div className="w-full flex flex-col gap-3 items-center justify-center">
              <PasswordInput
                Name="newPassword"
                IsCompulsory={true}
                state={Inputs.newPassword}
                SetState={handleInputs}
                label="New Password"
              />
              <PasswordInput
                Name="confirmNewPassword"
                IsCompulsory={true}
                state={Inputs.confirmNewPassword}
                SetState={handleInputs}
                label="Confirm Password"
              />
            </div>
            <Button
              OnCLick={() => setOtpSent(true)}
              variant="contained"
              style="bg-brand-main text-white h-[45px]"
              Type="submit"
              Text="Reset"
             
            />

            <div className="w-full flex gap-4">
              <p className="font-inter text-black-main text-left text-[13px] font-medium">{`Create New account?`}</p>
              <Link
                href={"/signup"}
                className="font-inter text-black-abbey text-[13px] font-medium"
              >
                Signup
              </Link>
            </div>
          </div>
        )}
      </form>
      <div className='w-full h-full hidden md:flex md:col-span-2 lg:col-span-3 bg-[url("/ForgetPassword/forgetPassword.jpg")] bg-cover bg-no-repeat' />
    </div>
  );
};

export default ForgetPassword;
