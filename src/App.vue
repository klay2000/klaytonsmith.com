<template>
  <div id="app" style="padding: 0; margin: 0">
    <b-navbar>
      <b-navbar-brand>
        <portrait src="assets/logo.svg" size="3vh" class="logo" />
      </b-navbar-brand>
      <b-navbar-brand center href="https://github.com/klay2000">
        <portrait
          style="margin-left: 2.5vh"
          src="assets/github.svg"
          size="2.5vh"
          class="logo"
        />
      </b-navbar-brand>

      <b-navbar-brand href="https://twitter.com/Aesthetic_robo">
        <portrait src="assets/twitter.svg" size="2.5vh" class="logo" />
      </b-navbar-brand>

      <b-navbar-brand
        href="https://www.linkedin.com/in/klayton-smith-ii-515b84199/"
      >
        <portrait src="assets/linkedin.svg" size="2.5vh" class="logo" />
      </b-navbar-brand>
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