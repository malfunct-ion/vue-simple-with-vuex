<template>
  <div class="p-3">
    <div class="card shadow">
      <div class="card-header">
        Form Donasi
      </div>
      <div class="card-body">
        <form @submit.prevent="saveDonasi">
          <div class="form-group">
            <label for="nama">Nama donatur</label>
            <input
              type="text"
              class="form-control"
              id="nama"
              placeholder="Nama Donatur..."
              v-model="namaDonatur"
            />
          </div>
          <div class="form-group">
            <label for="nominal">Nominal</label>
            <input
              type="text"
              class="form-control"
              id="nominal"
              placeholder="Nominal..."
              v-model="nominalDonasi"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary mr-2"
            :disabled="isLoading"
          >
            {{ isLoading ? "Loading..." : "Submit" }}
          </button>
          <button type="reset" class="btn btn-danger">Reset</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      namaDonatur: "",
      nominalDonasi: "",
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  methods: {
    saveDonasi() {
      let payload = {
        nama: this.namaDonatur,
        nominal: this.nominalDonasi,
      };

      this.$store.dispatch("saveDonasi", payload);
      setTimeout(() => {
        this.namaDonatur = "";
        this.nominalDonasi = "";
      }, 1500);
    },
  },
};
</script>
