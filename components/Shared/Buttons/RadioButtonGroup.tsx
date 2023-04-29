import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl } from "@mui/material";

interface props {
  firstOption: {
    label: string;
    value: string;
  };
  secondOption: {
    label: string;
    value: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function RadioButtonGroup({
  firstOption,
  secondOption,
  onChange,
  value,
}: props) {
  // const [value, setValue] = React.useState("female");

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue((event.target as HTMLInputElement).value);
  // };

  return (
    <RadioGroup
      row
      value={value}
      onChange={onChange}
    >
      <FormControlLabel
        value={firstOption.value}
        control={<Radio />}
        label={firstOption.label}
      />
      <FormControlLabel
        value={secondOption.value}
        control={<Radio />}
        label={secondOption.label}
      />
    </RadioGroup>
  );
}
