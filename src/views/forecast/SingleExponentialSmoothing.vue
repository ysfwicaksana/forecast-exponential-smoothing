<template>
  <div>
    <h1 class="text-red-400 font-bold text-lg">Single Exponential Smoothing</h1>
    <hr />
    <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-8">
        <div>
          <table-pmb :dataset="pmb" />
        </div>
        <div>
          <table-forecast :dataset="forecast1" />
          <table-forecast :dataset="forecast2" />
          <table-forecast :dataset="forecast3" />
          <table-forecast :dataset="forecast4" />
          <table-forecast :dataset="forecast5" />
          <table-forecast :dataset="forecast6" />
          <table-forecast :dataset="forecast7" />
          <table-forecast :dataset="forecast8" />
          <table-forecast :dataset="forecast9" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pmbData from "../../utils/data";
import TableForecast from "../../components/TableForecast.vue";
import TablePmb from "../../components/TablePmb.vue";

export default {
  components: {
    TableForecast,
    TablePmb,
  },
  data() {
    return {
      pmb: [],
      forecast: [],
      forecast1: [],
      forecast2: [],
      forecast3: [],
      forecast4: [],
      forecast5: [],
      forecast6: [],
      forecast7: [],
      forecast8: [],
      forecast9: [],
    };
  },
  mounted() {
    this.pmb = pmbData;
    this.generateSes();
  },

  methods: {
    generateSes() {
      let allForecast = [];
      for (let index = 0.1; index < 1; index += 0.1) {
        if (index.toFixed(1) == 1.0) {
          continue;
        }

        let alpha = index.toFixed(1);

        let bufferForecast = [];
        pmbData.forEach((data, index) => {
          if (index === 0) {
            bufferForecast.push({
              i: index,
              tahun: data.tahun,
              alpha: alpha,
              jumlah: data.jumlah,
              forecast: "-",
              result: "-",
            });
          } else if (index === 1) {
            let last = Object.values(bufferForecast)[
              Object.keys(bufferForecast).length - 1
            ];

            bufferForecast.push({
              i: index,
              tahun: data.tahun,
              alpha: alpha,
              jumlah: data.jumlah,
              forecast: last.jumlah,
              result: last.jumlah,
            });
          } else {
            let last = Object.values(bufferForecast)[
              Object.keys(bufferForecast).length - 1
            ];
            let forecast =
              last.forecast + alpha * (last.jumlah - last.forecast);

            bufferForecast.push({
              i: index,
              tahun: data.tahun,
              alpha: alpha,
              jumlah: data.jumlah,
              forecast: forecast,
              result: Math.round(forecast),
            });
          }
        });

        //start: hasil peramalan tahun selanjutnya
        let predict = Object.values(bufferForecast)[
          Object.keys(bufferForecast).length - 1
        ];

        bufferForecast.push({
          i: predict.i + 1,
          tahun: parseInt(predict.tahun) + 1,
          alpha: alpha,
          forecast:
            predict.forecast + alpha * (predict.jumlah - predict.forecast),
          result: Math.round(
            predict.forecast + alpha * (predict.jumlah - predict.forecast)
          ),
        });
        this.forecast = bufferForecast;
        allForecast.push(bufferForecast);
        //end: hasil peramalan tahun selanjutnya
      }

      this.forecast1 = allForecast[0];
      this.forecast2 = allForecast[1];
      this.forecast3 = allForecast[2];
      this.forecast4 = allForecast[3];
      this.forecast5 = allForecast[4];
      this.forecast6 = allForecast[5];
      this.forecast7 = allForecast[6];
      this.forecast8 = allForecast[7];
      this.forecast9 = allForecast[8];
    },
  },
};
</script>