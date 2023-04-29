import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from "@mui/material/CircularProgress";

const Loading = () => {
  function FacebookCircularProgress(props: CircularProgressProps) {
    return (
      <Box sx={{ position: "relative" }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: (theme) =>
              theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
          }}
          size={80}
          thickness={4}
          {...props}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: (theme) =>
              theme.palette.mode === "light" ? "#016777" : "#308fe8",
            animationDuration: "550ms",
            position: "absolute",
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round",
            },
          }}
          size={80}
          thickness={4}
          {...props}
        />
      </Box>
    );
  }

  return (
    <div className="absolute left-0 top-0 bg-black-main/80 w-full h-screen overflow-hidden flex justify-center items-center">
      <FacebookCircularProgress />
    </div>
  );
};

export default Loading;
