let studentList = [
  {
    id: 1,
    fullName: "Le Cong Huu",
    age: 20,
    numberClass: 15,
  },
  {
    id: 2,
    fullName: "Nguyen Van A",
    age: 17,
    numberClass: 11,
  },
  {
    id: 3,
    fullName: "Tran Thi B",
    age: 18,
    numberClass: 12,
  },
];

const getList = () => {
  if (studentList) return studentList;
  else return false;
};

const getDetail = (id) => {
  const index = studentList.findIndex((student) => {
    return student.id == id;
  });

  if (index != -1) {
    const student = studentList[index];
    return student;
  } else {
    return false;
  }
};

const create = (student) => {
  newStudent = {
    id: Math.random(),
    ...student,
  };
  studentList = [...studentList, newStudent];
  return newStudent;
};

const update = (id, student) => {
  const index = studentList.findIndex((student) => student.id == id);
  if (index != -1) {
    const oldStudent = studentList[index];
    const newStudent = { ...oldStudent, ...student };
    studentList[index] = newStudent;
    return newStudent;
  } else {
    return false;
  }
};

const deleteById = (id) => {
  const index = studentList.findIndex((student) => student.id == id);
  if (index != -1) {
    const removeStudent = studentList[index];
    studentList.splice(index, 1);
    return removeStudent;
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
