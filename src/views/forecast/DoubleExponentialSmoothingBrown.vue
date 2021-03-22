<template>
  <div>
    <div class="container px-4 py-4">
      <h1 class="text-red-400 font-bold text-xl">
        Double Exponential Smoothing - Brown's Linear Method
      </h1>
    </div>
    <div class="container px-4">
      <div class="grid grid-cols-2 gap-8">
        <div>
          <table-pmb :dataset="pmb" />

          <table-forecast-des
            :dataset="forecast1.dataset"
            :mse="forecast1.mse"
            :mad="forecast1.mad"
            :mape="forecast1.mape"
          />
          <table-forecast-des
            :dataset="forecast2.dataset"
            :mse="forecast2.mse"
            :mad="forecast2.mad"
            :mape="forecast2.mape"
          />
          <table-forecast-des
            :dataset="forecast3.dataset"
            :mse="forecast3.mse"
            :mad="forecast3.mad"
            :mape="forecast3.mape"
          />
          <table-forecast-des
            :dataset="forecast4.dataset"
            :mse="forecast4.mse"
            :mad="forecast4.mad"
            :mape="forecast4.mape"
          />
          <table-forecast-des
            :dataset="forecast5.dataset"
            :mse="forecast5.mse"
            :mad="forecast5.mad"
            :mape="forecast5.mape"
          />
          <table-forecast-des
            :dataset="forecast6.dataset"
            :mse="forecast6.mse"
            :mad="forecast6.mad"
            :mape="forecast6.mape"
          />
          <table-forecast-des
            :dataset="forecast7.dataset"
            :mse="forecast7.mse"
            :mad="forecast7.mad"
            :mape="forecast7.mape"
          />
          <table-forecast-des
            :dataset="forecast8.dataset"
            :mse="forecast8.mse"
            :mad="forecast8.mad"
            :mape="forecast8.mape"
          />
          <table-forecast-des
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
import TablePmb from "../../components/TablePmb.vue";
import TableForecastDes from "../../components/TableForecastDes";
import { MSE, MAD, MAPE } from "../../utils/forecast/error";
import DESBrown from "../../utils/forecast/exponential-smoothing/des-brown";
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
    TableForecastDes,
  },
  mounted() {
    this.pmb = dataset;
    this.generateDesBrown();
  },

  methods: {
    generateDesBrown() {
      const desBrownResult = DESBrown(dataset);

      this.forecast1 = {
        dataset: desBrownResult[0],
        mse: MSE(desBrownResult[0]),
        mad: MAD(desBrownResult[0]),
        mape: MAPE(desBrownResult[0]).toFixed(2),
      };
      this.forecast2 = {
        dataset: desBrownResult[1],
        mse: MSE(desBrownResult[1]),
        mad: MAD(desBrownResult[1]),
        mape: MAPE(desBrownResult[1]).toFixed(2),
      };
      this.forecast3 = {
        dataset: desBrownResult[2],
        mse: MSE(desBrownResult[2]),
        mad: MAD(desBrownResult[2]),
        mape: MAPE(desBrownResult[2]).toFixed(2),
      };
      this.forecast4 = {
        dataset: desBrownResult[3],
        mse: MSE(desBrownResult[3]),
        mad: MAD(desBrownResult[3]),
        mape: MAPE(desBrownResult[3]).toFixed(2),
      };
      this.forecast5 = {
        dataset: desBrownResult[4],
        mse: MSE(desBrownResult[4]),
        mad: MAD(desBrownResult[4]),
        mape: MAPE(desBrownResult[4]).toFixed(2),
      };
      this.forecast6 = {
        dataset: desBrownResult[5],
        mse: MSE(desBrownResult[5]),
        mad: MAD(desBrownResult[5]),
        mape: MAPE(desBrownResult[5]).toFixed(2),
      };
      this.forecast7 = {
        dataset: desBrownResult[6],
        mse: MSE(desBrownResult[6]),
        mad: MAD(desBrownResult[6]),
        mape: MAPE(desBrownResult[6]).toFixed(2),
      };
      this.forecast8 = {
        dataset: desBrownResult[7],
        mse: MSE(desBrownResult[7]),
        mad: MAD(desBrownResult[7]),
        mape: MAPE(desBrownResult[7]).toFixed(2),
      };
      this.forecast9 = {
        dataset: desBrownResult[8],
        mse: MSE(desBrownResult[8]),
        mad: MAD(desBrownResult[8]),
        mape: MAPE(desBrownResult[8]).toFixed(2),
      };

      const minMSE = [
        MSE(desBrownResult[0]),
        MSE(desBrownResult[1]),
        MSE(desBrownResult[2]),
        MSE(desBrownResult[3]),
        MSE(desBrownResult[4]),
        MSE(desBrownResult[5]),
        MSE(desBrownResult[6]),
        MSE(desBrownResult[7]),
        MSE(desBrownResult[8]),
      ];

      this.optimalAlpha = this.getMinimumMSE(desBrownResult, minMSE)[0].alpha;
      this.minimumMSE = Math.min(...minMSE);

      const bestForecast = this.getPropChart(
        this.getMinimumMSE(desBrownResult, minMSE)
      );

      this.forecastNextPeriod = this.getMinimumMSE(desBrownResult, minMSE)[
        this.getMinimumMSE(desBrownResult, minMSE).length - 1
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

    getMinimumMSE(desBrownResult, minMSE) {
      for (let i = 0; i < desBrownResult.length; i++) {
        let mse = MSE(desBrownResult[i]);
        if (mse !== Math.min(...minMSE)) {
          continue;
        }

        return desBrownResult[i];
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