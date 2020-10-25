<template>
  <div class="container">
    <div v-for="i in pIndex" :key="i.title">
      <portfolio-project :project="i" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      pIndex: [],
    };
  },
  mounted() {
    axios.get("projects/project-index.json").then((Response) => {
      for (var i of Response.data) {
        axios.get("projects/" + i).then((response) => {
          response.data.path =
            "projects/" + i.substr(0, i.lastIndexOf("/") + 1);
          this.pIndex.push(response.data);
        });
      }
    });
  },
  updated() {},
};
</script>

<style scoped>
.container {
  max-width: 75%;
  display: flex;
  direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  padding: 15px;
}
</style>