<template>
  <div class="container">
    <v-card class="card">
      <portrait src="assets/portrait.jpg" size="10vw" class="me" />
      <h1>Hi!</h1>
      <p>
        I'm Klayton! I'm a computer science student at Oakland University. I spend me free time making things, sometimes software related, sometimes hardware related. Details on what I've made and am working on can be found on my
        <a
          href="#"
        >portfolio</a> and my
        <a href="#">blog</a>.
      </p>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.me {
  margin-bottom: 1vh;
}
.container {
  display: inline-block;
  width: 50vw;
}
.card {
  width: 50vw;
  padding: 15px;
}
</style>