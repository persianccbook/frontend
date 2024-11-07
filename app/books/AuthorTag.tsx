import React from "react";
import useAuthor from "../hooks/useAuthor";
import { Box, Paper } from "@mui/material";

interface Props {
  authorId: string;
}
// TODO: after adding author page need to add a link from author name to their page of books
const AuthorTag = ({ authorId }: Props) => {
  const { data } = useAuthor(authorId);
  const author = data?.data.payload;
  return (
    <Box sx={{ display: "inline-block" }}>
      {author?.first_name || author?.last_name
        ? author.first_name + " " + author.last_name
        : "نویسنده شماره " + author?.id}
    </Box>
  );
};

export default AuthorTag;
