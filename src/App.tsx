import { Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";

const App = () => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('md'));


  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: 'grid',
        gridTemplateAreas: isLgUp
          ? `"nav nav" "aside main" "footer footer"`
          : `"nav" "main" "footer"`,
        gridTemplateColumns: isLgUp ? '300px 1fr' : '1fr',
      }}
    >
      <Grid item gridArea="nav">
        <Paper>
          <Typography variant="h1">Navbar</Typography>
        </Paper>
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
