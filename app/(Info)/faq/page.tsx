"use client";
import { Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

interface QandA {
  q: string;
  a: string;
}

const FAQPAge = () => {
  const [activeQ, setActiveQ] = useState(0);

  const faq: QandA[] = [
    { q: "سوال 1", a: "جواب به سوال 1 در این بخش قرار دارد" },
    { q: "سوال 2", a: "جواب به سوال 2 در این بخش قرار دارد" },
    { q: "سوال 3", a: "جواب به سوال 3 در این بخش قرار دارد" },
    { q: "سوال 4", a: "جواب به سوال 4 در این بخش قرار دارد" },
  ];

  return (
    <Box
      sx={{
        m: "auto",
        p: 10,
        maxWidth: { s: 345, md: 700, lg: 1200 },
      }}
    >
      <Typography variant="h3" sx={{ mb: 10 }}>
        سوالات متداول
      </Typography>
      {faq.map((o, index) => (
        <Paper key={index} sx={{ mb: 5, p: 5 }}>
          <Typography
            onClick={() => setActiveQ(index)}
            sx={{
              mb: 5,
              fontWeight: "Bold",
              cursor: "pointer",
              transition: "1s ease-in-out",
            }}
          >
            {index === activeQ ? "+" : "-"} {o.q}
          </Typography>
          {index === activeQ && (
            <Paper elevation={10}>
              <Typography>{o.a}</Typography>
            </Paper>
          )}
        </Paper>
      ))}
    </Box>
  );
};

export default FAQPAge;
