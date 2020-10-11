<template>
  <div id="app" style="padding: 0; margin: 0">
    <b-navbar>
      <b-navbar-brand>
        <portrait src="assets/logo.svg" size="1.5vw" class="logo" />
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item>Home</b-nav-item>
        <b-nav-item>Portfolio</b-nav-item>
        <b-nav-item>Contact Me</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <front-page />
    <portfolio />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
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
.navbar {
  background-color: #dc42ff;
}
</style>