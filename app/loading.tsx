import { CircularProgress, Paper } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Paper sx={{display:'flex',justifyContent:'center',alignItems:'center', position: "fixed", top: 0, left: 0, right: 0, bottom: 0,width:'100vw',height:'100vh',zIndex:20 }} >
      <CircularProgress sx={{scale:3}}/>
    </Paper>
  );
};

export default Loading;
