"use client";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { useRouter } from "next/navigation";

interface Book {
  title: string;
  id: number;
  author: string;
  description: string;
  coverUrl: string;
}

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [firstScope, firstAnimate] = useAnimate();
  const [secondScope, secondAnimate] = useAnimate();
  const [thirdScope, thirdAnimate] = useAnimate();
  const [fourthScope, fourthAnimate] = useAnimate();

  //TODO: seperate event listeners into a sepreate useEffect
  useEffect(() => {
    if (isHovered) {
      firstAnimate(firstScope.current, {
        x: 4,
        y: 3,
      });
      secondAnimate(secondScope.current, {
        x: -4,
        y: -3,
      });
      thirdAnimate(thirdScope.current, {
        x: -8,
        y: -6,
      });
      fourthAnimate(fourthScope.current, {
        rotate: -5,
        x: 4,
      });
    } else {
      firstAnimate(firstScope.current, {
        x: 0,
        y: 0,
      });
      secondAnimate(secondScope.current, {
        x: 0,
        y: 0,
      });
      thirdAnimate(thirdScope.current, {
        x: 0,
        y: 0,
      });
      fourthAnimate(fourthScope.current, {
        rotate: 0,
        x: 0,
      });
    }

    const handleMouseOver = () => {
      setIsHovered(true);
    };
    const handleMouseOut = () => {
      setIsHovered(false);
    };

    firstScope.current.addEventListener("mouseover", handleMouseOver);
    firstScope.current.addEventListener("mouseout", handleMouseOut);

    return () => {
      firstScope.current.removeEventListener("mouseover", handleMouseOver);
      firstScope.current.removeEventListener("mouseout", handleMouseOut);
    };
  }, [
    isHovered,
    firstScope,
    firstAnimate,
    secondScope,
    secondAnimate,
    thirdScope,
    thirdAnimate,
    fourthScope,
    fourthAnimate,
  ]);

  return (
    <motion.button
      ref={firstScope}
      style={{
        position: "relative",
        background: "black",
        border: "none",
        borderRadius: 12,
      }}
      onClick={() => {
        router.push(`/books/${book.id}`);
      }}
    >
      <Card
        ref={secondScope}
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 210,
          height: 300,
          backgroundColor: "primary.main",
          borderRadius: 3,
        }}
      ></Card>
      <Card
        ref={thirdScope}
        sx={{
          width: 210,
          height: 300,
          borderRadius: 3,
          backgroundImage: `url(${book.coverUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          mx: "auto",
          flexGrow: 1,
        }}
      >
        <CardContent
          ref={fourthScope}
          sx={{ p: 0, position: "absolute", right: 0, bottom: 5 }}
        >
          <Box
            sx={{
              position: "relative",
              width: 0,
              height: 0,
              borderTop: "15px solid rgba(0,0,0,.8)",
              borderRight: "180px solid rgba(0,0,0,.8)",
              borderLeft: "15px solid transparent",
              borderBottom: "15px solid rgba(0,0,0,.8)",
            }}
          >
            <Typography
              sx={{
                color: "white",
                position: "absolute",
                top: -7,
                right: -170,
                width: "max-content",
                maxWidth: "180px",
              }}
              variant="caption"
              component="h2"
            >
              {book.title}({book.author})
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.button>
  );
};

export default BookCard;
