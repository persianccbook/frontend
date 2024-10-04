import { Box, Paper } from "@mui/material";
import React from "react";
import CopyRightFooter from "./CopyRightFooter";
import SocialMediaSegment from "./SocialMedia";
import InfoSegment from "./Info";

const Footer = () => {
  return (
    <Box sx={{ width: "100" }}>
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          justifyContent: "space-around",
        }}
      >
        <InfoSegment />
        <SocialMediaSegment />
      </Paper>
      <CopyRightFooter />
    </Box>
  );
};

export default Footer;
