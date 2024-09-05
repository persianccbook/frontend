"use client";
import {
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const HomePage = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid
      gap={3}
      container
      sx={{
        display: "grid",
        gridTemplateAreas: isMdUp ? `"aside main"` : `"main"`,
        gridTemplateColumns: isMdUp ? "300px 1fr" : "1fr",
        m: 0,
        mb:3
      }}
    >
      <Grid item gridArea="main">
        <Paper>
          <Typography variant="h1">Main</Typography>
        </Paper>
      </Grid>
      {isMdUp && (
        <Grid item gridArea="aside">
          <Paper>
            <Typography variant="h1">Aside</Typography>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default HomePage;
