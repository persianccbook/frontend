import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Contributor } from "../../hooks/useContributors";
import { GitHub } from "@mui/icons-material";

interface Props {
  contributor: Contributor;
}

const developerCard = ({ contributor }: Props) => {
  return (
    <Card
      sx={{
        maxHeight: 310,
        maxWidth: 250,
        margin: 2,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        borderRadius: "15px",
      }}
    >
      <Paper elevation={10} sx={{ py: 10 }}>
        <CardMedia
          sx={{
            maxHeight: 150,
            maxWidth: 150,
            borderRadius: "50%",
            mx: "auto",
          }}
          component="img"
          height="150"
          width="150"
          image={contributor.avatar}
          alt={contributor.name}
        />
      </Paper>
      <CardContent sx={{ p: 2, pt: 0, m: 4, zIndex: 5 }}>
        <Typography variant="h6" component="div">
          {contributor.name}
        </Typography>
        {contributor.roles.map((role, index) => (
          <Typography
            variant="caption"
            key={index}
            color="text.secondary"
            display={"inline-block"}
          >
            {index === contributor.roles.length - 1 ? role : role + ", "}
          </Typography>
        ))}
        <Box sx={{display:'flex',justifyContent:'end'}}>
          <Button
            disableRipple
            disableElevation
            disableFocusRipple
            disableTouchRipple
          >
            <Link href={contributor.githubUrl} target="_blank">
              <GitHub />
            </Link>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default developerCard;
