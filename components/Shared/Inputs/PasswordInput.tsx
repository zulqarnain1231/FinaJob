import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface Props {
  label?: string;
  Name?: string;
  state?: string;
  SetState: any;
  IsCompulsory?: boolean;
}

const PasswordInput: React.FC<Props> = ({
  label = "Password",
  Name,
  state,
  SetState,
  IsCompulsory,
}: Props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={
      {
        "& label.Mui-focused": {
          color: "#016777"
        },
        '& .MuiOutlinedInput-root' :{
          '&.Mui-focused fieldset': {
            borderColor: '#016777',
            fontFamily:'Inter'
          }
        },
         width: "100%" }} variant="outlined">
      <InputLabel>{IsCompulsory ? `${label} *`:label}</InputLabel>
      <OutlinedInput
        name={Name}
        onChange={SetState}
        value={state}
        required={IsCompulsory}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? (
                <MdVisibilityOff size={25} />
              ) : (
                <MdVisibility size={25} />
              )}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
};
export default PasswordInput;
