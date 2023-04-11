import React from "react";
import { Divider as MuiDivider } from '@mui/material';

interface props {
  Content?: string;
  styles?: string
}

const Divider = ({ Content, styles }: props) => {
  return <div className={styles} ><MuiDivider sx={{ fontFamily: "Inter", fontSize: "14px", my: { md: 2, xs: 1 } }} >{Content}</MuiDivider></div>
};

export default Divider;
