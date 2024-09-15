
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import CopyRightFooter from "./CopyRightFooter";

const Footer = () => {
  return (
    <Box sx={{ width: "100"}}>
      <Paper elevation={5}>
        <Typography variant="h1">Footer</Typography>
      </Paper>
      <CopyRightFooter/>
    </Box>
  );
};

export default Footer;
