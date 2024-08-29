import { Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import NavBar from "./components/NavBar";

const App = () => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('md'));


  return (
    <Grid
      gap={3}
      container
      sx={{
        display: 'grid',
        gridTemplateAreas: isLgUp
          ? `"nav nav" "aside main" "footer footer"`
          : `"nav" "main" "footer"`,
        gridTemplateColumns: isLgUp ? '300px 1fr' : '1fr',
        m:0
      }}
    >
      <Grid item gridArea="nav">
        <NavBar/>
      </Grid>
      <Grid item gridArea="main">
        <Paper>
          <Typography variant="h1">Main</Typography>
        </Paper>
      </Grid>
      {isLgUp && (<Grid item gridArea="aside">
        <Paper>
          <Typography variant="h1">Aside</Typography>
        </Paper>
      </Grid>)}
      <Grid item gridArea="footer">
        <Paper>
          <Typography variant="h1">Footer</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
