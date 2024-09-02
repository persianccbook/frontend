import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ position: "absolute", width: "100vw", bottom: "0px" }}>
      <Paper>
        <Typography variant="h1">Footer</Typography>
      </Paper>
    </Box>
  );
};

export default Footer;
