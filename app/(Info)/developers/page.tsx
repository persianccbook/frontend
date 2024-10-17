"use client";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import DeveloperCard from "./developerCard";
import Carousel from "../../components/Carousel";

const DevelopersPage = () => {
  const page_description =
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.";
  const developers = [
    {
      name: "علیرضا ",
      bio: "",
      roles: ["Frontend Developer", "Backend Developer"],
      image: "https://via.placeholder.com/150",
      donationLink: "https://example.com/donate",
    },
    {
      name: " صدیقی",
      bio: "",
      roles: ["Frontend Developer", "Backend Developer"],
      image: "https://via.placeholder.com/150",
      donationLink: "https://example.com/donate",
    },
    {
      name: "علیرضا صدیقی",
      bio: "",
      roles: ["Frontend Developer", "Backend Developer"],
      image: "https://via.placeholder.com/150",
      donationLink: "https://example.com/donate",
    },
    {
      name: "علیرضا  hhthصدیقی",
      bio: "",
      roles: ["Frontend Developer", "Backend Developer"],
      image: "https://via.placeholder.com/150",
      donationLink: "https://example.com/donate",
    },
    {
      name: "علیرضا ",
      bio: "",
      roles: ["Frontend Developer", "Backend Developer"],
      image: "https://via.placeholder.com/150",
      donationLink: "https://example.com/donate",
    },
    {
      name: " صدیقی",
      bio: "",
      roles: ["Frontend Developer", "Backend Developer"],
      image: "https://via.placeholder.com/150",
      donationLink: "https://example.com/donate",
    },
    {
      name: "علیرضا صدیقی",
      bio: "",
      roles: ["Frontend Developer", "Backend Developer"],
      image: "https://via.placeholder.com/150",
      donationLink: "https://example.com/donate",
    },
    {
      name: "علیرضا  hhthصدیقی",
      bio: "",
      roles: ["Frontend Developer", "Backend Developer"],
      image: "https://via.placeholder.com/150",
      donationLink: "https://example.com/donate",
    },
    // Add more developers here
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifySelf: "center",
        maxWidth: { s: 345, md: 700, lg: 1200 },
        m: "20px auto",
        p: 10,
      }}
    >
      <Typography variant="h3" sx={{ mb: 10 }}>
        توسعه دهندگان
      </Typography>
      <Paper sx={{ p: 5, mb: 10 }}>
        <Typography variant="body1">{page_description}</Typography>
      </Paper>
      <Carousel>
        {developers.map((developer, index) => (
          <DeveloperCard key={index} developer={developer} />
        ))}
      </Carousel>
    </Box>
  );
};

export default DevelopersPage;
