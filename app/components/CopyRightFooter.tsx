import { Box, Link, Paper } from "@mui/material";
import React from "react";

const CopyRightFooter = () => {
  const currentYear = new Date().getFullYear();
  const yourName = " علیرضا صدیقی";
  const yourLink = "https://mr-arsenic.is-a.dev/";

  return (
    <Paper
      elevation={0}
      sx={{ display:"flex",flexDirection:"column",alignItems:'center',m:5}}
    >
      <Box>
        ساخته شده توسط
        <Link href={yourLink} target="_blank" underline="none" sx={{ color:'secondary.main',pr: 2 }}>
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
