"use client";
import { Box, Grid } from "@mui/material";
import React from "react";
import BookCard from "./BookCard";
import bookCoverBlue from "../../public/book-cover-blue.jpg";
import bookCoverRed from "../../public/book-cover-red.jpg";
import bookCoverGreen from "../../public/book-cover-green.jpg";

const BooksPage = () => {
  const books = [
    {
      title: "کتاب آبی",
      id: 1,
      author: "نویسنده خسته و تنها",
      description: "description",
      coverUrl: bookCoverBlue.src,
    },
    {
      title: "کتاب قرمز",
      id: 2,
      author: "نویسنده خوشحال",
      description: "description",
      coverUrl: bookCoverRed.src,
    },
    {
      title: "کتاب سبز",
      id: 3,
      author: "نویسنده بدبخت ",
      description: "description",
      coverUrl: bookCoverGreen.src,
    },
    {
      title: "کتاب آبی",
      id: 4,
      author: "نویسنده خسته و تنها",
      description: "description",
      coverUrl: bookCoverBlue.src,
    },
    {
      title: "کتاب قرمز",
      id: 5,
      author: "نویسنده خوشحال",
      description: "description",
      coverUrl: bookCoverRed.src,
    },
    {
      title: "کتاب سبز",
      id: 6,
      author: "نویسنده بدبخت ",
      description: "description",
      coverUrl: bookCoverGreen.src,
    },
    {
      title: "کتاب آبی",
      id: 7,
      author: "نویسنده خسته و تنها",
      description: "description",
      coverUrl: bookCoverBlue.src,
    },
    {
      title: "کتاب قرمز",
      id: 8,
      author: "نویسنده خوشحال",
      description: "description",
      coverUrl: bookCoverRed.src,
    },
    {
      title: "کتاب سبز",
      id: 9,
      author: "نویسنده بدبخت ",
      description: "description",
      coverUrl: bookCoverGreen.src,
    },
    {
      title: "کتاب آبی",
      id: 10,
      author: "نویسنده خسته و تنها",
      description: "description",
      coverUrl: bookCoverBlue.src,
    },
    {
      title: "کتاب قرمز",
      id: 11,
      author: "نویسنده خوشحال",
      description: "description",
      coverUrl: bookCoverRed.src,
    },
    {
      title: "کتاب سبز",
      id: 12,
      author: "نویسنده بدبخت ",
      description: "description",
      coverUrl: bookCoverGreen.src,
    },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {/* <Paper sx={{flexBasis:{sm:'0%',md:'20%'}}}>Aside</Paper> */}
      <Grid container spacing={10} sx={{ m: 10 }}>
        {books.map((book, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BooksPage;
