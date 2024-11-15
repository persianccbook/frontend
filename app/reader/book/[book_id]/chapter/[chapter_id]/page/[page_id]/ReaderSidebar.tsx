"use client";
import { List as ListIcon, North, Settings, South } from "@mui/icons-material";
import { Box, Button, List, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import useReaderStore from "../../../../../../../../store/readerStore";
import { ChapterSchema } from "../../../../../../../../openapi";
import ChapterItem from "./ChapterItem";

const IconButton = styled(Button)({
  color: "inherit",
  variant: "text",
  p: 0,
  mx: 0,
  borderRadius: 10,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  minHeight: 0,
  minWidth: 0,
  bgcolor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
});

interface Props {
  chapters: ChapterSchema[];
}

const ReaderSideBar = ({ chapters }: Props) => {
  const { activeMenu, setActiveMenu, setFontSize, fontSize } = useReaderStore();

  return (
    <Paper
      sx={{ p: 5, mt: 5, mx: "auto", width: "100%", borderRadius: "15px" }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <IconButton
          sx={{
            bgcolor:
              activeMenu === "settings"
                ? "rgba(255,255,255,.1)!important"
                : "inherit",
            width: "100%",
          }}
          disableRipple
          onClick={() => {
            setActiveMenu("settings");
          }}
        >
          <Settings />
        </IconButton>
        <IconButton
          sx={{
            bgcolor:
              activeMenu === "settings"
                ? "inherit"
                : "rgba(255,255,255,.1)!important",
            width: "100%",
          }}
          disableRipple
          onClick={() => {
            setActiveMenu("contents");
          }}
        >
          <ListIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          bgcolor: "rgba(255,255,255,.1)",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        {activeMenu === "contents" ? (
          <Box sx={{ p: 10 }}>
            <List>
              {chapters.map((chapter, index) => (
                <ChapterItem chapter={chapter} key={index} />
              ))}
            </List>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 5,
            }}
          >
            <Box sx={{ m: "auto" }}>اندازه متن</Box>
            <North onClick={() => setFontSize(fontSize + 1)} />
            <Box sx={{ m: "auto" }}>{fontSize}</Box>
            <South onClick={() => setFontSize(fontSize - 1)} />
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default ReaderSideBar;
