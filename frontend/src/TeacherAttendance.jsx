import React, { useEffect, useState } from "react";
import axios from "axios";

function TeacherAttendance() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("accessToken");


  const fetchStudents = async () => {
    try {
      const res = await axios.get("https://mini-school-portal-backend.onrender.com/api/students", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);


  const handleChange = (studentId, value) => {
    setAttendance({ ...attendance, [studentId]: value });
  };

  const handleSubmit = async () => {
    try {
      for (let student of students) {
        const status = attendance[student.id];
        if (!status) continue; 

        await axios.post(
          "https://mini-school-portal-backend.onrender.com/api/attendance/",
          {
            student_id: student.id,
            date: new Date().toISOString().split("T")[0], 
            status,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }
      setMessage("Attendance marked successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Failed to mark attendance");
    }
  };

  if (!students.length) return <p>Loading students...</p>;

  return (
    <div className="container mt-5">
      <h2>Mark Attendance</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Student</th>
            <th>Class</th>
            <th>Roll Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.roll_number}</td>
              <td>
                <select
                  className="form-select"
                  value={attendance[student.id] || ""}
                  onChange={(e) => handleChange(student.id, e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary mt-3" onClick={handleSubmit}>
        Submit Attendance
      </button>
    </div>
  );
}

export default TeacherAttendance;
