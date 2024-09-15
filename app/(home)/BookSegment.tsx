import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import bookCover from "../../public/book-cover.jpg";
import Image from "next/image";

const BookSegment = () => {
  const [bookName, description, author,timeOfPub] = ["اسم کتاب","نوضیحات کتاب و شرح و توضیح کتاب  اینکه کتاب درباره چیست و به چه میپردازد","نویسنده ی مهربان","بهمن 1403"]
  return (
    <Paper sx={{ display: "flex", alignItems: "flex-start",mb:10,p:15}} elevation={1}>
      <Box sx={{ display: "flex", alignItems: "stretch", width: "30%",maxHeight: "50vh"}}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "30%",gap:5}}>
          <Image src={bookCover} alt="book" style={{ objectFit: "contain" ,height:'30%',width:'auto' ,flexGrow:1,filter: 'brightness(0.7)'}} />
          <Image src={bookCover} alt="book" style={{ objectFit: "contain" ,height:'30%',width:'auto' ,flexGrow:1,filter: 'brightness(0.3)'}} />
          <Image src={bookCover} alt="book" style={{ objectFit: "contain" ,height:'30%',width:'auto' ,flexGrow:1,filter: 'brightness(0.3)'}} />
        </Box>
        <Box sx={{ width: "80%",flexGrow:1}}>
          <Image src={bookCover} alt="current-book" style={{ objectFit: "contain",height:'100%',width:'auto'}} />
        </Box>
      </Box>
      <Paper elevation={0} sx={{ width: "70%" ,p:15,m:'auto',height:'80%'}}>
        <Typography variant="h3">{bookName}</Typography>
        <Typography variant="h4">نوشته {author}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="caption">منتشر شده در {timeOfPub}</Typography>
      </Paper >
    </Paper>
  );
};

export default BookSegment;
