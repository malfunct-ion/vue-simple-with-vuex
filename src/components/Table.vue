<template>
  <div class="p-3">
    <div class="card shadow">
      <div class="card-header">
        Tabel Donatur
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama Donatur</th>
              <th scope="col">Nominal</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, index) in listDonasi" :key="data.nama">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ data.nama }}</td>
              <td>Rp. {{ data.nominal }}</td>
              <td>
                <a
                  class="btn badge badge-danger text-white p-1"
                  @click="hapusDonasi(index)"
                  >Hapus</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    listDonasi() {
      return this.$store.state.listDonasi;
    },
  },
  methods: {
    hapusDonasi(index) {
      this.$store.dispatch("hapusDonasi", index);
    },
  },
};
</script>
