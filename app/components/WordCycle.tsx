import {
  alpha,
  keyframes,
  Typography,
  TypographyVariant,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";

interface Props {
  words: string[];
  variant: TypographyVariant;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const WordCycle = ({ words, variant: variant }: Props) => {
  const theme = useTheme();
  const [word, setWord] = useState(words[0]);
  const colors = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.warning.main,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        return words[(currentIndex + 1) % words.length];
      });
    }, 3000); // change every 3 seconds

    return () => clearInterval(intervalId);
  }, [word, words]);
  return (
    <>
      <Typography
        key={word}
        variant="button"
        bgcolor={alpha(colors[words.indexOf(word)], 0.2)}
        sx={{ borderRadius: 5, p: 2 }}
      >
        <Typography
          component="span"
          variant={variant}
          sx={{
            color: colors[words.indexOf(word)],
            fontWeight: "Bold",
            animation: `${fadeIn} 1s`,
          }}
        >
          {word}
        </Typography>
      </Typography>
    </>
  );
};

export default WordCycle;
