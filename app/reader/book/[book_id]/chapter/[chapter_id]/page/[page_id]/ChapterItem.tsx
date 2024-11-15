import { Box, Link, ListItem, Paper, Typography } from "@mui/material";
import { ChapterSchema } from "../../../../../../../../openapi";
import useChapterPages from "../../../../../../../hooks/useChapterPages";
import { useState } from "react";
import { Add, Remove } from "@mui/icons-material";

interface Props {
  chapter: ChapterSchema;
}

const ChapterItem = ({ chapter }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const { data: pagesData, error: pagesErr } = useChapterPages(
    chapter.book.toString(),
    chapter.chapter_number.toString()
  );
  const pages = pagesData?.data.payload.pages;

  if (pagesErr) return <Typography>{ pagesErr.message}</Typography>

  return (
    <ListItem sx={{ display: "flex", flexDirection: "column" }}>
      <Paper
        sx={{ p: 5, width: "100%", display: "flex", flexDirection: "column" }}
      >
        <Box sx={{ display: "flex", mb: 5 }}>
          {isExpanded ? <Add /> : <Remove />}
          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => setExpanded(!isExpanded)}
          >
            {chapter.title}
          </Box>
        </Box>
        {isExpanded && (
          <Box sx={{ dispay: "flex", flexDirection: "column" }}>
            {pages &&
              pages.map((page, index) => (
                <Paper
                  elevation={10}
                  sx={{ mb: 5, display: "flex", justifyContent: "start" }}
                  key={index}
                >
                  <Link
                    href={`/reader/book/${chapter.book}/chapter/${chapter.chapter_number}/page/${page.page_number}`}
                  >
                    {page.title}
                  </Link>
                </Paper>
              ))}
          </Box>
        )}
      </Paper>
    </ListItem>
  );
};

export default ChapterItem;
