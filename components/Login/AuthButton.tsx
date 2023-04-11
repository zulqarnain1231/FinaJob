import React from "react";
interface Props {
  Icon: any;
  Text: string;
  OnClick: any;
}
const AuthButton: React.FC<Props> = ({ Icon, Text, OnClick }) => {
  return (
    <button
      type="button"
      onClick={OnClick}
      className="w-full h-[55px] flex items-center justify-center gap-3 border-[1px] border-grey-main rounded-[5px] hover:shadow-customShadow"
    >
      {Icon}
      <p className="font-inter font-semibold text-black/60 text-[16px] ">
        {Text}
      </p>
    </button>
  );
};

export default AuthButton;
