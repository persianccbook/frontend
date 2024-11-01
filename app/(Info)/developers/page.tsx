"use client";
import { Box, Paper, Typography } from "@mui/material";
import DeveloperCard from "./developerCard";
import Carousel from "../../components/Carousel";
import { Contributor } from "../../hooks/useContributors";

// TODO: read contributers from backend
const DevelopersPage = () => {
  const page_description =
    "پروژه کتابخانه آزاد پارسی پروژه ای تماما متن باز است که توسعه آن به کمک اعضای کامیونیتی توسعه یافته و توسعه آن به همین صورت نیز ادامه خواهد داشت، هدف ما ایجاد فضایی آزاد برای دسترسی عموم به متون فرهنگی و علمی است.";

  // const [contributors, setContributors] = useState([] as Contributor[]);
  // const getContributors = useContributors();

  // useEffect(() => {
  //   getContributors.then(contributors => {
  //     setContributors(contributors);
  //   });
  // }, [getContributors]);

  const contributors: Contributor[] = [
    {
      name: "MrArsenic621",
      roles: ["Frontend Developer", "Backend Developer"],
      avatar: "https://avatars.githubusercontent.com/u/54413417?v=4",
      githubUrl: "https://github.com/MrArsenic621",
    },
    {
      name: "metantesan",
      roles: ["Frontend Developer", "Backend Developer"],
      avatar: "https://avatars.githubusercontent.com/u/94219809?v=4",
      githubUrl: "https://github.com/metantesan",
    },
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
      <Paper elevation={3} sx={{ p: 5 }}>
        <Typography variant="h4" sx={{ mb: 10 }}>
          تیم ما
        </Typography>
        <Carousel>
          {contributors.map((contributor, index) => (
            <DeveloperCard key={index} contributor={contributor} />
          ))}
        </Carousel>
      </Paper>
    </Box>
  );
};

export default DevelopersPage;
