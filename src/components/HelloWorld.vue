<script lang="ts">
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      apiResponse: "",
    };
  },
  methods: {
    async getDataFromApi() {
      const rawResponse = await fetch("/api");
      const json = await rawResponse.json();

      console.log(json);
    },
  },
};
</script>

<template>
  <div class="card">
    <h1>{{ msg }}</h1>
    <button type="button" @click="getDataFromApi">Test the API + MSW</button>
    <pre v-text="apiResponse" />
  </div>
</template>
