<template>
  <v-card outlined max-width="min-content">
    <v-img :src="this.project.image" height="200" width="345"></v-img>
    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-subtitle v-if="!expanded">{{
      project.description
    }}</v-card-subtitle>

    <v-tabs centered grow v-if="expanded">
      <v-tab v-for="i in project.tabs" :key="i">{{ i }}</v-tab>
      <v-tab-item v-for="i in tabs" :key="i"
        ><vue-simple-markdown class="md-body" :source="i" />
      </v-tab-item>
    </v-tabs>

    <v-card-actions>
      <v-btn @click="toggleExpansion()" text style="outline: none">{{
        expanded ? "Less" : "Show More"
      }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      expanded: false,
      tabs: [],
    };
  },
  props: {
    project: Object,
  },
  methods: {
    toggleExpansion() {
      this.expanded = !this.expanded;
    },
  },
  mounted() {
    for (var i of this.project.tabs) {
      Axios.get(
        this.project.path + i.replace(/\s+/g, "-").toLowerCase() + ".md"
      ).then((response) => {
        this.tabs.push(response.data);
      });
    }
  },
};
</script>

<style scoped>
.md-box {
  overflow-y: scroll;
  overflow-x: hidden;
  margin-left: 10px;
  margin-right: 10px;
  max-height: 250px;
}
.md-box::-webkit-scrollbar {
  display: none;
}
</style>