import { Box, keyframes } from "@mui/material";
import { ReactNode } from "react";

const levitate = keyframes`
0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-2px);
  }
  20% {
    transform: translateY(-4px);
  }
  30% {
    transform: translateY(-6px);
  }
  40% {
    transform: translateY(-8px);
  }
  50% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-8px);
  }
  70% {
    transform: translateY(-6px);
  }
  80% {
    transform: translateY(-4px);
  }
  90% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
    `;

interface Props {
  children: ReactNode;
}

const LevitateImage = ({ children }: Props) => {
  return (
    <Box sx={{ animation: `${levitate} 4s infinite ease-in-out` }}>
      {children}
    </Box>
  );
};

export default LevitateImage;
