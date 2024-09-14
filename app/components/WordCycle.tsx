import {
  alpha,
  Typography,
  TypographyVariant,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion} from "framer-motion";

interface Props {
  words: string[];
  variant: TypographyVariant;
}

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
    <motion.div
      key={word}
      style={{ display: "inline-block" }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1,ease:'easeIn' }}
    >
      <Typography
        
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
            // animation: `${fadeIn} 1s`,
          }}
        >
          {word}
        </Typography>
      </Typography>
    </motion.div>
  );
};

export default WordCycle;
