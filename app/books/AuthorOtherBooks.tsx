import React, { Fragment, useState } from "react";
import useAuthor from "../hooks/useAuthor";
import useAuthorBooks from "../hooks/useAuthorBook";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import BookCard from "./BookCard";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

interface Props {
  authors: number[];
}

const AuthorBooksSegment = ({ authorId }: { authorId: number }) => {
  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(0);
  const { data: bookData, error: bookErr } = useAuthorBooks({
    authorId: authorId,
    pageSize: pageSize,
    pageNumber: pageNumber,
  });
  const { data: authorData, error: authorErr } = useAuthor(authorId.toString());

  const booksPage = bookData?.data.payload;
  const author = authorData?.data.payload;
  console.log("pervpage", booksPage?.prev_page);
  console.log("nextpage", booksPage?.next_page);

  return (
    <Box sx={{mb:10}}>
      <Typography variant="subtitle1">
        {"سایر آثار "}
        {author?.first_name || author?.last_name
          ? author.first_name + " " + author.last_name
          : "نویسنده شماره " + author?.id}
      </Typography>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "space-around",
          borderRadius: "15px",
        }}
      >
        <Box sx={{ alignContent: "center" }}>
          <Button
            disableRipple
            disableFocusRipple
            onClick={() => setPageNumber(pageNumber - 1)}
            disabled={booksPage?.prev_page ? booksPage.prev_page < 0 : true}
          >
            <ArrowForwardIos fontSize="large" />
          </Button>
        </Box>
        <Grid
          container
          spacing={10}
          sx={{ mx: "auto", mt: 3, mb: 15, p: 5 }}
          columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}
        >
          {booksPage &&
            booksPage.books.map((book, index) => (
              <Grid item key={index}>
                <BookCard book={book} key={index} />
              </Grid>
            ))}
        </Grid>
        <Box sx={{ alignContent: "center" }}>
          <Button
            disableRipple
            disableFocusRipple
            onClick={() => setPageNumber(pageNumber + 1)}
            disabled={booksPage?.next_page ? booksPage.next_page < 0 : true}
          >
            <ArrowBackIos fontSize="large" />
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

const AuthorOtherBooks = ({ authors }: Props) => {
  return (
    <>
      {authors.map((author, index) => (
        <AuthorBooksSegment authorId={author} key={index} />
      ))}
    </>
  );
};

export default AuthorOtherBooks;
