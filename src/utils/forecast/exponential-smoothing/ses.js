const SES = (dataset) => {
  let allForecast = [];
  for (let index = 0.1; index < 1; index += 0.1) {
    if (index.toFixed(1) == 1.0) {
      continue;
    }

    let alpha = index.toFixed(1);
    let bufferForecast = [];
    dataset.forEach((data, index) => {
      if (index === 0) {
        bufferForecast.push({
          i: index,
          period: data.period,
          alpha: alpha,
          qty: data.qty,
          forecast: data.qty,
          result: 0,
          mad: 0,
          mse: 0,
          mape: 0,
        });
      } else if (index === 1) {
        let last = Object.values(bufferForecast)[
          Object.keys(bufferForecast).length - 1
        ];

        bufferForecast.push({
          i: index,
          period: data.period,
          alpha: alpha,
          qty: data.qty,
          forecast: last.qty,
          result: last.qty,
          mad: data.qty - last.qty,
          mse: Math.pow(data.qty - last.qty, 2),
          mape: (((data.qty - last.qty) / data.qty) * 100).toFixed(2),
        });
      } else {
        let last = Object.values(bufferForecast)[
          Object.keys(bufferForecast).length - 1
        ];

        let forecast = last.forecast + alpha * (last.qty - last.forecast);

        bufferForecast.push({
          i: index,
          period: data.period,
          alpha: alpha,
          qty: data.qty,
          forecast: forecast,
          result: Math.round(forecast),
          mad: Math.abs(data.qty - forecast).toFixed(2),
          mse: Math.pow(data.qty - forecast, 2).toFixed(2),
          mape: (((data.qty - forecast) / data.qty) * 100).toFixed(2),
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
      alpha: alpha,
      forecast: predict.forecast + alpha * (predict.qty - predict.forecast),
      result: Math.round(
        predict.forecast + alpha * (predict.qty - predict.forecast)
      ),
    });

    allForecast.push(bufferForecast);
    //end: hasil peramalan tahun selanjutnya
  }

  return allForecast;
};

export default SES;
