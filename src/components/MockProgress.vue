<script lang="ts">
export default {
  data() {
    return {
      mockProgressComplete: 0,
    };
  },
  methods: {
    async getDataFromApi() {
      try {
        const rawResponse = await fetch("/progress");
        const json = await rawResponse.json();

        const p = json?.progress ?? 100;
        console.log(`progress: ${p}`);
        this.mockProgressComplete = json.progress;

        if (p < 100) {
          this.getDataFromApi();
        }
      } catch (e) {
        console.error("something bad happened...", e);
      }
    },
  },
};
</script>

<template>
  <div class="card">
    <button type="button" @click="getDataFromApi">Fire Mock Progress Bar</button>
    <div id="progressBarWrapper">
      <div id="progressBar"
        :style="{ width: mockProgressComplete.toString() + '%' }"></div>
    </div>
    <div v-if="mockProgressComplete === 100" style="font-size: 200%;">😃👍🎉</div>
  </div>
</template>

<style scoped>
#progressBarWrapper {
  width: 100%;
  height: 20px;
  margin-top: 1rem;
}

#progressBar {
  height: 100%;
  width: 0%;
  background: green;
}
</style>
