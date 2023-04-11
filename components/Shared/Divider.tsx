import React from "react";
import { Divider as MuiDivider } from '@mui/material';

interface props {
  Content?: string
}

const Divider = ({ Content }: props) => {
  return <div><MuiDivider sx={{ fontFamily: "Inter", fontSize: "14px", my: { md: 2, xs: 1 } }} >{Content}</MuiDivider></div>
};

export default Divider;
