"use client";
import { Typography } from "@mui/material";
import FooterSegment from "./FooterSegment";
import Link from "next/link";
import { motion } from "framer-motion";

const InfoSegment = () => {
  const initial = {
    borderRadius: "10px",
    paddingLeft: "5px",
    paddingRight: "5px",
  };
  const whileHover = {
    borderRadius: "10px",
    paddingLeft: "5px",
    paddingRight: "5px",
    scale: 1.1,
  };
  const transition = {
    ease: "easeInOut",
    duration: ".3",
  };

  return (
    <FooterSegment>
      <motion.div
        initial={initial}
        whileHover={whileHover}
        transition={transition}
      >
        <Link
          href="/about-us"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Typography variant="body2">درباره ما </Typography>
        </Link>
      </motion.div>
      <motion.div
        initial={initial}
        whileHover={whileHover}
        transition={transition}
      >
        <Link
          href="/contact-us"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Typography variant="body2">ارتباط با ما</Typography>
        </Link>
      </motion.div>
      <motion.div
        initial={initial}
        whileHover={whileHover}
        transition={transition}
      >
        <Link
          href="/developers"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Typography variant="body2">توسعه دهندگان</Typography>
        </Link>
      </motion.div>
      <motion.div
        initial={initial}
        whileHover={whileHover}
        transition={transition}
      >
        <Link href="/faq" style={{ color: "inherit", textDecoration: "none" }}>
          <Typography variant="body2">سوالات متداول</Typography>
        </Link>
      </motion.div>
      <motion.div
        initial={initial}
        whileHover={whileHover}
        transition={transition}
      >
        <Link
          href="support-us"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Typography variant="body2">حمایت از ما</Typography>
        </Link>
      </motion.div>
    </FooterSegment>
  );
};

export default InfoSegment;
