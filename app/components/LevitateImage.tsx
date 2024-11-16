import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const LevitateImage = ({ children }: Props) => {
  return (
    <motion.div
      animate={{ y: [0,5,0] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default LevitateImage;
