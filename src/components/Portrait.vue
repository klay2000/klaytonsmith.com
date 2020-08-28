<template>
  <div class="container" v-bind:style="widthStyles">
    <img v-bind:src="src" class="portrait" />
  </div>
</template>

<script>
export default {
  props: ["src", "size"],
  computed: {
    widthStyles() {
      return "max-width: " + this.size;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 0;
}
.portrait {
  transition: transform 0.1s;
  max-width: 100%;
  border-radius: 100%;
  margin: 0;
  padding: 0;
}
.portrait:hover {
  transform: scale(1.1);
}
</style>