import React from "react";
import Switch from "@mui/material/Switch";

interface Props {
  isChecked: boolean;
  setIsChecked: any;
}

const ToggleSwitch: React.FC<Props> = ({ isChecked, setIsChecked }: Props) => {
  return (
    <Switch
      checked={isChecked}
      sx={{
        "& .Mui-checked": {
          color: "#016777",
        },
      }}
      onChange={setIsChecked}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

export default ToggleSwitch;
