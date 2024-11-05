import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import bookCoverGreen from "../../public/book-cover-green.jpg";
import { useAnimate } from "framer-motion";
import useInterval from "../hooks/useInterval";
import useTopBooks from "../hooks/useTopBooks";

// TODO: use nextjs image component and optimize images
const BookSegment = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [index, setIndex] = useState(0);
  const [coverImageScope, coverImageAnimate] = useAnimate();
  const [textScope, textAnimate] = useAnimate();
  const { data, error } = useTopBooks();

  const books = data?.data.payload.books;
  const booksCount = books?.length ? books?.length - 1 : 3;

  useInterval(
    () => {
      console.log("interval");
      index === booksCount ? setIndex(0) : setIndex(index + 1);
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

  if (error) return <Typography>{error.message}</Typography>;


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
            {books?.map((book, bookIndex) => (
              <img
                onClick={() => setIndex(bookIndex)}
                src={book.cover_image ? book.cover_image : bookCoverGreen.src}
                alt={book.title}
                key={book.id}
                width={500}
                height={500}
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
          <img
            ref={coverImageScope}
            src={
              books
                ? books[index].cover_image
                  ? books[index].cover_image
                  : bookCoverGreen.src
                : bookCoverGreen.src
            }
            alt={books ? books[index].title : ""}
            key={index}
            width={500}
            height={500}
            style={{
              objectFit: "contain",
              height: isMdUp ? "100%" : "auto",
              width: isMdUp ? "auto" : "100%",
              transformOrigin: isMdUp
                ? index === 0
                  ? "top right"
                  : index === 1
                  ? "right"
                  : "bottom right"
                : index === 0
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
            {books?.map((book, bookIndex) => (
              <img
                onClick={() => setIndex(bookIndex)}
                src={book.cover_image ? book.cover_image : bookCoverGreen.src}
                alt={book.title}
                key={book.id}
                width={500}
                height={500}
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
        <Typography variant="h3">{books ? books[index].title : ""}</Typography>
        <Typography variant="h4">
          نوشته: {books ? books[index].authors : ""}
        </Typography>
        <Typography variant="body1">
          {isMdUp
            ? truncateString(
                books && books[index].description
                  ? books[index].description
                  : "",
                50
              )
            : truncateString(
                books && books[index].description
                  ? books[index].description
                  : "",
                30
              )}
        </Typography>
        <Typography variant="caption">
          منتشر شده در{" "}
          {books && books[index].published ? books[index].published : ""}
        </Typography>
      </Paper>
    </Paper>
  );
};

export default BookSegment;
