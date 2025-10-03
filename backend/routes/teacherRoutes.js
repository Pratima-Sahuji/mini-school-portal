// const express = require("express");
// const { getTeacherById,
//   updateTeacher,
//   deleteTeacher } = require("../controllers/teachersController.js");

// const { authenticateToken } = require("../middlewares/authMiddleware.js");
// const { authorizeRoles } = require("../middlewares/authorizeRoles.js");

// const router = express.Router();

// // Teacher profile routes (self only)
// router.get("/:id", authenticateToken, authorizeRoles("teacher"), getTeacherById);
// router.put("/:id", authenticateToken, authorizeRoles("teacher"), updateTeacher);
// router.delete("/:id", authenticateToken, authorizeRoles("teacher"), deleteTeacher);



// module.exports = router;


const express = require("express");
const router = express.Router(); // ✅ Express router

const {
  getTeacherById,
  updateTeacher,
  deleteTeacher,
 
} = require("../controllers/teachersController.js");




const { auth} = require("../middlewares/authMiddleware.js");
const { authorizeRoles } = require("../middlewares/authorizeRoles.js");

console.log("getTeacherById:", getTeacherById);
console.log("authenticateToken:", auth);
console.log("authorizeRoles('teacher'):", authorizeRoles("teacher"));

// Teacher profile routes (self only)
router.get("/:id", auth, authorizeRoles("teacher"), getTeacherById);
router.put("/:id", auth, authorizeRoles("teacher"), updateTeacher);
router.delete("/:id", auth, authorizeRoles("teacher"), deleteTeacher);

// // Teacher can get all students
// router.get("/students/list", authenticateToken, authorizeRoles("teacher"), getAllStudents);

module.exports = router;
