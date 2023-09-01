const {
  getList,
  getDetail,
  create,
  update,
  deleteById,
} = require("../services/student.services");

const getStudentList = (req, res) => {
  const studentList = getList();
  if (studentList) {
    res.status(200).send(studentList);
  } else {
    res.status(404).send("Not found!");
  }
};

const getDetailStudentById = (req, res) => {
  const params = req.params;
  const id = params.id;

  const student = getDetail(id);

  if (student) {
    res.status(200).send(student);
  } else {
    res.status(404).send("Not found!");
  }
};

const createStudent = (req, res) => {
  let student = req.body;
  const newStudent = create(student);
  res.status(201).send(newStudent);
};

const updateStudent = (req, res) => {
  const { id } = req.params;
  const student = req.body;

  const updateStudent = update(id, student);
  if (updateStudent) {
    res.status(200).send(updateStudent);
  } else {
    res.status(404).send("Not found!");
  }
};

const deleteStudent = (req, res) => {
  const { id } = req.params;
  const removedStudent = deleteById(id);
  if (removedStudent) {
    res.status(200).send(removedStudent);
  } else {
    res.status(404).send("Not found!");
  }
};

module.exports = {
  getStudentList,
  getDetailStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
