import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

function Cards() {
  return (
    <Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          gap: "10vh",
          justifyContent: "center",
          flexWrap: "wrap",
          height: "75vh",
          width: "100vw",
        }}
      >
        <Card
          variant="outlined"
          sx={{ border: "1px inset lightblue", borderRadius: 5 }}
        >
          <CardActions>
            <Button size="large" href="/all-students">
              <Typography
                component="div"
                sx={{
                  fontSize: "2rem",
                  "@media (min-width:600px)": {
                    fontSize: "3rem",
                  },
                }}
              >
                Students
              </Typography>
            </Button>
          </CardActions>
        </Card>

        <Card
          variant="outlined"
          sx={{ border: "1px outset lightblue", borderRadius: 5 }}
        >
          <CardActions>
            <Button size="large" href="/all-teachers">
              <Typography
                component="div"
                sx={{
                  fontSize: "2rem",
                  "@media (min-width:600px)": {
                    fontSize: "3rem",
                  },
                }}
              >
                Teachers
              </Typography>
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Box>
  );
}

export default Cards;
