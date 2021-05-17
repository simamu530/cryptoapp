<template>
  <div>
  <h2>{{ name }}</h2>
  <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Coinlist",
  props: ["name","description"],
}
</script>

<style scoped>
h2 {
  color: FFFFFE;
}
</style>