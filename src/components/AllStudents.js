import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TablePagination from "@mui/material/TablePagination";
import axios from "axios";
import { Link } from "react-router-dom";

const url = "https://61c6fa4590318500175472a0.mockapi.io/students_b33/";

function AllStudents() {
  let [students, setStudents] = useState([]);

  let getData = async () => {
    try {
      let response = await axios.get(url);
      setStudents(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let handleDelete = async (i) => {
    try {
      let response = await axios.delete(url + i);
      if (response.status === 200) {
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "max-content",
        border: "1px solid",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 4,
        marginBottom: 4,
      }}
    >
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ backgroundColor: "lightblue", fontWeight: "bold" }}
              >
                Name
              </TableCell>
              <TableCell
                align="right"
                sx={{ backgroundColor: "lightblue", fontWeight: "bold" }}
              >
                Roll No
              </TableCell>
              <TableCell
                align="right"
                sx={{ backgroundColor: "lightblue", fontWeight: "bold" }}
              >
                Class
              </TableCell>
              <TableCell
                align="right"
                sx={{ backgroundColor: "lightblue", fontWeight: "bold" }}
              >
                Date of Birth
              </TableCell>
              <TableCell
                align="right"
                sx={{ backgroundColor: "lightblue", fontWeight: "bold" }}
              >
                Contact
              </TableCell>
              <TableCell
                align="center"
                sx={{ backgroundColor: "lightblue", fontWeight: "bold" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((student) => (
                <TableRow
                  key={student.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {student.name}
                  </TableCell>
                  <TableCell align="right">{student.rollno}</TableCell>
                  <TableCell align="right">{student.class}</TableCell>
                  <TableCell align="right">
                    {new Date(student.dob).toLocaleDateString()}
                  </TableCell>
                  <TableCell align="right">{student.contact}</TableCell>
                  <TableCell>
                    <Stack
                      direction="row"
                      divider={<Divider orientation="vertical" flexItem />}
                      spacing={2}
                    >
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/edit-student/${student.id}`}
                      >
                        <Button
                          variant="contained"
                          color="success"
                          startIcon={<EditIcon />}
                        >
                          Edit
                        </Button>
                      </Link>

                      <Button
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDelete(student.id)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[8, 20, 80]}
        component="div"
        count={students.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default AllStudents;
