"use client";
import { Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import BookCard from "./BookCard";
import useBooks from "../hooks/useBooks";
import InfiniteScroll from "react-infinite-scroll-component";
import { FaSpinner } from "react-icons/fa";

const BooksPage = () => {
  const { data, error, fetchNextPage, hasNextPage } = useBooks();

  if (error) return <Typography>{error.message}</Typography>;

  const fetchedBookCount =
    data?.pages.reduce((total, { data: { payload: page } }) => {
      return total + (page.books?.length || 0);
    }, 0) || 0;

  return (
    <InfiniteScroll
      style={{ overflow: "hidden" }}
      dataLength={fetchedBookCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<FaSpinner />}
    >
      <Grid
        container
        spacing={10}
        sx={{ m: 10 }}
        columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}
      >
        {data?.pages.map(({ data: { payload: page } }, index) => (
          <Fragment key={index}>
            {page.books &&
              page.books.map((book, index) => (
                <Grid item key={index}>
                  <BookCard book={book} key={index} />
                </Grid>
              ))}
          </Fragment>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default BooksPage;
