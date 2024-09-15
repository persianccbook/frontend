import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import bookCover from "../../public/book-cover.jpg";
import Image from "next/image";

const BookSegment = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const truncateString = (str: string, maxLength: number): string => {
    const words = str.split(" ");
    console.log(words);
    let truncatedString = "";
    let currentLength = 0;
    for (let word of words) {
      if (currentLength + word.length + 1 <= maxLength) {
        truncatedString += word + " ";
        currentLength += 1;
      } else {
        break;
      }
    }
    if (truncatedString.length < str.length) {
      truncatedString += "...";
    }
    return truncatedString;
  };

  const [bookName, description, author, timeOfPub] = [
    "اسم کتاب",
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    "نویسنده ی مهربان",
    "بهمن 1403",
  ];
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "flex-start",
        mb: 10,
        p: 15,
        flexDirection: isMdUp ? "row" : "column",
        gap: 5,
      }}
      elevation={1}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          flexDirection: isMdUp ? "row" : "column",
          width: isMdUp ? "30%" : "100%",
          maxHeight: isMdUp ? "50vh" : "auto",
          gap: 5,
        }}
      >
        {isMdUp && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              gap: 5,
            }}
          >
            <Image
              src={bookCover}
              alt="book"
              style={{
                objectFit: "contain",
                height: "30%",
                width: isMdUp ? "100%" : "20%",
                flexGrow: 1,
                filter: "brightness(0.7)",
              }}
            />
            <Image
              src={bookCover}
              alt="book"
              style={{
                objectFit: "contain",
                height: "30%",
                width: isMdUp ? "100%" : "20%",
                flexGrow: 1,
                filter: "brightness(0.3)",
              }}
            />
            <Image
              src={bookCover}
              alt="book"
              style={{
                objectFit: "contain",
                height: "30%",
                width: isMdUp ? "100%" : "20%",
                flexGrow: 1,
                filter: "brightness(0.3)",
              }}
            />
          </Box>
        )}
        <Box sx={{ width: isMdUp ? "80%" : "100%", flexGrow: 1 }}>
          <Image
            src={bookCover}
            alt="current-book"
            style={{
              objectFit: "contain",
              height: isMdUp ? "100%" : "auto",
              width: isMdUp ? "auto" : "100%",
            }}
          />
        </Box>
        {!isMdUp && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              gap: 5,
            }}
          >
            <Image
              src={bookCover}
              alt="book"
              style={{
                objectFit: "contain",
                height: "auto",
                width: "20%",
                flexGrow: 1,
                filter: "brightness(0.7)",
              }}
            />
            <Image
              src={bookCover}
              alt="book"
              style={{
                objectFit: "contain",
                height: "auto",
                width: "20%",
                flexGrow: 1,
                filter: "brightness(0.3)",
              }}
            />
            <Image
              src={bookCover}
              alt="book"
              style={{
                objectFit: "contain",
                height: "auto",
                width: "20%",
                flexGrow: 1,
                filter: "brightness(0.3)",
              }}
            />
          </Box>
        )}
      </Box>
      <Paper
        elevation={0}
        sx={{
          width: isMdUp ? "70%" : "100%",
          p: 15,
          m: isMdUp ? "auto" : 0,
          height: isMdUp ? "auto" : "100%",
          maxHeight: isMdUp ? "50vh" : "auto",
        }}
      >
        <Typography variant="h3">{bookName}</Typography>
        <Typography variant="h4">نوشته: {author}</Typography>
        <Typography variant="body1">
          {isMdUp
            ? truncateString(description, 50)
            : truncateString(description, 30)}
        </Typography>
        <Typography variant="caption">منتشر شده در {timeOfPub}</Typography>
      </Paper>
    </Paper>
  );
};

export default BookSegment;
