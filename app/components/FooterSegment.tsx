import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FooterSegment = ({ children }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      gap={3}
      marginY={4}
      margin={5}
    >
      {children}
    </Box>
  );
};

export default FooterSegment;
