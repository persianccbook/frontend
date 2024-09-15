import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import bookCoverRed from "../../public/book-cover-red.jpg";
import bookCoverGreen from "../../public/book-cover-green.jpg";
import bookCoverBlue from "../../public/book-cover-blue.jpg";
import Image, { StaticImageData } from "next/image";
import { useAnimate } from "framer-motion";
import useInterval from "../hooks/useInterval";

type Book = {
  bookName: string;
  description: string;
  author: string;
  timeOfPub: string;
  coverImage: StaticImageData;
};

const BookSegment = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [index, setIndex] = useState(0);
  const [coverImageScope, coverImageAnimate] = useAnimate();
  const [textScope, textAnimate] = useAnimate();

  useInterval(
    () => {
      console.log("interval");
      index === 2 ? setIndex(0) : setIndex(index + 1);
    },
    5000,
    [index]
  );

  useEffect(() => {
    console.log(index);
    coverImageAnimate(
      coverImageScope.current,
      {
        scale: [0.2, 1],
      },
      { duration: 1, ease: "easeInOut" }
    );
    textAnimate(
      textScope.current,
      { y: [10, 0], opacity: [0, 1] },
      { duration: 1, ease: "easeInOut" }
    );
  }, [index, coverImageScope, coverImageAnimate, textScope, textAnimate]);

  const truncateString = (str: string, maxLength: number): string => {
    const words = str.split(" ");
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

  const books: Book[] = [
    {
      bookName: "کتاب قرمز",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      author: "نویسنده مهربان",
      timeOfPub: "مهر 1403",
      coverImage: bookCoverRed,
    },
    {
      bookName: "کتاب آبی",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      author: "نویسنده خسته",
      timeOfPub: "آبان 1402",
      coverImage: bookCoverBlue,
    },
    {
      bookName: "کتاب سبز",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      author: "نویسنده عصبانی",
      timeOfPub: "آذر 1401",
      coverImage: bookCoverGreen,
    },
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
            {books.map((book, bookIndex) => (
              <Image
                onClick={() => setIndex(bookIndex)}
                src={book.coverImage}
                alt={book.bookName}
                key={book.bookName}
                style={{
                  objectFit: "contain",
                  height: "30%",
                  width: isMdUp ? "100%" : "20%",
                  flexGrow: 1,
                  filter:
                    index === bookIndex ? "brightness(0.7)" : "brightness(0.3)",
                  scale: index === bookIndex ? 1 : 0.9,
                  transition: "1s",
                }}
              />
            ))}
          </Box>
        )}
        <Box sx={{ width: isMdUp ? "80%" : "100%", flexGrow: 1 }}>
          <Image
            ref={coverImageScope}
            src={books[index].coverImage}
            alt={books[index].bookName}
            key={index}
            style={{
              objectFit: "contain",
              height: isMdUp ? "100%" : "auto",
              width: isMdUp ? "auto" : "100%",
              transformOrigin:
                isMdUp?
                index === 0
                  ? "top right"
                  : index === 1
                  ? "right"
                  : "bottom right"
                  :index === 0
                  ? "bottom right"
                  : index === 1
                  ? "bottom"
                  : "bottom left",
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
            {books.map((book, bookIndex) => (
              <Image
                onClick={() => setIndex(bookIndex)}
                src={book.coverImage}
                alt={book.bookName}
                key={book.bookName}
                style={{
                  objectFit: "contain",
                  height: "auto",
                  width: "20%",
                  flexGrow: 1,
                  filter:
                    index === bookIndex ? "brightness(0.7)" : "brightness(0.3)",
                  scale: index === bookIndex ? 1 : 0.9,
                  transition: "1s ease-in-out",         
                }}
              />
            ))}
          </Box>
        )}
      </Box>
      <Paper
        ref={textScope}
        elevation={0}
        sx={{
          width: isMdUp ? "70%" : "100%",
          p: 15,
          m: isMdUp ? "auto" : 0,
          height: isMdUp ? "auto" : "100%",
          maxHeight: isMdUp ? "50vh" : "auto",
        }}
      >
        <Typography variant="h3">{books[index].bookName}</Typography>
        <Typography variant="h4">نوشته: {books[index].author}</Typography>
        <Typography variant="body1">
          {isMdUp
            ? truncateString(books[index].description, 50)
            : truncateString(books[index].description, 30)}
        </Typography>
        <Typography variant="caption">
          منتشر شده در {books[index].timeOfPub}
        </Typography>
      </Paper>
    </Paper>
  );
};

export default BookSegment;
