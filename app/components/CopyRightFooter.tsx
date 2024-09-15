import { Box, Link, Paper } from "@mui/material";
import React from "react";

const CopyRightFooter = () => {
  const currentYear = new Date().getFullYear();
  const yourName = " علیرضا صدیقی";
  const yourLink = "";

  return (
    <Paper
      elevation={0}
      sx={{ display:"flex",flexDirection:"column",alignItems:'center',m:5}}
    >
      <Box>
        ساخته شده توسط
        <Link href={yourLink} underline="none" sx={{ pr: 2 }}>
          {yourName}
        </Link>.
        تمامی حقوق این وبسایت متعلق به کتابخانه آزاد پارسی می‌باشد.
      </Box>
      <Box sx={{ direction: "ltr" }}>
        &copy; {currentYear}. All rights reserved.
      </Box>
    </Paper>
  );
};

export default CopyRightFooter;
