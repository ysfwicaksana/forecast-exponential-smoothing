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

      <table-forecast-des-holt
        :dataset="forecast10.dataset"
        :mse="forecast10.mse"
        :mad="forecast10.mad"
        :mape="forecast10.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast11.dataset"
        :mse="forecast11.mse"
        :mad="forecast11.mad"
        :mape="forecast11.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast12.dataset"
        :mse="forecast12.mse"
        :mad="forecast12.mad"
        :mape="forecast12.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast13.dataset"
        :mse="forecast13.mse"
        :mad="forecast13.mad"
        :mape="forecast13.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast14.dataset"
        :mse="forecast14.mse"
        :mad="forecast14.mad"
        :mape="forecast14.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast15.dataset"
        :mse="forecast15.mse"
        :mad="forecast15.mad"
        :mape="forecast15.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast16.dataset"
        :mse="forecast16.mse"
        :mad="forecast16.mad"
        :mape="forecast16.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast17.dataset"
        :mse="forecast17.mse"
        :mad="forecast17.mad"
        :mape="forecast17.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast18.dataset"
        :mse="forecast18.mse"
        :mad="forecast18.mad"
        :mape="forecast18.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast19.dataset"
        :mse="forecast19.mse"
        :mad="forecast19.mad"
        :mape="forecast19.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast20.dataset"
        :mse="forecast20.mse"
        :mad="forecast20.mad"
        :mape="forecast20.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast21.dataset"
        :mse="forecast21.mse"
        :mad="forecast21.mad"
        :mape="forecast21.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast22.dataset"
        :mse="forecast22.mse"
        :mad="forecast22.mad"
        :mape="forecast22.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast23.dataset"
        :mse="forecast23.mse"
        :mad="forecast23.mad"
        :mape="forecast23.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast24.dataset"
        :mse="forecast24.mse"
        :mad="forecast24.mad"
        :mape="forecast24.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast25.dataset"
        :mse="forecast25.mse"
        :mad="forecast25.mad"
        :mape="forecast25.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast26.dataset"
        :mse="forecast26.mse"
        :mad="forecast26.mad"
        :mape="forecast26.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast27.dataset"
        :mse="forecast27.mse"
        :mad="forecast27.mad"
        :mape="forecast27.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast28.dataset"
        :mse="forecast28.mse"
        :mad="forecast28.mad"
        :mape="forecast28.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast29.dataset"
        :mse="forecast29.mse"
        :mad="forecast29.mad"
        :mape="forecast29.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast30.dataset"
        :mse="forecast30.mse"
        :mad="forecast30.mad"
        :mape="forecast30.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast31.dataset"
        :mse="forecast31.mse"
        :mad="forecast31.mad"
        :mape="forecast31.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast32.dataset"
        :mse="forecast32.mse"
        :mad="forecast32.mad"
        :mape="forecast32.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast33.dataset"
        :mse="forecast33.mse"
        :mad="forecast33.mad"
        :mape="forecast33.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast34.dataset"
        :mse="forecast34.mse"
        :mad="forecast34.mad"
        :mape="forecast34.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast35.dataset"
        :mse="forecast35.mse"
        :mad="forecast35.mad"
        :mape="forecast35.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast36.dataset"
        :mse="forecast36.mse"
        :mad="forecast36.mad"
        :mape="forecast36.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast37.dataset"
        :mse="forecast37.mse"
        :mad="forecast37.mad"
        :mape="forecast37.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast38.dataset"
        :mse="forecast38.mse"
        :mad="forecast38.mad"
        :mape="forecast38.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast39.dataset"
        :mse="forecast39.mse"
        :mad="forecast39.mad"
        :mape="forecast39.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast40.dataset"
        :mse="forecast40.mse"
        :mad="forecast40.mad"
        :mape="forecast40.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast41.dataset"
        :mse="forecast41.mse"
        :mad="forecast41.mad"
        :mape="forecast41.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast42.dataset"
        :mse="forecast42.mse"
        :mad="forecast42.mad"
        :mape="forecast42.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast43.dataset"
        :mse="forecast43.mse"
        :mad="forecast43.mad"
        :mape="forecast43.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast44.dataset"
        :mse="forecast44.mse"
        :mad="forecast44.mad"
        :mape="forecast44.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast45.dataset"
        :mse="forecast45.mse"
        :mad="forecast45.mad"
        :mape="forecast45.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast46.dataset"
        :mse="forecast46.mse"
        :mad="forecast46.mad"
        :mape="forecast46.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast47.dataset"
        :mse="forecast47.mse"
        :mad="forecast47.mad"
        :mape="forecast47.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast48.dataset"
        :mse="forecast48.mse"
        :mad="forecast48.mad"
        :mape="forecast48.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast49.dataset"
        :mse="forecast49.mse"
        :mad="forecast49.mad"
        :mape="forecast49.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast50.dataset"
        :mse="forecast50.mse"
        :mad="forecast50.mad"
        :mape="forecast50.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast51.dataset"
        :mse="forecast51.mse"
        :mad="forecast51.mad"
        :mape="forecast51.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast52.dataset"
        :mse="forecast52.mse"
        :mad="forecast52.mad"
        :mape="forecast52.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast53.dataset"
        :mse="forecast53.mse"
        :mad="forecast53.mad"
        :mape="forecast53.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast54.dataset"
        :mse="forecast54.mse"
        :mad="forecast54.mad"
        :mape="forecast54.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast55.dataset"
        :mse="forecast55.mse"
        :mad="forecast55.mad"
        :mape="forecast55.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast56.dataset"
        :mse="forecast56.mse"
        :mad="forecast56.mad"
        :mape="forecast56.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast57.dataset"
        :mse="forecast57.mse"
        :mad="forecast57.mad"
        :mape="forecast57.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast58.dataset"
        :mse="forecast58.mse"
        :mad="forecast58.mad"
        :mape="forecast58.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast59.dataset"
        :mse="forecast59.mse"
        :mad="forecast59.mad"
        :mape="forecast59.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast60.dataset"
        :mse="forecast60.mse"
        :mad="forecast60.mad"
        :mape="forecast60.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast61.dataset"
        :mse="forecast61.mse"
        :mad="forecast61.mad"
        :mape="forecast61.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast62.dataset"
        :mse="forecast62.mse"
        :mad="forecast62.mad"
        :mape="forecast62.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast63.dataset"
        :mse="forecast63.mse"
        :mad="forecast63.mad"
        :mape="forecast63.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast64.dataset"
        :mse="forecast64.mse"
        :mad="forecast64.mad"
        :mape="forecast64.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast65.dataset"
        :mse="forecast65.mse"
        :mad="forecast65.mad"
        :mape="forecast65.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast66.dataset"
        :mse="forecast66.mse"
        :mad="forecast66.mad"
        :mape="forecast66.mape"
      />  
      <table-forecast-des-holt
        :dataset="forecast66.dataset"
        :mse="forecast66.mse"
        :mad="forecast66.mad"
        :mape="forecast66.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast67.dataset"
        :mse="forecast67.mse"
        :mad="forecast67.mad"
        :mape="forecast67.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast68.dataset"
        :mse="forecast68.mse"
        :mad="forecast68.mad"
        :mape="forecast68.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast69.dataset"
        :mse="forecast69.mse"
        :mad="forecast69.mad"
        :mape="forecast69.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast70.dataset"
        :mse="forecast70.mse"
        :mad="forecast70.mad"
        :mape="forecast70.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast71.dataset"
        :mse="forecast71.mse"
        :mad="forecast71.mad"
        :mape="forecast71.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast72.dataset"
        :mse="forecast72.mse"
        :mad="forecast72.mad"
        :mape="forecast72.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast73.dataset"
        :mse="forecast73.mse"
        :mad="forecast73.mad"
        :mape="forecast73.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast74.dataset"
        :mse="forecast74.mse"
        :mad="forecast74.mad"
        :mape="forecast74.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast75.dataset"
        :mse="forecast75.mse"
        :mad="forecast75.mad"
        :mape="forecast75.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast76.dataset"
        :mse="forecast76.mse"
        :mad="forecast76.mad"
        :mape="forecast76.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast77.dataset"
        :mse="forecast77.mse"
        :mad="forecast77.mad"
        :mape="forecast77.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast78.dataset"
        :mse="forecast78.mse"
        :mad="forecast78.mad"
        :mape="forecast78.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast79.dataset"
        :mse="forecast79.mse"
        :mad="forecast79.mad"
        :mape="forecast79.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast80.dataset"
        :mse="forecast80.mse"
        :mad="forecast80.mad"
        :mape="forecast80.mape"
      />
      <table-forecast-des-holt
        :dataset="forecast81.dataset"
        :mse="forecast81.mse"
        :mad="forecast81.mad"
        :mape="forecast81.mape"
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
        mape: 0,
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
      forecast10: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast11: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast12: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast13: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast14: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast15: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast16: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast17: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast18: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast19: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast20: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast21: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },

      forecast22: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast23: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast24: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast25: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast26: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast27: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast28: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast29: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast30: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast31: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast32: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast33: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast34: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast35: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast36: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast37: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast38: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast39: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast40: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast41: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast42: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast43: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast44: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast45: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast46: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast47: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast48: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast49: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast50: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast51: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast52: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast53: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast54: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast55: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast56: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast57: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast58: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast59: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast60: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast61: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast62: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast63: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast64: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast65: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast66: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast67: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast68: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast69: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast70: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast71: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast72: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast73: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast74: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast75: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast76: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast77: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast78: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast79: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast80: {
        dataset: [],
        mse: 0,
        mad: 0,
        mape: 0,
      },
      forecast81: {
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
      console.log(desHoltResult);

      //array[0]
      this.forecast1 = {
        dataset: desHoltResult[0][0],
        mse: MSE(desHoltResult[0][0]),
        mad: MAD(desHoltResult[0][0]),
        mape: MAPE(desHoltResult[0][0]).toFixed(2),
      };
      this.forecast2 = {
        dataset: desHoltResult[0][1],
        mse: MSE(desHoltResult[0][1]),
        mad: MAD(desHoltResult[0][1]),
        mape: MAPE(desHoltResult[0][1]).toFixed(2),
      };
      this.forecast3 = {
        dataset: desHoltResult[0][2],
        mse: MSE(desHoltResult[0][2]),
        mad: MAD(desHoltResult[0][2]),
        mape: MAPE(desHoltResult[0][2]).toFixed(2),
      };
      this.forecast4 = {
        dataset: desHoltResult[0][3],
        mse: MSE(desHoltResult[0][3]),
        mad: MAD(desHoltResult[0][3]),
        mape: MAPE(desHoltResult[0][3]).toFixed(2),
      };
      this.forecast5 = {
        dataset: desHoltResult[0][4],
        mse: MSE(desHoltResult[0][4]),
        mad: MAD(desHoltResult[0][4]),
        mape: MAPE(desHoltResult[0][4]).toFixed(2),
      };
      this.forecast6 = {
        dataset: desHoltResult[0][5],
        mse: MSE(desHoltResult[0][5]),
        mad: MAD(desHoltResult[0][5]),
        mape: MAPE(desHoltResult[0][5]).toFixed(2),
      };
      this.forecast7 = {
        dataset: desHoltResult[0][6],
        mse: MSE(desHoltResult[0][6]),
        mad: MAD(desHoltResult[0][6]),
        mape: MAPE(desHoltResult[0][6]).toFixed(2),
      };

      this.forecast8 = {
        dataset: desHoltResult[0][7],
        mse: MSE(desHoltResult[0][7]),
        mad: MAD(desHoltResult[0][7]),
        mape: MAPE(desHoltResult[0][7]).toFixed(2),
      };

      this.forecast9 = {
        dataset: desHoltResult[0][8],
        mse: MSE(desHoltResult[0][8]),
        mad: MAD(desHoltResult[0][8]),
        mape: MAPE(desHoltResult[0][8]).toFixed(2),
      };

      //array[1]
      this.forecast10 = {
        dataset: desHoltResult[1][0],
        mse: MSE(desHoltResult[1][0]),
        mad: MAD(desHoltResult[1][0]),
        mape: MAPE(desHoltResult[1][0]).toFixed(2),
      };
      this.forecast11 = {
        dataset: desHoltResult[1][1],
        mse: MSE(desHoltResult[1][1]),
        mad: MAD(desHoltResult[1][1]),
        mape: MAPE(desHoltResult[1][1]).toFixed(2),
      };
      this.forecast12 = {
        dataset: desHoltResult[1][2],
        mse: MSE(desHoltResult[1][2]),
        mad: MAD(desHoltResult[1][2]),
        mape: MAPE(desHoltResult[1][2]).toFixed(2),
      };
      this.forecast13 = {
        dataset: desHoltResult[1][3],
        mse: MSE(desHoltResult[1][3]),
        mad: MAD(desHoltResult[1][3]),
        mape: MAPE(desHoltResult[1][3]).toFixed(2),
      };
      this.forecast14 = {
        dataset: desHoltResult[1][4],
        mse: MSE(desHoltResult[1][4]),
        mad: MAD(desHoltResult[1][4]),
        mape: MAPE(desHoltResult[1][4]).toFixed(2),
      };
      this.forecast15 = {
        dataset: desHoltResult[1][5],
        mse: MSE(desHoltResult[1][5]),
        mad: MAD(desHoltResult[1][5]),
        mape: MAPE(desHoltResult[1][5]).toFixed(2),
      };
      this.forecast16 = {
        dataset: desHoltResult[1][6],
        mse: MSE(desHoltResult[1][6]),
        mad: MAD(desHoltResult[1][6]),
        mape: MAPE(desHoltResult[1][6]).toFixed(2),
      };

      this.forecast17 = {
        dataset: desHoltResult[1][7],
        mse: MSE(desHoltResult[1][7]),
        mad: MAD(desHoltResult[1][7]),
        mape: MAPE(desHoltResult[1][7]).toFixed(2),
      };

      this.forecast18 = {
        dataset: desHoltResult[1][8],
        mse: MSE(desHoltResult[1][8]),
        mad: MAD(desHoltResult[1][8]),
        mape: MAPE(desHoltResult[1][8]).toFixed(2),
      };

      //array[2]
      this.forecast19 = {
        dataset: desHoltResult[2][0],
        mse: MSE(desHoltResult[2][0]),
        mad: MAD(desHoltResult[2][0]),
        mape: MAPE(desHoltResult[2][0]).toFixed(2),
      };
      this.forecast20 = {
        dataset: desHoltResult[2][1],
        mse: MSE(desHoltResult[2][1]),
        mad: MAD(desHoltResult[2][1]),
        mape: MAPE(desHoltResult[2][1]).toFixed(2),
      };
      this.forecast21 = {
        dataset: desHoltResult[2][2],
        mse: MSE(desHoltResult[2][2]),
        mad: MAD(desHoltResult[2][2]),
        mape: MAPE(desHoltResult[2][2]).toFixed(2),
      };
      this.forecast22 = {
        dataset: desHoltResult[2][3],
        mse: MSE(desHoltResult[2][3]),
        mad: MAD(desHoltResult[2][3]),
        mape: MAPE(desHoltResult[2][3]).toFixed(2),
      };
      this.forecast23 = {
        dataset: desHoltResult[2][4],
        mse: MSE(desHoltResult[2][4]),
        mad: MAD(desHoltResult[2][4]),
        mape: MAPE(desHoltResult[2][4]).toFixed(2),
      };
      this.forecast24 = {
        dataset: desHoltResult[2][5],
        mse: MSE(desHoltResult[2][5]),
        mad: MAD(desHoltResult[2][5]),
        mape: MAPE(desHoltResult[2][5]).toFixed(2),
      };
      this.forecast25 = {
        dataset: desHoltResult[2][6],
        mse: MSE(desHoltResult[2][6]),
        mad: MAD(desHoltResult[2][6]),
        mape: MAPE(desHoltResult[2][6]).toFixed(2),
      };

      this.forecast26 = {
        dataset: desHoltResult[2][7],
        mse: MSE(desHoltResult[2][7]),
        mad: MAD(desHoltResult[2][7]),
        mape: MAPE(desHoltResult[2][7]).toFixed(2),
      };

      this.forecast27 = {
        dataset: desHoltResult[2][8],
        mse: MSE(desHoltResult[2][8]),
        mad: MAD(desHoltResult[2][8]),
        mape: MAPE(desHoltResult[2][8]).toFixed(2),
      };

      //array[3]
      this.forecast28 = {
        dataset: desHoltResult[3][0],
        mse: MSE(desHoltResult[3][0]),
        mad: MAD(desHoltResult[3][0]),
        mape: MAPE(desHoltResult[3][0]).toFixed(2),
      };
      this.forecast29 = {
        dataset: desHoltResult[3][1],
        mse: MSE(desHoltResult[3][1]),
        mad: MAD(desHoltResult[3][1]),
        mape: MAPE(desHoltResult[3][1]).toFixed(2),
      };
      this.forecast30 = {
        dataset: desHoltResult[3][2],
        mse: MSE(desHoltResult[3][2]),
        mad: MAD(desHoltResult[3][2]),
        mape: MAPE(desHoltResult[3][2]).toFixed(2),
      };
      this.forecast31 = {
        dataset: desHoltResult[3][3],
        mse: MSE(desHoltResult[3][3]),
        mad: MAD(desHoltResult[3][3]),
        mape: MAPE(desHoltResult[3][3]).toFixed(2),
      };
      this.forecast32 = {
        dataset: desHoltResult[3][4],
        mse: MSE(desHoltResult[3][4]),
        mad: MAD(desHoltResult[3][4]),
        mape: MAPE(desHoltResult[3][4]).toFixed(2),
      };
      this.forecast33 = {
        dataset: desHoltResult[3][5],
        mse: MSE(desHoltResult[3][5]),
        mad: MAD(desHoltResult[3][5]),
        mape: MAPE(desHoltResult[3][5]).toFixed(2),
      };
      this.forecast34 = {
        dataset: desHoltResult[3][6],
        mse: MSE(desHoltResult[3][6]),
        mad: MAD(desHoltResult[3][6]),
        mape: MAPE(desHoltResult[3][6]).toFixed(2),
      };

      this.forecast35 = {
        dataset: desHoltResult[3][7],
        mse: MSE(desHoltResult[3][7]),
        mad: MAD(desHoltResult[3][7]),
        mape: MAPE(desHoltResult[3][7]).toFixed(2),
      };

      this.forecast36 = {
        dataset: desHoltResult[3][8],
        mse: MSE(desHoltResult[3][8]),
        mad: MAD(desHoltResult[3][8]),
        mape: MAPE(desHoltResult[3][8]).toFixed(2),
      };

      //array[4]
      this.forecast37 = {
        dataset: desHoltResult[4][0],
        mse: MSE(desHoltResult[4][0]),
        mad: MAD(desHoltResult[4][0]),
        mape: MAPE(desHoltResult[4][0]).toFixed(2),
      };
      this.forecast38 = {
        dataset: desHoltResult[4][1],
        mse: MSE(desHoltResult[4][1]),
        mad: MAD(desHoltResult[4][1]),
        mape: MAPE(desHoltResult[4][1]).toFixed(2),
      };
      this.forecast39 = {
        dataset: desHoltResult[4][2],
        mse: MSE(desHoltResult[4][2]),
        mad: MAD(desHoltResult[4][2]),
        mape: MAPE(desHoltResult[4][2]).toFixed(2),
      };
      this.forecast40 = {
        dataset: desHoltResult[4][3],
        mse: MSE(desHoltResult[4][3]),
        mad: MAD(desHoltResult[4][3]),
        mape: MAPE(desHoltResult[4][3]).toFixed(2),
      };
      this.forecast41 = {
        dataset: desHoltResult[4][4],
        mse: MSE(desHoltResult[4][4]),
        mad: MAD(desHoltResult[4][4]),
        mape: MAPE(desHoltResult[4][4]).toFixed(2),
      };
      this.forecast42 = {
        dataset: desHoltResult[4][5],
        mse: MSE(desHoltResult[4][5]),
        mad: MAD(desHoltResult[4][5]),
        mape: MAPE(desHoltResult[4][5]).toFixed(2),
      };
      this.forecast43 = {
        dataset: desHoltResult[4][6],
        mse: MSE(desHoltResult[4][6]),
        mad: MAD(desHoltResult[4][6]),
        mape: MAPE(desHoltResult[4][6]).toFixed(2),
      };

      this.forecast44 = {
        dataset: desHoltResult[4][7],
        mse: MSE(desHoltResult[4][7]),
        mad: MAD(desHoltResult[4][7]),
        mape: MAPE(desHoltResult[4][7]).toFixed(2),
      };

      this.forecast45 = {
        dataset: desHoltResult[4][8],
        mse: MSE(desHoltResult[4][8]),
        mad: MAD(desHoltResult[4][8]),
        mape: MAPE(desHoltResult[4][8]).toFixed(2),
      };

      //array[5]
      this.forecast46 = {
        dataset: desHoltResult[5][0],
        mse: MSE(desHoltResult[5][0]),
        mad: MAD(desHoltResult[5][0]),
        mape: MAPE(desHoltResult[5][0]).toFixed(2),
      };
      this.forecast47 = {
        dataset: desHoltResult[5][1],
        mse: MSE(desHoltResult[5][1]),
        mad: MAD(desHoltResult[5][1]),
        mape: MAPE(desHoltResult[5][1]).toFixed(2),
      };
      this.forecast48 = {
        dataset: desHoltResult[5][2],
        mse: MSE(desHoltResult[5][2]),
        mad: MAD(desHoltResult[5][2]),
        mape: MAPE(desHoltResult[5][2]).toFixed(2),
      };
      this.forecast49 = {
        dataset: desHoltResult[5][3],
        mse: MSE(desHoltResult[5][3]),
        mad: MAD(desHoltResult[5][3]),
        mape: MAPE(desHoltResult[5][3]).toFixed(2),
      };
      this.forecast50 = {
        dataset: desHoltResult[5][4],
        mse: MSE(desHoltResult[5][4]),
        mad: MAD(desHoltResult[5][4]),
        mape: MAPE(desHoltResult[5][4]).toFixed(2),
      };
      this.forecast51 = {
        dataset: desHoltResult[5][5],
        mse: MSE(desHoltResult[5][5]),
        mad: MAD(desHoltResult[5][5]),
        mape: MAPE(desHoltResult[5][5]).toFixed(2),
      };
      this.forecast52 = {
        dataset: desHoltResult[5][6],
        mse: MSE(desHoltResult[5][6]),
        mad: MAD(desHoltResult[5][6]),
        mape: MAPE(desHoltResult[5][6]).toFixed(2),
      };

      this.forecast53 = {
        dataset: desHoltResult[5][7],
        mse: MSE(desHoltResult[5][7]),
        mad: MAD(desHoltResult[5][7]),
        mape: MAPE(desHoltResult[5][7]).toFixed(2),
      };

      this.forecast54 = {
        dataset: desHoltResult[5][8],
        mse: MSE(desHoltResult[5][8]),
        mad: MAD(desHoltResult[5][8]),
        mape: MAPE(desHoltResult[5][8]).toFixed(2),
      };

      //array[6]
      this.forecast55 = {
        dataset: desHoltResult[6][0],
        mse: MSE(desHoltResult[6][0]),
        mad: MAD(desHoltResult[6][0]),
        mape: MAPE(desHoltResult[6][0]).toFixed(2),
      };
      this.forecast56 = {
        dataset: desHoltResult[6][1],
        mse: MSE(desHoltResult[6][1]),
        mad: MAD(desHoltResult[6][1]),
        mape: MAPE(desHoltResult[6][1]).toFixed(2),
      };
      this.forecast57 = {
        dataset: desHoltResult[6][2],
        mse: MSE(desHoltResult[6][2]),
        mad: MAD(desHoltResult[6][2]),
        mape: MAPE(desHoltResult[6][2]).toFixed(2),
      };
      this.forecast58 = {
        dataset: desHoltResult[6][3],
        mse: MSE(desHoltResult[6][3]),
        mad: MAD(desHoltResult[6][3]),
        mape: MAPE(desHoltResult[6][3]).toFixed(2),
      };
      this.forecast59 = {
        dataset: desHoltResult[6][4],
        mse: MSE(desHoltResult[6][4]),
        mad: MAD(desHoltResult[6][4]),
        mape: MAPE(desHoltResult[6][4]).toFixed(2),
      };
      this.forecast60 = {
        dataset: desHoltResult[6][5],
        mse: MSE(desHoltResult[6][5]),
        mad: MAD(desHoltResult[6][5]),
        mape: MAPE(desHoltResult[6][5]).toFixed(2),
      };
      this.forecast61 = {
        dataset: desHoltResult[6][6],
        mse: MSE(desHoltResult[6][6]),
        mad: MAD(desHoltResult[6][6]),
        mape: MAPE(desHoltResult[6][6]).toFixed(2),
      };

      this.forecast62 = {
        dataset: desHoltResult[6][7],
        mse: MSE(desHoltResult[6][7]),
        mad: MAD(desHoltResult[6][7]),
        mape: MAPE(desHoltResult[6][7]).toFixed(2),
      };

      this.forecast63 = {
        dataset: desHoltResult[6][8],
        mse: MSE(desHoltResult[6][8]),
        mad: MAD(desHoltResult[6][8]),
        mape: MAPE(desHoltResult[6][8]).toFixed(2),
      };

      //array[7]
      this.forecast64 = {
        dataset: desHoltResult[7][0],
        mse: MSE(desHoltResult[7][0]),
        mad: MAD(desHoltResult[7][0]),
        mape: MAPE(desHoltResult[7][0]).toFixed(2),
      };
      this.forecast65 = {
        dataset: desHoltResult[7][1],
        mse: MSE(desHoltResult[7][1]),
        mad: MAD(desHoltResult[7][1]),
        mape: MAPE(desHoltResult[7][1]).toFixed(2),
      };
      this.forecast66 = {
        dataset: desHoltResult[7][2],
        mse: MSE(desHoltResult[7][2]),
        mad: MAD(desHoltResult[7][2]),
        mape: MAPE(desHoltResult[7][2]).toFixed(2),
      };
      this.forecast67 = {
        dataset: desHoltResult[7][3],
        mse: MSE(desHoltResult[7][3]),
        mad: MAD(desHoltResult[7][3]),
        mape: MAPE(desHoltResult[7][3]).toFixed(2),
      };
      this.forecast68 = {
        dataset: desHoltResult[7][4],
        mse: MSE(desHoltResult[7][4]),
        mad: MAD(desHoltResult[7][4]),
        mape: MAPE(desHoltResult[7][4]).toFixed(2),
      };
      this.forecast69 = {
        dataset: desHoltResult[7][5],
        mse: MSE(desHoltResult[7][5]),
        mad: MAD(desHoltResult[7][5]),
        mape: MAPE(desHoltResult[7][5]).toFixed(2),
      };
      this.forecast70 = {
        dataset: desHoltResult[7][6],
        mse: MSE(desHoltResult[7][6]),
        mad: MAD(desHoltResult[7][6]),
        mape: MAPE(desHoltResult[7][6]).toFixed(2),
      };

      this.forecast71 = {
        dataset: desHoltResult[7][7],
        mse: MSE(desHoltResult[7][7]),
        mad: MAD(desHoltResult[7][7]),
        mape: MAPE(desHoltResult[7][7]).toFixed(2),
      };

      this.forecast72 = {
        dataset: desHoltResult[7][8],
        mse: MSE(desHoltResult[7][8]),
        mad: MAD(desHoltResult[7][8]),
        mape: MAPE(desHoltResult[7][8]).toFixed(2),
      };

      //array[8]
      this.forecast73 = {
        dataset: desHoltResult[8][0],
        mse: MSE(desHoltResult[8][0]),
        mad: MAD(desHoltResult[8][0]),
        mape: MAPE(desHoltResult[8][0]).toFixed(2),
      };
      this.forecast74 = {
        dataset: desHoltResult[8][1],
        mse: MSE(desHoltResult[8][1]),
        mad: MAD(desHoltResult[8][1]),
        mape: MAPE(desHoltResult[8][1]).toFixed(2),
      };
      this.forecast75 = {
        dataset: desHoltResult[8][2],
        mse: MSE(desHoltResult[8][2]),
        mad: MAD(desHoltResult[8][2]),
        mape: MAPE(desHoltResult[8][2]).toFixed(2),
      };
      this.forecast76 = {
        dataset: desHoltResult[8][3],
        mse: MSE(desHoltResult[8][3]),
        mad: MAD(desHoltResult[8][3]),
        mape: MAPE(desHoltResult[8][3]).toFixed(2),
      };
      this.forecast77 = {
        dataset: desHoltResult[8][4],
        mse: MSE(desHoltResult[8][4]),
        mad: MAD(desHoltResult[8][4]),
        mape: MAPE(desHoltResult[8][4]).toFixed(2),
      };
      this.forecast78 = {
        dataset: desHoltResult[8][5],
        mse: MSE(desHoltResult[8][5]),
        mad: MAD(desHoltResult[8][5]),
        mape: MAPE(desHoltResult[8][5]).toFixed(2),
      };
      this.forecast79 = {
        dataset: desHoltResult[8][6],
        mse: MSE(desHoltResult[8][6]),
        mad: MAD(desHoltResult[8][6]),
        mape: MAPE(desHoltResult[8][6]).toFixed(2),
      };

      this.forecast80 = {
        dataset: desHoltResult[8][7],
        mse: MSE(desHoltResult[8][7]),
        mad: MAD(desHoltResult[8][7]),
        mape: MAPE(desHoltResult[8][7]).toFixed(2),
      };

      this.forecast81 = {
        dataset: desHoltResult[8][8],
        mse: MSE(desHoltResult[8][8]),
        mad: MAD(desHoltResult[8][8]),
        mape: MAPE(desHoltResult[8][8]).toFixed(2),
      };

      //array[9]

      // const minMSE = [
      //   MSE(desHoltResult[0]),
      //   MSE(desHoltResult[1]),
      //   MSE(desHoltResult[2]),
      //   MSE(desHoltResult[3]),
      //   MSE(desHoltResult[4]),
      //   MSE(desHoltResult[5]),
      //   MSE(desHoltResult[6]),
      //   MSE(desHoltResult[7]),
      //   MSE(desHoltResult[8]),
      // ];

      // this.optimalAlpha = this.getMinimumMSE(desHoltResult, minMSE)[0].alpha;
      // this.minimumMSE = Math.min(...minMSE);

      // const bestForecast = this.getPropChart(
      //   this.getMinimumMSE(desHoltResult, minMSE)
      // );

      // this.forecastNextPeriod = this.getMinimumMSE(desHoltResult, minMSE)[
      //   this.getMinimumMSE(desHoltResult, minMSE).length - 1
      // ].result;

      // this.chartSeries = [
      //   {
      //     name: "Data PMB",
      //     type: "column",
      //     data: bestForecast.realQty,
      //   },
      //   {
      //     name: "Peramalan PMB",
      //     type: "line",
      //     data: bestForecast.forecastQty,
      //   },
      // ];

      // this.chartOptions = {
      //   chart: {
      //     height: 350,
      //     type: "line",
      //     width: 400,
      //   },
      //   stroke: {
      //     width: [0, 4],
      //   },
      //   title: {
      //     text: "Grafik Perbandingan Data Asli Dengan Peramalan PMB",
      //   },
      //   dataLabels: {
      //     enabled: true,
      //     enabledOnSeries: [1],
      //   },
      //   labels: bestForecast.labels,
      //   xaxis: {
      //     type: "category",
      //   },
      //   yaxis: [
      //     {
      //       title: {
      //         text: "Data PMB",
      //       },
      //     },
      //     {
      //       opposite: true,
      //       title: {
      //         text: "Peramalan PMB",
      //       },
      //     },
      //   ],
      // };
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