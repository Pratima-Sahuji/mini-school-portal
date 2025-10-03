

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TeacherStudents() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("accessToken");

      if (!user || !token) {
        navigate("/login");
        return;
      }

      const res = await axios.get("https://mini-school-portal-backend.onrender.com/api/students", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setStudents(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load students");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`https://mini-school-portal-backend.onrender.com/api/students/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Student deleted successfully");
      fetchStudents(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to delete student");
    }
  };

  const handleEdit = (id) => {
    navigate(`/students/edit/${id}`);
  };

  if (!students.length) return <p className="text-center mt-5">{error || "Loading students..."}</p>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">All Students</h2>
      <table className="table table-striped table-hover shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Roll Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
              <td>{student.roll_number}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(student.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherStudents;
