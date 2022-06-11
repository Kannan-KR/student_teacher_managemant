import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Grid, TextField, Paper, Button } from "@mui/material";

function EditTeacher() {
  let navigate = useNavigate();
  let params = useParams();
  const url = "https://61c6fa4590318500175472a0.mockapi.io/teachers/";

  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [qualification, setQualification] = React.useState("");
  const [exp, setExp] = React.useState("");
  const [contact, setContact] = React.useState("");

  const handleChange = (setVariable, event) => {
    setVariable(event.target.value);
  };

  let getData = async () => {
    let response = await axios.get(url + params.id);
    try {
      setName(response.data.name);
      setSubject(response.data.subject);
      setQualification(response.data.qualification);
      setExp(response.data.yearsofexp);
      setContact(response.data.contact);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let handleUpdate = async () => {
    try {
      let response = await axios.put(url + params.id, {
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
          <Button variant="contained" onClick={(e) => handleUpdate(e)}>
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default EditTeacher;
