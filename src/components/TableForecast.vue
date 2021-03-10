<template>
  <div class="py-3">
    <h1 class="font-semibold text-lg">Data Peramalan</h1>
    <table class="table-auto border-collapse border-solid">
      <thead>
        <tr>
          <th class="bg-blue-100 border text-left px-2 py-1 font-hairline">
            No
          </th>
          <th class="bg-blue-100 border text-left px-2 py-1">Tahun</th>
          <th class="bg-blue-100 border text-left px-2 py-1">Jumlah</th>
          <th class="bg-blue-100 border text-left px-2 py-1">Alpha</th>
          <th class="bg-blue-100 border text-left px-2 py-1">Peramalan</th>
          <th class="bg-blue-100 border text-left px-2 py-1">
            Hasil Peramalan
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(forecast, index) in dataset" :key="index">
          <td class="border px-2 py-1">{{ index + 1 }}</td>
          <td class="border px-2 py-1">{{ forecast.tahun }}</td>
          <td class="border px-2 py-1">{{ forecast.jumlah }}</td>
          <td class="border px-2 py-1">{{ forecast.alpha }}</td>
          <td class="border px-2 py-1">{{ forecast.forecast }}</td>
          <td class="border px-2 py-1">{{ forecast.result }}</td>
        </tr>
      </tbody>
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
  },
};
</script>