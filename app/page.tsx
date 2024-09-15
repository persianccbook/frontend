"use client";

import { Box } from "@mui/material";
import IntroductionSegment from "./(home)/IntroductionSegment";

const HomePage = () => {
  return (
    <Box sx={{display:'flex',justifySelf:'center',maxWidth:2000,m:'0 auto'}}>
      <IntroductionSegment />
    </Box>
  );
};

export default HomePage;
