"use client";
import React from "react";
import useBook from "../../hooks/useBook";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { ArrowBack } from "@mui/icons-material";
import useAuthStore from "../../../store/authStore";
import AuthorTag from "../AuthorTag";
import AuthorOtherBooks from "../AuthorOtherBooks";

interface Props {
  params: { bookId: string };
}

const BookPage = ({ params: { bookId } }: Props) => {
  const { isAuthenticated } = useAuthStore();
  console.log(bookId);
  const { data, error } = useBook(bookId);
  const book = data?.data.payload;
  const router = useRouter();

  if (error) return <Typography>{error.message}</Typography>;

  return (
    <Box sx={{ maxWidth: 1200, m: 10, p: 5, mx: "auto" }}>
      <Button
        color="secondary"
        onClick={() => {
          router.push("/books");
        }}
      >
        <ArrowBack></ArrowBack>بازگشت به صفحه کتاب ها
      </Button>
      <Paper sx={{ display: "flex", gap: 10, p: 5, mb: 10 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <img
            key={book?.id}
            src={book?.cover_image || ""}
            width={200}
            style={{ marginBottom: 10, borderRadius: "10px" }}
          />
          {/* TODO: add redirect to reader */}
          <Button
            onClick={() => router.push("/")}
            disabled={!isAuthenticated}
            variant="contained"
            color="secondary"
            sx={{ maxWidth: 200, width: "98%", mx: "auto" }}
          >
            {isAuthenticated
              ? "مطالعه کتاب"
              : "برای مطالعه کتاب وارد حساب کاربری خود شوید"}
          </Button>
        </Box>
        <Paper elevation={4} sx={{ width: "100%", p: 10 }}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            {book?.title}
          </Typography>
          <Typography variant="h6" sx={{ mb: 5 }}>
            نوشته:{" "}
            {book &&
              book.authors.map((author, index) => {
                return book.authors.length === index + 1 ? (
                  <AuthorTag authorId={author.toString()} />
                ) : (
                  <>
                    <AuthorTag authorId={author.toString()} />
                    <>,</>
                  </>
                );
              })}
          </Typography>
          <Typography variant="body1" sx={{ mb: 5 }}>
            {book?.description}
          </Typography>
        </Paper>
      </Paper>
      {book?.authors &&<AuthorOtherBooks authors={book?.authors}/>}
    </Box>
  );
};

export default BookPage;
