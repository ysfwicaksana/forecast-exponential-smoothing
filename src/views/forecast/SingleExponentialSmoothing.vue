<template>
  <div>
    <h1 class="text-red-400">Single Exponential Smoothing</h1>
    <table class="table-auto border-collapse border-red-500">
      <thead>
        <tr>
          <th>No</th>
          <th>Tahun</th>
          <th>Jumlah</th>
          <th>Forecast</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(pmb, index) in pmb" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ pmb.tahun }}</td>
          <td>{{ pmb.jumlah }}</td>
          <td>{{ pmb[0] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import pmbData from "../../utils/data";

export default {
  data() {
    return {
      pmb: [],
      forecast: [],
    };
  },
  mounted() {
    this.pmb = pmbData;
    this.generateSes();
  },

  methods: {
    generateSes() {
      let bufferForecast = [];
      let bufferYear = [];
      pmbData.forEach((data, index) => {
        if (index === 0) {
          bufferForecast.push(data.jumlah);
          bufferYear.push(data.tahun);
        } else {
          let subActualForecast = data.jumlah - bufferForecast[index - 1];
          let forecast = bufferForecast[index - 1] + 0.1 * subActualForecast;
          bufferForecast.push(forecast);
          bufferYear.push(data.tahun);
        }
      });

      console.log(bufferYear);
      console.log(bufferForecast);

      let buff = [];
      for (let index = 0; index < bufferYear.length; index++) {
        console.log(bufferYear[index]);
        const data = {
          i: index,
          tahun: bufferYear[index],
          jumlah: bufferForecast[index],
        };

        buff.push(data);
      }

      console.log(buff);
      // bufferForecast.forEach(forecast => {

      // })
    },
  },
};
</script>