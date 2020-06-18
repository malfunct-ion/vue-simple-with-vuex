<template>
  <div id="app">
    <h1 class="text-center p-3">Donation App</h1>
    <div class="row">
      <div class="col-md-6">
        <Form />
      </div>
      <div class="col-md-6">
        <Table />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Table from "./components/Table.vue";

export default {
  name: "App",
  components: {
    Form,
    Table,
  },
};
</script>
