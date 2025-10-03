// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";

// // Create an axios instance with backend baseURL
// const api = axios.create({
//   baseURL: "https://mini-school-portal-backend.onrender.com",
//   withCredentials: true,
// });

// function Signup() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//     studentClass: "",
//     rollNumber: "",
//     subject: ""
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // Basic validation
//     if (!form.role) {
//       setError("Please select a role");
//       return;
//     }
//     if (form.role === "student" && (!form.studentClass || !form.rollNumber)) {
//       setError("Please fill class and roll number for student");
//       return;
//     }
//     if (form.role === "teacher" && !form.subject) {
//       setError("Please enter subject for teacher");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await api.post("/api/user/signup", form);

//       // Save user info and accessToken
//       localStorage.setItem("user", JSON.stringify(res.data.user));
//       localStorage.setItem("accessToken", res.data.accessToken);

//       // Redirect based on role
//       if (res.data.user.role.toLowerCase() === "student") navigate("/student-dashboard");
//       else navigate("/teacher-dashboard");

//     } catch (err) {
//       console.error("Signup error:", err.response?.data);
//       setError(err.response?.data?.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card p-4 shadow-sm" style={{ width: "350px" }}>
//         <h2 className="text-center mb-1">Sign Up</h2>
//         <p className="text-center text-muted mb-4" style={{ fontSize: "0.9rem" }}>
//           Create your account to continue
//         </p>

//         {error && <div className="alert alert-danger">{error}</div>}

//         <form onSubmit={handleSubmit}>
//           <input
//             className="form-control mb-3"
//             placeholder="Name"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             className="form-control mb-3"
//             placeholder="Email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             className="form-control mb-3"
//             placeholder="Password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />

//           <select
//             className="form-select mb-3"
//             name="role"
//             value={form.role}
//             onChange={handleChange}
//             required
//           >
//             <option value="" disabled>Select role</option>
//             <option value="student">Student</option>
//             <option value="teacher">Teacher</option>
//           </select>

//           {form.role === "student" && (
//             <>
//               <input
//                 className="form-control mb-3"
//                 placeholder="Class"
//                 name="studentClass"
//                 value={form.studentClass}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 className="form-control mb-3"
//                 placeholder="Roll Number"
//                 name="rollNumber"
//                 value={form.rollNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </>
//           )}

//           {form.role === "teacher" && (
//             <input
//               className="form-control mb-3"
//               placeholder="Subject"
//               name="subject"
//               value={form.subject}
//               onChange={handleChange}
//               required
//             />
//           )}

//           <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//             {loading ? "Signing up..." : "Sign Up"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Signup() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",        
//     studentClass: "",
//     rollNumber: "",
//     subject: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.role) {
//       alert("Please select a role");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "https://mini-school-portal-backend.onrender.com/api/user/signup",
//         form,
//         { withCredentials: true }
//       );

//       localStorage.setItem("user", JSON.stringify(res.data.user));
//        localStorage.setItem("accessToken", res.data.accessToken);

//     //   alert(res.data.message);
//     //     localStorage.setItem("accessToken", res.data.accessToken);
//     //    localStorage.setItem("user", JSON.stringify(res.data.user));

      
//       if (res.data.user.role.toLowerCase() === "student") navigate("/student-dashboard");
//        else navigate("/teacher-dashboard");


//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card p-4 shadow-sm" style={{ width: "350px" }}>
//         <h2 className="text-center mb-1">Sign up</h2>
//         <p className="text-center text-muted mb-4" style={{ fontSize: "0.9rem" }}>
//           Sign up to continue
//         </p>
//         <form onSubmit={handleSubmit}>
//           <input
//             className="form-control mb-3"
//             placeholder="Name"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             className="form-control mb-3"
//             placeholder="Email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             className="form-control mb-3"
//             placeholder="Password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />

//           <select
//             className="form-select mb-3"
//             name="role"
//             value={form.role}
//             onChange={handleChange}
//             required
//           >
//             <option value="" disabled>Select role</option>
//             <option value="student">Student</option>
//             <option value="teacher">Teacher</option>
//           </select>

//           {form.role === "student" && (
//             <>
//               <input
//                 className="form-control mb-3"
//                 placeholder="Class"
//                 name="studentClass"
//                 value={form.studentClass}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 className="form-control mb-3"
//                 placeholder="Roll Number"
//                 name="rollNumber"
//                 value={form.rollNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </>
//           )}

//           {form.role === "teacher" && (
//             <input
//               className="form-control mb-3"
//               placeholder="Subject"
//               name="subject"
//               value={form.subject}
//               onChange={handleChange}
//               required
//             />
//           )}

//           <button type="submit" onClick={() => handleSubmit } className="btn btn-primary w-100">
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",          
    studentClass: "",
    rollNumber: "",
    subject: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.role) {
      alert("Please select a role");
      return;
    }

    try {
      const res = await axios.post(
        "https://mini-school-portal-backend.onrender.com/api/user/signup",
        form,
        { withCredentials: true }
      );

      localStorage.setItem("user", JSON.stringify(res.data.user));
       localStorage.setItem("accessToken", res.data.accessToken);



      // Direct navigation based on role
      if (res.data.user.role.toLowerCase() === "student") navigate("/student-dashboard");
       else navigate("/teacher-dashboard");


    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: "350px" }}>
        <h2 className="text-center mb-1">Sign up</h2>
        <p className="text-center text-muted mb-4" style={{ fontSize: "0.9rem" }}>
          Sign up to continue
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="form-control mb-3"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <select
            className="form-select mb-3"
            name="role"
            value={form.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          {form.role === "student" && (
            <>
              <input
                className="form-control mb-3"
                placeholder="Class"
                name="studentClass"
                value={form.studentClass}
                onChange={handleChange}
                required
              />
              <input
                className="form-control mb-3"
                placeholder="Roll Number"
                name="rollNumber"
                value={form.rollNumber}
                onChange={handleChange}
                required
              />
            </>
          )}

          {form.role === "teacher" && (
            <input
              className="form-control mb-3"
              placeholder="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
          )}

          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
