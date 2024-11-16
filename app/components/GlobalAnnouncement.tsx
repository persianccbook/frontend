"use client";

import { Close } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import useAnnouncement from "../hooks/useAnnouncement";

const GlobalAnnouncement = () => {
  const [isClosed, setClosed] = useState(false);
  const { data, error } = useAnnouncement();

    const announcement = data?.data.payload

  if (error) return <div>{error.message}</div>;

  return (
    <Box
      sx={{
        display: isClosed ? "none" : "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        bgcolor: "secondary.main",
        p: 3,
      }}
    >
      <Box>{announcement?.content}</Box>
      <Button onClick={() => setClosed(true)} disableRipple>
        <Close />
      </Button>
    </Box>
  );
};

export default GlobalAnnouncement;
