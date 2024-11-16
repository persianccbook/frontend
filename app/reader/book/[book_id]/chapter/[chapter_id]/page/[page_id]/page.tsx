"use client";
import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import MarkdownRenderer from "./MarkdownRenderer";
import useReaderStore from "../../../../../../../../store/readerStore";
import ReaderSideBar from "./ReaderSidebar";
import useBook from "../../../../../../../hooks/useBook";
import useBookChapters from "../../../../../../../hooks/useBookChapters";
import useChapterPages from "../../../../../../../hooks/useChapterPages";

interface Props {
  params: {
    book_id: string;
    chapter_id: string;
    page_id: string;
  };
}

const Reader = ({ params: { book_id, chapter_id, page_id } }: Props) => {
  const { fontSize } = useReaderStore();
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const { data: bookData, error: bookErr } = useBook(book_id);
  const { data: chaptersData, error: chaptersErr } = useBookChapters(book_id);
  const { data: pagesData, error: pagesErr } = useChapterPages(
    book_id,
    chapter_id
  );
  const { isMobileMenuOpen } = useReaderStore();
  if (bookErr || chaptersErr || pagesErr)
    return (
      <Typography>
        {bookErr && bookErr.message}
        {chaptersErr && chaptersErr.message}
        {pagesErr && pagesErr.message}
      </Typography>
    );
  const chapters = chaptersData?.data.payload.chapters;
  const chapterTitle =
    chapters && chapters[parseInt(chapter_id) - 1]
      ? chapters[parseInt(chapter_id) - 1].title
      : "";
  const pages = pagesData?.data.payload.pages;
  const pageTitle =
    pages && pages[parseInt(page_id) - 1]
      ? pages[parseInt(page_id) - 1].title
      : "";

  var contents =
    pages &&
    pages[parseInt(page_id) - 1] &&
    pages[parseInt(page_id) - 1].content
      ? pages[parseInt(page_id) - 1].content
      : "";
  contents = contents as string;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmUp ? "row" : "column",
          mx: "auto",
          p: 10,
          gap: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: "min(300px,30vw)",
          }}
        >
          <Paper
            sx={{
              p: 5,
              mx: "auto",
              maxWidth: "90vw",
              width: "100%",
              borderRadius: "15px",
            }}
          >
            {bookData?.data.payload.title}/{chapterTitle}/{pageTitle}
          </Paper>
          {(isSmUp || isMobileMenuOpen) && chapters && (
            <ReaderSideBar chapters={chapters} />
          )}
        </Box>
        <Paper
          sx={{
            display: isSmUp ? "inline" : isMobileMenuOpen ? "none" : "inline",
            p: 15,
            fontSize: fontSize,
            borderRadius: "15px",
            maxWidth: "90vw",
            width: "100%",
            mx: "auto",
            overflowX: "hidden",
            overflowY: "auto",
            maxHeight: "80vh",
            border: "10px solid transparent",
            scrollbarWidth: 4,
            scrollbarGutter: 10,
            "&::-webkit-scrollbar": { width: 4 },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgb(0,0,0,.5)",
              borderRadius: 2,
              height: 50,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
              height: 200,
              borderRadius: 2,
            },
          }}
        >
          <MarkdownRenderer markdown={contents} />
        </Paper>
      </Box>
    </>
  );
};

export default Reader;
