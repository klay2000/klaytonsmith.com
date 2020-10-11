<template>
  <div class="container">
    <v-card class="card">
      <portrait src="assets/portrait.jpg" size="10vw" class="me" />
      <h1>Hi!</h1>
      <p>
        I'm Klayton! I'm a computer science student at Oakland University. I
        spend my free time making things, sometimes software related, sometimes
        hardware related, often times both!
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
  max-width: 50%;
}
.card {
  padding: 15px;
}
</style>