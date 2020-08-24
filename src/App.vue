<template>
  <div id="app" style="padding:0; margin:0;">
    <b-navbar toggleable="lg" type="light" variant="info">
      <b-navbar-brand>
        <portrait src="assets/logo.svg" size="50px" class="logo" />
      </b-navbar-brand>
    </b-navbar>
    <front-page />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  display: inline;
}
</style>
