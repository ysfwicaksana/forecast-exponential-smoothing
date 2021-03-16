const MSE = (data) => {
  var sumMSE = 0;
  data.forEach((mse, i) => {
    if (i !== data.length - 1) {
      sumMSE += Number(mse.mse);
    }
  });

  return sumMSE / (data.length - 1);
};
const MAD = (data) => {
  var sumMAD = 0;
  data.forEach((mad, i) => {
    if (i !== data.length - 1) {
      sumMAD += Number(mad.mad);
    }
  });

  return sumMAD / (data.length - 1);
};
const MAPE = (data) => {
  var sumMAPE = 0;
  data.forEach((mape, i) => {
    if (i !== data.length - 1) {
      sumMAPE += Number(mape.mape);
    }
  });

  return sumMAPE / (data.length - 1);
};

export { MSE, MAD, MAPE };
