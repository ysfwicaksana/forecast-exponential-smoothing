<template>
  <div class="py-3">
    <h1 class="font-semibold text-lg">Data PMB</h1>
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
        <tr v-for="(pmb, index) in dataset" :key="index">
          <td class="border px-2 py-1">{{ index + 1 }}</td>
          <td class="border px-2 py-1">{{ pmb.tahun }}</td>
          <td class="border px-2 py-1">{{ pmb.jumlah }}</td>
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