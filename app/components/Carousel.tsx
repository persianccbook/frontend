import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import { Children, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

// TODO: fix mobile view
const Carousel = ({ children }: Props) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  const handlePrev = () => {
    setActiveIndex(activeIndex - 1);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", mx: "auto" }}>
      <Box sx={{ alignContent: "center" }}>
        <Button
          disableRipple
          disableFocusRipple
          onClick={handlePrev}
          disabled={activeIndex <= 1}
        >
          <ArrowForwardIos fontSize="large" />
        </Button>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "center", maxWidth: "max-contetn", gap: 10 }}
      >
        {children &&
          Children.map(
            children,
            (card, index) =>
              index >= activeIndex - 1 &&
              index <= activeIndex + 1 && (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                  {card}
                </Grid>
              )
          )}
      </Grid>
      <Box sx={{ alignContent: "center" }}>
        <Button
          disableRipple
          disableFocusRipple
          onClick={handleNext}
          disabled={!(activeIndex <= Children.count(children) - 3)}
        >
          <ArrowBackIos fontSize="large"  />
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
