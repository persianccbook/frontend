import { Box, Paper } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FormLayout = ({children}:Props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      marginBottom={3}
    >
      <Paper
        elevation={10}
        sx={{ m: 5, p: 10, minWidth: 300, borderRadius: 5 }}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default FormLayout;
