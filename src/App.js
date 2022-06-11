import "./App.css";
import AppBar from "./components/MyAppBar";
import Cards from "./components/Cards";
import AllTechers from "./components/AllTechers";
import AddTecher from "./components/AddTeacher";
import EditTeacher from "./components/EditTeacher";
import AllStudents from "./components/AllStudents";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/all-teachers" element={<AllTechers />} />
          <Route path="/add-teacher" element={<AddTecher />} />
          <Route path="/edit-teacher/:id" element={<EditTeacher />} />
          <Route path="/all-students" element={<AllStudents />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
