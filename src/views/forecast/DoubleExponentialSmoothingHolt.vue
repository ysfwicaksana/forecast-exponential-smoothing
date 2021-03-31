<template>
  <div>
    <div class="container px-4 py-4">
      <h1 class="text-red-400 font-bold text-xl">
        Double Exponential Smoothing - Holt Method
      </h1>
    </div>
    <div class="container mx-auto">
      <table-pmb :dataset="pmb" />

      <table-forecast-des-holt
        :dataset="forecast1.dataset"
        :mse="forecast1.mse"
        :mad="forecast1.mad"
        :mape="forecast1.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast2.dataset"
        :mse="forecast2.mse"
        :mad="forecast2.mad"
        :mape="forecast2.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast3.dataset"
        :mse="forecast3.mse"
        :mad="forecast3.mad"
        :mape="forecast3.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast4.dataset"
        :mse="forecast4.mse"
        :mad="forecast4.mad"
        :mape="forecast4.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast5.dataset"
        :mse="forecast5.mse"
        :mad="forecast5.mad"
        :mape="forecast5.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast6.dataset"
        :mse="forecast6.mse"
        :mad="forecast6.mad"
        :mape="forecast6.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast7.dataset"
        :mse="forecast7.mse"
        :mad="forecast7.mad"
        :mape="forecast7.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast8.dataset"
        :mse="forecast8.mse"
        :mad="forecast8.mad"
        :mape="forecast8.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast9.dataset"
        :mse="forecast9.mse"
        :mad="forecast9.mad"
        :mape="forecast9.mape"
      />

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
</template>

<script>
import dataset from "../../utils/dataset";
import TablePmb from "../../components/TablePmb.vue";
import DESHolt from "../../utils/forecast/exponential-smoothing/des-holt";
import TableForecastDesHolt from "../../components/TableForecastDesHolt";
import { MSE, MAD, MAPE } from "../../utils/forecast/error";
import VueApexCharts from "vue3-apexcharts";

export default {
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

  components: {
    TablePmb,
    apexchart: VueApexCharts,
    TableForecastDesHolt,
  },

  mounted() {
    this.pmb = dataset;
    this.generateDesHolt();
  },

  methods: {
    generateDesHolt() {
      const desHoltResult = DESHolt(dataset);

      this.forecast1 = {
        dataset: desHoltResult[0],
        mse: MSE(desHoltResult[0]),
        mad: MAD(desHoltResult[0]),
        mape: MAPE(desHoltResult[0]).toFixed(2),
      };
      this.forecast2 = {
        dataset: desHoltResult[1],
        mse: MSE(desHoltResult[1]),
        mad: MAD(desHoltResult[1]),
        mape: MAPE(desHoltResult[1]).toFixed(2),
      };

      this.forecast3 = {
        dataset: desHoltResult[2],
        mse: MSE(desHoltResult[2]),
        mad: MAD(desHoltResult[2]),
        mape: MAPE(desHoltResult[2]).toFixed(2),
      };
      this.forecast4 = {
        dataset: desHoltResult[3],
        mse: MSE(desHoltResult[3]),
        mad: MAD(desHoltResult[3]),
        mape: MAPE(desHoltResult[3]).toFixed(2),
      };
      this.forecast5 = {
        dataset: desHoltResult[4],
        mse: MSE(desHoltResult[4]),
        mad: MAD(desHoltResult[4]),
        mape: MAPE(desHoltResult[4]).toFixed(2),
      };
      this.forecast6 = {
        dataset: desHoltResult[5],
        mse: MSE(desHoltResult[5]),
        mad: MAD(desHoltResult[5]),
        mape: MAPE(desHoltResult[5]).toFixed(2),
      };
      this.forecast7 = {
        dataset: desHoltResult[6],
        mse: MSE(desHoltResult[6]),
        mad: MAD(desHoltResult[6]),
        mape: MAPE(desHoltResult[6]).toFixed(2),
      };
      this.forecast8 = {
        dataset: desHoltResult[7],
        mse: MSE(desHoltResult[7]),
        mad: MAD(desHoltResult[7]),
        mape: MAPE(desHoltResult[7]).toFixed(2),
      };
      this.forecast9 = {
        dataset: desHoltResult[8],
        mse: MSE(desHoltResult[8]),
        mad: MAD(desHoltResult[8]),
        mape: MAPE(desHoltResult[8]).toFixed(2),
      };

      const minMSE = [
        MSE(desHoltResult[0]),
        MSE(desHoltResult[1]),
        MSE(desHoltResult[2]),
        MSE(desHoltResult[3]),
        MSE(desHoltResult[4]),
        MSE(desHoltResult[5]),
        MSE(desHoltResult[6]),
        MSE(desHoltResult[7]),
        MSE(desHoltResult[8]),
      ];

      this.optimalAlpha = this.getMinimumMSE(desHoltResult, minMSE)[0].alpha;
      this.minimumMSE = Math.min(...minMSE);

      const bestForecast = this.getPropChart(
        this.getMinimumMSE(desHoltResult, minMSE)
      );

      this.forecastNextPeriod = this.getMinimumMSE(desHoltResult, minMSE)[
        this.getMinimumMSE(desHoltResult, minMSE).length - 1
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
          width: 400,
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

    getMinimumMSE(desHoltResult, minMSE) {
      for (let i = 0; i < desHoltResult.length; i++) {
        let mse = MSE(desHoltResult[i]);
        if (mse !== Math.min(...minMSE)) {
          continue;
        }

        return desHoltResult[i];
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

<style>
</style>