import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import reading from "../../public/reading.svg";
import WordCycle from "../components/WordCycle";
import LevitateImage from "../components/LevitateImage";

const IntroductionSegment = () => {
    const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isXlUp = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMdUp ? "row" : "column",
        justifyContent: "space-evenly",
        p: 15,
      }}
    >
      <Box
        flex={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 5,
          alignContent: "center",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant={isXlUp ? "h2" : isLgUp ? "h2" : isMdUp ? "h3" : "h4"}
          sx={{ mb: 30, fontWeight: "Bold" }}
        >
          دسترسی به منابع علمی و فرهنگی به روشی{" "}
          <WordCycle
            words={["آسان", "آزاد", "امن"]}
            variant={isXlUp ? "h2" : isLgUp ? "h2" : isMdUp ? "h3" : "h4"}
          />
        </Typography>
        <Typography
          variant={isXlUp ? "h4" : isLgUp ? "h5" : isMdUp ? "h6" : "body2"}
        >
          این کتابخانه مجموعه‌ای از کتاب‌ها را که تحت مجوز کریتیو کامنز است، به
          شما ارائه خواهد داد. هدف ما دسترسی آسان و آزاد به منابع علمی و فرهنگی
          برای همگان است.
        </Typography>
      </Box>
      <Box
        flex={1}
        sx={{
          display: "flex",
          p: 5,
          alignContent: "center",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <LevitateImage>
          <Image
            src={reading}
            alt="logo"
            width={isXlUp ? 800 : isLgUp ? 500 : isMdUp ? 400 : 300}
            style={{ flex: 1, padding: 5, margin: 50 }}
          />
        </LevitateImage>
      </Box>
    </Box>
  )
}

export default IntroductionSegment