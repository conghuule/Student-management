const { Student } = require("../model");

// let studentList = [
//   {
//     id: 1,
//     fullName: "Le Cong Huu",
//     age: 20,
//     numberClass: 15,
//   },
//   {
//     id: 2,
//     fullName: "Nguyen Van A",
//     age: 17,
//     numberClass: 11,
//   },
//   {
//     id: 3,
//     fullName: "Tran Thi B",
//     age: 18,
//     numberClass: 12,
//   },
// ];

const getList = async () => {
  const studentList = await Student.findAll();

  if (studentList) return studentList;
  else return false;
};

const getDetail = async (id) => {
  const student = await Student.findOne({
    where: {
      id,
    },
  });

  if (student) {
    return student;
  } else {
    return false;
  }
};

const create = async (student) => {
  const newStudent = await Student.create(student);
  // newStudent = {
  //   id: Math.random(),
  //   ...student,
  // };
  // studentList = [...studentList, newStudent];
  return newStudent;
};

const update = async (id, student) => {
  const studentUpdate = await getDetail(id);

  if (studentUpdate) {
    studentUpdate.id = student.id;
    studentUpdate.fullName = student.fullName;
    studentUpdate.age = student.age;
    const studentUpdated = await studentUpdate.save();
    return studentUpdated;
  } else {
    return false;
  }
};

const deleteById = async (id) => {

  const studentDelete = await getDetail(id);

  if (studentDelete) {
    const studentDeleted = await studentDelete.destroy();
    return studentDeleted; 
  } else {
    return false;
  }
};

module.exports = {
  getList,
  getDetail,
  create,
  update,
  deleteById,
};
