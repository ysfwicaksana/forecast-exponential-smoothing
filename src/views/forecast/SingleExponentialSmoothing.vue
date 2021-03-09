<template>
  <div>
    <h1 class="text-red-400 font-bold text-lg">Single Exponential Smoothing</h1>
    <hr />
    <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-8">
        <div>
          <h1>Data PMB</h1>
          <table class="table-auto border-collapse border-red-500">
            <thead>
              <tr>
                <th class="bg-blue-300 border text-left px-2 py-1">No</th>
                <th class="bg-blue-300 border text-left px-2 py-1">Tahun</th>
                <th class="bg-blue-300 border text-left px-2 py-1">
                  Jumlah Mahasiswa
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(pmb, index) in pmb" :key="index">
                <td class="border px-2 py-1">{{ index + 1 }}</td>
                <td class="border px-2 py-1">{{ pmb.tahun }}</td>
                <td class="border px-2 py-1">{{ pmb.jumlah }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div class="inline-block">
            <p>Data Peramalan</p>
            <button
              @click="generateSes"
              class="bg-black text-white rounded p-1"
            >
              Forecast
            </button>
          </div>

          <table class="table-auto border-collapse border-solid">
            <thead>
              <tr>
                <th class="bg-blue-100 border text-left px-2 py-1">No</th>
                <th class="bg-blue-100 border text-left px-2 py-1">Tahun</th>
                <th class="bg-blue-100 border text-left px-2 py-1">Jumlah</th>
                <th class="bg-blue-100 border text-left px-2 py-1">
                  Peramalan
                </th>
                <th class="bg-blue-100 border text-left px-2 py-1">
                  Hasil Peramalan
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(forecast, index) in forecast" :key="index">
                <td class="border px-2 py-1">{{ index + 1 }}</td>
                <td class="border px-2 py-1">{{ forecast.tahun }}</td>
                <td class="border px-2 py-1">{{ forecast.jumlah }}</td>
                <td class="border px-2 py-1">{{ forecast.forecast }}</td>
                <td class="border px-2 py-1">{{ forecast.result }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pmbData from "../../utils/data";

export default {
  data() {
    return {
      pmb: [],
      forecast: [],
      alpha: 0.1,
    };
  },
  mounted() {
    this.pmb = pmbData;
  },

  methods: {
    generateSes() {
      let bufferForecast = [];
      pmbData.forEach((data, index) => {
        if (index === 0) {
          bufferForecast.push({
            i: index,
            tahun: data.tahun,
            jumlah: data.jumlah,
            forecast: data.jumlah,
            result: data.jumlah,
          });
        } else if (index === 1) {
          let last = Object.values(bufferForecast)[
            Object.keys(bufferForecast).length - 1
          ];

          bufferForecast.push({
            i: index,
            tahun: data.tahun,
            jumlah: data.jumlah,
            forecast: last.jumlah,
            result: last.jumlah,
          });
        } else {
          let last = Object.values(bufferForecast)[
            Object.keys(bufferForecast).length - 1
          ];
          let forecast = last.forecast + 0.1 * (last.jumlah - last.forecast);

          bufferForecast.push({
            i: index,
            tahun: data.tahun,
            jumlah: data.jumlah,
            forecast: forecast,
            result: Math.ceil(forecast),
          });
        }
      });

      this.forecast = bufferForecast;
      console.log(bufferForecast);
    },
  },
};
</script>