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
      try {
        const rawResponse = await fetch("/api");
        const json = await rawResponse.json();

        this.apiResponse = json;
      } catch (e) {
        console.error("something bad happened...", e);
      }
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
