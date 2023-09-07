const {
  getList,
  getDetail,
  create,
  update,
  deleteById,
} = require("../services/student.services");

const getStudentList = async (req, res) => {
  const studentList = await getList();
  if (studentList) {
    res.status(200).send(studentList);
  } else {
    res.status(404).send("Not found!");
  }
};

const getDetailStudentById = async (req, res) => {
  const params = req.params;
  const id = params.id;

  const student = await getDetail(id);

  if (student) {
    res.status(200).send(student);
  } else {
    res.status(404).send("Not found!");
  }
};

const createStudent = async (req, res) => {
  let student = req.body;
  const newStudent = await create(student);
  res.status(201).send(newStudent);
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const student = req.body;

  const updateStudent = await update(id, student);
  if (updateStudent) {
    res.status(200).send(updateStudent);
  } else {
    res.status(404).send("Not found!");
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const removedStudent = await deleteById(id);
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
