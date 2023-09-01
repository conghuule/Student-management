const checkEmpty = (req, res, next) => {
  const { fullName, age, numberClass } = req.body;
  if (fullName && age && numberClass) {
    next();
  } else {
    res
      .status(500)
      .send({ message: "khong duoc de trong fullName, age, numberClass" });
  }
};

const checkNumberClass = (req, res, next) => {
  const { numberClass } = req.body;
  if (numberClass >= 1 && numberClass <= 12) {
    next();
  } else {
    res.status(500).send({ message: "numberClass phai tu 1 den 12" });
  }
};

module.exports = {
  checkEmpty,
  checkNumberClass,
};
