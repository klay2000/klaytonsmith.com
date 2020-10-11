<template>
  <v-card outlined max-width="345">
    <v-img :src="this.project.image" height="200"></v-img>
    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-subtitle v-if="!expanded">{{
      project.description
    }}</v-card-subtitle>
    <v-card-text v-if="expanded">
      <v-tabs>
        <v-tab>Item One</v-tab>
        <v-tab>Item Two</v-tab>
        <v-tab>Item Three</v-tab>
      </v-tabs>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="toggleExpansion()" text style="outline: none">{{
        expanded ? "Less" : "Show More"
      }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
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