import { Box, Link, Paper, Typography } from "@mui/material";
import React from "react";

const CopyRightFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Paper
      elevation={0}
      sx={{ display:"flex",flexDirection:"column",alignItems:'center',m:5}}
    >
      <Typography variant="caption">
        تمامی حقوق این وبسایت متعلق به کتابخانه آزاد پارسی می‌باشد.
      </Typography>
      <Typography variant="caption" sx={{ direction: "ltr" }}>
        &copy; {currentYear}. All rights reserved.
      </Typography>
    </Paper>
  );
};

export default CopyRightFooter;
