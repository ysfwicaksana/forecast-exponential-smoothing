const DESHolt = (dataset) => {
  let allForecast = [];

  for (let index = 0.1; index < 1; index += 0.1) {
    if (index.toFixed(1) == 1.0) {
      continue;
    }

    let alpha = index.toFixed(1);
    let bufferForecast = [];

    for (let indexBeta = 0.1; indexBeta < 1; indexBeta += 0.1) {
      if (indexBeta.toFixed(1) == 1.0) {
        continue;
      }

      let beta = indexBeta.toFixed(1);

      dataset.forEach((data, i) => {
        if (i === 0) {
          bufferForecast.push({
            i: i,
            period: data.period,
            alpha: alpha,
            beta: beta,
            qty: data.qty,
            level: 0,
            trend: 0,
            forecast: 0,
            result: 0,
            mad: 0,
            mse: 0,
            mape: 0,
          });
        } else if (i === 1) {
          let latestForecast = Object.values(bufferForecast)[i - 1];

          bufferForecast.push({
            i: i,
            period: data.period,
            alpha: alpha,
            beta: beta,
            qty: data.qty,
            level: data.qty,
            trend: data.qty - latestForecast.qty,
            forecast: 0,
            result: 0,
            mad: 0,
            mse: 0,
            mape: 0,
          });
        } else {
          let latestForecast = Object.values(bufferForecast)[i - 1];

          let level =
            alpha * data.qty +
            (1 - alpha) * (latestForecast.level + latestForecast.trend);

          let trend =
            beta * (level - latestForecast.level) +
            (1 - beta) * latestForecast.trend;

          bufferForecast.push({
            i: i,
            period: data.period,
            alpha: alpha,
            beta: beta,
            qty: data.qty,
            level: level,
            trend: trend,
            forecast: latestForecast.level + latestForecast.trend,
            result: Math.round(latestForecast.level + latestForecast.trend),
            mad: Math.abs(
              data.qty - (latestForecast.level + latestForecast.trend)
            ),
            mse: Math.pow(
              data.qty - (latestForecast.level + latestForecast.trend),
              2
            ).toFixed(2),
            mape: Math.abs(
              ((data.qty - (latestForecast.level + latestForecast.trend)) /
                data.qty) *
                100
            ).toFixed(2),
          });
        }
      });
    }

    let predict = Object.values(bufferForecast)[
      Object.keys(bufferForecast).length - 1
    ];

    bufferForecast.push({
      i: predict.i + 1,
      period: parseInt(predict.period) + 1,
      forecast: predict.level + predict.trend,
      result: Math.round(predict.level + predict.trend),
    });

    allForecast.push(bufferForecast);
  }

  return allForecast;
};

export default DESHolt;
