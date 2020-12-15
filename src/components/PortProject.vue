<template>
  <v-card outlined max-width="min-content" style="margin-top: 10px">
    <v-img :src="this.project.image" height="200" width="345"></v-img>
    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-subtitle v-if="!expanded">{{
      project.description
    }}</v-card-subtitle>

    <v-tabs centered grow v-if="expanded">
      <v-tab v-for="i in project.tabs" :key="i">{{ i }}</v-tab>
      <v-tab-item v-for="i in tabs" :key="i">
        <markdown-renderer class="md-body" :value="i"></markdown-renderer>
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
.md-body {
  white-space: pre-wrap;
  overflow: scroll;
  max-height: 300px;
  padding: 5px;
  text-align: left;
}
.md-body::-webkit-scrollbar {
  display: none;
}
</style>