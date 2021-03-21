<template>
  <div>
    <div class="container px-4 py-4">
      <h1 class="text-red-400 font-bold text-xl">
        Single Exponential Smoothing
      </h1>
    </div>
    <div class="container px-4">
      <div class="grid grid-cols-2 gap-8">
        <div>
          <table-pmb :dataset="pmb" />

          <table-forecast
            :dataset="forecast1.dataset"
            :mse="forecast1.mse"
            :mad="forecast1.mad"
            :mape="forecast1.mape"
          />
          <table-forecast
            :dataset="forecast2.dataset"
            :mse="forecast2.mse"
            :mad="forecast2.mad"
            :mape="forecast2.mape"
          />
          <table-forecast
            :dataset="forecast3.dataset"
            :mse="forecast3.mse"
            :mad="forecast3.mad"
            :mape="forecast3.mape"
          />
          <table-forecast
            :dataset="forecast4.dataset"
            :mse="forecast4.mse"
            :mad="forecast4.mad"
            :mape="forecast4.mape"
          />
          <table-forecast
            :dataset="forecast5.dataset"
            :mse="forecast5.mse"
            :mad="forecast5.mad"
            :mape="forecast5.mape"
          />
          <table-forecast
            :dataset="forecast6.dataset"
            :mse="forecast6.mse"
            :mad="forecast6.mad"
            :mape="forecast6.mape"
          />
          <table-forecast
            :dataset="forecast7.dataset"
            :mse="forecast7.mse"
            :mad="forecast7.mad"
            :mape="forecast7.mape"
          />
          <table-forecast
            :dataset="forecast8.dataset"
            :mse="forecast8.mse"
            :mad="forecast8.mad"
            :mape="forecast8.mape"
          />
          <table-forecast
            :dataset="forecast9.dataset"
            :mse="forecast9.mse"
            :mad="forecast9.mad"
            :mape="forecast9.mape"
          />
        </div>
        <div>
          <div class="font-semibold pb-5">
            <b>Kesimpulan:</b>
            Peramalan terbaik untuk PMB yakni dengan nilai alpha
            {{ optimalAlpha }} karena memiliki nilai MSE terkecil yakni
            {{ minimumMSE.toFixed(2) }}
          </div>
          <apexchart
            type="line"
            height="350"
            :options="chartOptions"
            :series="chartSeries"
          ></apexchart>
          <p>
            Hasil Peramalan Tahun Selanjutnya:
            <b class="font-bold text-red-500">{{ forecastNextPeriod }}</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataset from "../../utils/dataset";
import TableForecast from "../../components/TableForecast.vue";
import TablePmb from "../../components/TablePmb.vue";
import { MSE, MAD, MAPE } from "../../utils/forecast/error";
import SES from "../../utils/forecast/exponential-smoothing/ses";
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    TableForecast,
    TablePmb,
    apexchart: VueApexCharts,
  },
  data() {
    return {
      pmb: [],
      optimalAlpha: 0,
      minimumMSE: 0,
      chartOptions: [],
      chartSeries: [],
      forecastNextPeriod: 0,
      forecast1: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast2: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast3: {
        dataset: [],
        mse: 0,
        mad: 0,
      },
      forecast4: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast5: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast6: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast7: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast8: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast9: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
    };
  },
  mounted() {
    this.pmb = dataset;
    this.generateSes();
  },

  methods: {
    generateSes() {
      //single exponential smoothing formula
      const sesResult = SES(dataset);

      this.forecast1 = {
        dataset: sesResult[0],
        mse: MSE(sesResult[0]),
        mad: MAD(sesResult[0]),
        mape: MAPE(sesResult[0]).toFixed(2),
      };
      this.forecast2 = {
        dataset: sesResult[1],
        mse: MSE(sesResult[1]),
        mad: MAD(sesResult[1]),
        mape: MAPE(sesResult[1]).toFixed(2),
      };
      this.forecast3 = {
        dataset: sesResult[2],
        mse: MSE(sesResult[2]),
        mad: MAD(sesResult[2]),
        mape: MAPE(sesResult[2]).toFixed(2),
      };
      this.forecast4 = {
        dataset: sesResult[3],
        mse: MSE(sesResult[3]),
        mad: MAD(sesResult[3]),
        mape: MAPE(sesResult[3]).toFixed(2),
      };
      this.forecast5 = {
        dataset: sesResult[4],
        mse: MSE(sesResult[4]),
        mad: MAD(sesResult[4]),
        mape: MAPE(sesResult[4]).toFixed(2),
      };
      this.forecast6 = {
        dataset: sesResult[5],
        mse: MSE(sesResult[5]),
        mad: MAD(sesResult[5]),
        mape: MAPE(sesResult[5]).toFixed(2),
      };
      this.forecast7 = {
        dataset: sesResult[6],
        mse: MSE(sesResult[6]),
        mad: MAD(sesResult[6]),
        mape: MAPE(sesResult[6]).toFixed(2),
      };
      this.forecast8 = {
        dataset: sesResult[7],
        mse: MSE(sesResult[7]),
        mad: MAD(sesResult[7]),
        mape: MAPE(sesResult[7]).toFixed(2),
      };
      this.forecast9 = {
        dataset: sesResult[8],
        mse: MSE(sesResult[8]),
        mad: MAD(sesResult[8]),
        mape: MAPE(sesResult[8]).toFixed(2),
      };

      const minMSE = [
        MSE(sesResult[0]),
        MSE(sesResult[1]),
        MSE(sesResult[2]),
        MSE(sesResult[3]),
        MSE(sesResult[4]),
        MSE(sesResult[5]),
        MSE(sesResult[6]),
        MSE(sesResult[7]),
        MSE(sesResult[8]),
      ];

      this.optimalAlpha = this.getMinimumMSE(sesResult, minMSE)[0].alpha;
      this.minimumMSE = Math.min(...minMSE);

      const bestForecast = this.getPropChart(
        this.getMinimumMSE(sesResult, minMSE)
      );

      this.forecastNextPeriod = this.getMinimumMSE(sesResult, minMSE)[
        this.getMinimumMSE(sesResult, minMSE).length - 1
      ].result;

      this.chartSeries = [
        {
          name: "Data PMB",
          type: "column",
          data: bestForecast.realQty,
        },
        {
          name: "Peramalan PMB",
          type: "line",
          data: bestForecast.forecastQty,
        },
      ];

      this.chartOptions = {
        chart: {
          height: 350,
          type: "line",
        },
        stroke: {
          width: [0, 4],
        },
        title: {
          text: "Grafik Perbandingan Data Asli Dengan Peramalan PMB",
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1],
        },
        labels: bestForecast.labels,
        xaxis: {
          type: "category",
        },
        yaxis: [
          {
            title: {
              text: "Data PMB",
            },
          },
          {
            opposite: true,
            title: {
              text: "Peramalan PMB",
            },
          },
        ],
      };
    },

    getMinimumMSE(sesResult, minMSE) {
      for (let i = 0; i < sesResult.length; i++) {
        let mse = MSE(sesResult[i]);
        if (mse !== Math.min(...minMSE)) {
          continue;
        }

        return sesResult[i];
      }
    },

    getPropChart(dataset) {
      let propLabel = [];
      let propSeries1 = [];
      let propSeries2 = [];

      dataset.forEach((data, i) => {
        if (i !== dataset.length - 1) {
          propLabel.push(data.period);
          propSeries1.push(data.qty);
          propSeries2.push(data.result);
        }
      });

      return {
        labels: propLabel,
        realQty: propSeries1,
        forecastQty: propSeries2,
      };
    },
  },
};
</script>