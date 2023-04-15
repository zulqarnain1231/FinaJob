import React from "react";
import Checkbox from "@mui/material/Checkbox";

interface Props {
  isChecked: boolean;
  setIsChecked: any;
}

const CheckBox: React.FC<Props> = ({ isChecked, setIsChecked }) => {
  return (
    <Checkbox
      checked={isChecked}
      sx={{
        "&.Mui-checked": {
          color: "#016777",
        },
      }}
      onChange={setIsChecked}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

export default CheckBox;
