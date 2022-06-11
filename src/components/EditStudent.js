import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Grid, TextField, Paper, Button } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function EditStudent() {
  let navigate = useNavigate();
  let params = useParams();
  const url = "https://61c6fa4590318500175472a0.mockapi.io/students_b33/";

  const [name, setName] = React.useState("");
  const [rollno, setRollno] = React.useState("");
  const [class1, setClass1] = React.useState("");
  const [dob, setDob] = React.useState(null);
  const [contact, setContact] = React.useState("");

  const handleChange = (setVariable, event) => {
    setVariable(event.target.value);
  };

  let getData = async () => {
    let response = await axios.get(url + params.id);
    try {
      setName(response.data.name);
      setRollno(response.data.rollno);
      setClass1(response.data.class);
      setDob(response.data.dob);
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
        rollno,
        class: class1,
        dob,
        contact,
      });
      if (response.status >= 200 && response.status < 300) {
        navigate("/all-students");
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
            label="Roll No"
            required={true}
            value={rollno}
            onChange={(e) => handleChange(setRollno, e)}
          ></TextField>
        </Grid>

        <Grid item>
          <TextField
            label="Class"
            required={true}
            value={class1}
            onChange={(e) => handleChange(setClass1, e)}
          ></TextField>
        </Grid>
        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              disableFuture
              label="Date of Birth"
              inputFormat="MM/dd/yyyy"
              value={dob}
              onChange={(newValue) => {
                setDob(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
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

export default EditStudent;
