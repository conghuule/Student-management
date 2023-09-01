const logFeature = (req, res, next) => {
  console.log("day la tinh nang lay danh sach hoc sinh");
  next(); // chay xuong middleware tiep theo
};

module.exports = {
  logFeature,
};
