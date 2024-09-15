"use client";

import { Box } from "@mui/material";
import IntroductionSegment from "./(home)/IntroductionSegment";
import BookSegment from "./(home)/BookSegment";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifySelf: "center",
        maxWidth: 2000,
        m: "0 auto",
      }}
    >
      <IntroductionSegment />
      <BookSegment />
    </Box>
  );
};

export default HomePage;
