import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

interface Developer {
  name: string;
  bio: string;
  roles: string[];
  image: string;
  donationLink: string;
}

interface Props {
  developer: Developer;
}

const developerCard = ({ developer }: Props) => {
  return (
    <Card
      sx={{
        maxHeight: 345,
        maxWidth: 250,
        margin: 2,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        borderRadius:'15px'
      }}
    >
      <Paper elevation={10} sx={{py:10}}>
        <CardMedia
          sx={{ maxHeight: 150, maxWidth: 150,borderRadius:'50%',mx:'auto' }}
          component="img"
          height="150"
          width="150"
          image={developer.image}
          alt={developer.name}
        />
      </Paper>
      <CardContent sx={{p:2,pt:0,m:4,zIndex:5}}>
        <Typography variant="h6" component="div">
          {developer.name}
        </Typography>
        {developer.roles.map((role, index) => (
          <Typography
            variant="caption"
            key={index}
            color="text.secondary"
            display={"inline-block"}
          >
            {index === developer.roles.length - 1 ? role : role + ", "}
          </Typography>
        ))}
        <Typography variant="body2" color="text.secondary">
          {developer.bio}
        </Typography>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 16,
          }}
        >
          <Link
            href={developer.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" color="primary">
              Twitter
            </Button>
          </Link>
          <Link
            href={developer.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" color="primary">
              GitHub
            </Button>
          </Link>
          <Link
            href={developer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" color="primary">
              LinkedIn
            </Button>
          </Link>
        </div> */}
        <div style={{ marginTop: 16 }}>
          <Button
            variant="contained"
            color="primary"
            href={developer.donationLink}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            
          >
            حمایت
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default developerCard;
