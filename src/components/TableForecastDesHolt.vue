<template>
  <div class="py-3">
    <h1 class="font-semibold text-lg">Data Peramalan</h1>
    <table class="table-auto border-collapse border-solid">
      <thead>
        <tr>
          <th
            class="bg-blue-100 border text-left text-xs px-2 py-1 font-hairline"
          >
            No
          </th>
          <th class="bg-blue-100 border text-left text-xs px-2 py-1">Tahun</th>
          <th class="bg-blue-100 border text-left text-xs px-2 py-1">Jumlah</th>
          <th class="bg-blue-100 border text-left text-xs px-2 py-1">Alpha</th>
          <th class="bg-blue-100 border text-left text-xs px-2 py-1">Beta</th>

          <th class="bg-blue-100 border text-left text-xs px-2 py-1">Level</th>
          <th class="bg-blue-100 border text-left text-xs px-2 py-1">Trend</th>

          <th class="bg-blue-100 border text-left text-xs px-2 py-1">
            Peramalan
          </th>
          <th class="bg-blue-100 border text-left text-xs px-2 py-1">
            Hasil Peramalan
          </th>
          <th class="bg-blue-100 border text-left text-xs px-2 py-1">
            |Error|
          </th>
          <th class="bg-blue-100 border text-left text-xs px-2 py-1">
            Error<sup>2</sup>
          </th>
          <th class="bg-blue-100 border text-left text-xs px-2 py-1">APE</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(forecast, index) in dataset" :key="index">
          <td class="border px-2 text-xs py-1">{{ index + 1 }}</td>
          <td class="border px-2 text-xs py-1">{{ forecast.period }}</td>
          <td class="border px-2 text-xs py-1">{{ forecast.qty }}</td>
          <td class="border px-2 text-xs py-1">{{ forecast.alpha }}</td>
          <td class="border px-2 text-xs py-1">{{ forecast.beta }}</td>

          <td class="border px-2 text-xs py-1">{{ forecast.forecast }}</td>
          <td class="border px-2 text-xs py-1 text-green-600 font-semibold">
            {{ forecast.result }}
          </td>
          <td class="border px-2 text-xs py-1">{{ forecast.mad }}</td>
          <td class="border px-2 text-xs py-1">{{ forecast.mse }}</td>
          <td class="border px-2 text-xs py-1">{{ forecast.mape }}</td>
        </tr>
      </tbody>
    </table>

    <table class="mt-3 table-auto border-collapse border-solid">
      <tr>
        <th
          class="bg-red-500 border text-center text-xs px-2 py-1 font-hairline"
        >
          MAD
        </th>
        <th
          class="bg-red-500 border text-center text-xs px-2 py-1 font-hairline"
        >
          MSE
        </th>
        <th
          class="bg-red-500 border text-center text-xs px-2 py-1 font-hairline"
        >
          MAPE
        </th>
      </tr>
      <tr>
        <td class="border px-2 text-xs py-1">{{ mad.toFixed(2) }}</td>
        <td class="border px-2 text-xs py-1">{{ mse.toFixed(2) }}</td>
        <td class="border px-2 text-xs py-1">{{ mape }}%</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    dataset: {
      type: Object,
      required: true,
    },
    mse: {
      type: Number,
      required: true,
    },
    mad: {
      type: Number,
      required: true,
    },
    mape: {
      required: true, //type: number dihilangkan karena prop terima angka decimal
    },
  },
};
</script>

<style>
</style>