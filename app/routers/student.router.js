const express = require("express");
const studentRouter = express.Router();
const {
  getStudentList,
  getDetailStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controllers");
const { logFeature } = require("../middlewares/log-feature");
const {
  checkEmpty,
  checkNumberClass,
} = require("../middlewares/validations/student.validation");

//Lay danh sach hoc sinh
studentRouter.get("/", logFeature, getStudentList);

//Lay chi tiet hoc sinh
studentRouter.get("/:id", getDetailStudentById);

//Them hoc sinh
studentRouter.post("/", checkEmpty, checkNumberClass, createStudent);

//Cap nhat hoc sinh
studentRouter.put("/:id", updateStudent);

//Xoa hoc sinh
studentRouter.delete("/:id", deleteStudent);

module.exports = studentRouter;
