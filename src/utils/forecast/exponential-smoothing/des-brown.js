/**
 *  variable actualT = S't, actualT2 = S't
 */
const DESBrown = (dataset) => {
  let allForecast = [];
  for (let index = 0.1; index < 1; index += 0.1) {
    if (index.toFixed(1) == 1.0) {
      continue;
    }

    let alpha = index.toFixed(1);
    let bufferForecast = [];
    dataset.forEach((data, i) => {
      if (i === 0) {
        bufferForecast.push({
          i: i,
          period: data.period,
          alpha: alpha,
          qty: data.qty,
          actualT: data.qty,
          actualT2: data.qty,
          at: data.qty,
          bt: 0,
          forecast: data.qty + 0,
          result: 0,
          mad: 0,
          mse: 0,
          mape: 0,
        });
      } else if (i === 1) {
        const latestForecast = Object.values(bufferForecast)[i - 1];

        const sumActualT =
          alpha * data.qty + (1 - alpha) * latestForecast.actualT;

        const sumActualT2 =
          alpha * sumActualT + (1 - alpha) * latestForecast.actualT2;

        const at = 2 * sumActualT - sumActualT2;

        const bt = (alpha / (1 - alpha)) * (sumActualT - sumActualT2);

        bufferForecast.push({
          i: i,
          period: data.period,
          alpha: alpha,
          qty: data.qty,
          actualT: sumActualT,
          actualT2: sumActualT2,
          at: at,
          bt: bt,
          forecast: latestForecast.forecast,
          result: Math.round(latestForecast.forecast),
          mad: data.qty - latestForecast.qty,
          mse: Math.pow(data.qty - latestForecast.qty, 2),
          mape: Math.abs(
            (((data.qty - latestForecast.qty) / data.qty) * 100).toFixed(2)
          ),
        });
      } else {
        const latestForecast = Object.values(bufferForecast)[
          Object.keys(bufferForecast).length - 1
        ];

        const sumActualT =
          alpha * data.qty + (1 - alpha) * latestForecast.actualT;

        const sumActualT2 =
          alpha * sumActualT + (1 - alpha) * latestForecast.actualT2;

        bufferForecast.push({
          i: i,
          period: data.period,
          alpha: alpha,
          qty: data.qty,
          actualT: sumActualT,
          actualT2: sumActualT2,
          at: 2 * sumActualT - sumActualT2,
          bt: (alpha / (1 - alpha)) * (sumActualT - sumActualT2),
          forecast: latestForecast.at + latestForecast.bt,
          result: Math.round(latestForecast.at + latestForecast.bt),
          mad: Math.abs(
            data.qty - (latestForecast.at + latestForecast.bt)
          ).toFixed(2),
          mse: Math.pow(
            data.qty - (latestForecast.at + latestForecast.bt),
            2
          ).toFixed(2),
          mape: Math.abs(
            ((data.qty - (latestForecast.at + latestForecast.bt)) / data.qty) *
              100
          ).toFixed(2),
        });
      }
    });

    //start: hasil peramalan tahun selanjutnya

    let predict = Object.values(bufferForecast)[
      Object.keys(bufferForecast).length - 1
    ];

    bufferForecast.push({
      i: predict.i + 1,
      period: parseInt(predict.period) + 1,
      forecast: predict.at + predict.bt,
      result: Math.round(predict.at + predict.bt),
    });

    allForecast.push(bufferForecast);
    //end: hasil peramalan tahun selanjutnya
  }

  return allForecast;
};

export default DESBrown;
