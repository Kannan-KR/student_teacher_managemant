import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function MyAppBar() {
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Button
              variant="outlined"
              startIcon={<HomeIcon />}
              sx={{
                color: "white",
              }}
            >
              {window.innerWidth > 500 ? <Typography>HOME</Typography> : <></>}
            </Button>
          </Link>
          <Typography
            color="inherit"
            component="div"
            sx={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: "15px",
              "@media (min-width:600px)": {
                fontSize: "30px",
              },
            }}
          >
            Student Teacher Management
          </Typography>
          {location.pathname === "/all-teachers" ? (
            <Link style={{ textDecoration: "none" }} to={"/add-teacher"}>
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                sx={{
                  color: "white",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.6rem",
                    "@media (min-width:600px)": {
                      fontSize: "1rem",
                    },
                  }}
                >
                  Add Teacher
                </Typography>
              </Button>
            </Link>
          ) : (
            <></>
          )}

          {location.pathname === "/all-students" ? (
            <Link style={{ textDecoration: "none" }} to={"/add-student"}>
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                sx={{
                  color: "white",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.6rem",
                    "@media (min-width:600px)": {
                      fontSize: "1rem",
                    },
                  }}
                >
                  Add Student
                </Typography>
              </Button>
            </Link>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;
