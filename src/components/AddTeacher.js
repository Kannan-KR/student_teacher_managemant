import React from "react";
import axios from "axios";
import { Grid, TextField, Paper, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddTeacher() {
  let navigate = useNavigate();

  const url = "https://61c6fa4590318500175472a0.mockapi.io/teachers/";

  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [qualification, setQualification] = React.useState("");
  const [exp, setExp] = React.useState("");
  const [contact, setContact] = React.useState("");

  const handleChange = (setVariable, event) => {
    setVariable(event.target.value);
  };

  let handleSubmit = async () => {
    try {
      let response = await axios.post(url, {
        name,
        contact,
        subject,
        yearsofexp: exp,
        qualification,
      });
      if (response.status >= 200 && response.status < 300) {
        navigate("/all-teachers");
      } else {
        alert("Internal Server Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Paper
      sx={{
        width: "80vw",
        "@media (min-width:600px)": {
          width: "40vw",
        },
        height: "max-content",
        border: "none",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 4,
        marginBottom: 4,
      }}
    >
      <Grid
        container
        spacing={1.5}
        direction={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          width: "max-content",
          border: "none",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        <Grid item>
          <TextField
            label="Name"
            autoFocus={true}
            required={true}
            value={name}
            onChange={(e) => handleChange(setName, e)}
          ></TextField>
        </Grid>

        <Grid item>
          <TextField
            label="Subject"
            required={true}
            value={subject}
            onChange={(e) => handleChange(setSubject, e)}
          ></TextField>
        </Grid>

        <Grid item>
          <TextField
            label="Qualification"
            required={true}
            value={qualification}
            onChange={(e) => handleChange(setQualification, e)}
          ></TextField>
        </Grid>

        <Grid item>
          <TextField
            label="Years of Experience"
            required={true}
            value={exp}
            onChange={(e) => handleChange(setExp, e)}
          ></TextField>
        </Grid>

        <Grid item>
          <TextField
            label="Mobile"
            required={true}
            value={contact}
            onChange={(e) => handleChange(setContact, e)}
          ></TextField>
        </Grid>

        <Grid item sx={{ marginBottom: 4 }}>
          <Stack direction="row" spacing={1}>
            <Button variant="contained" onClick={(e) => handleSubmit(e)}>
              Add Teacher
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate("/all-teachers")}
            >
              Back
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default AddTeacher;
