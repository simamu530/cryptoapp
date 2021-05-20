<template>
  <div class="list-wrapper">
  <h2>{{ name }}</h2>
  <p style="white-space:pre-wrap; word-wrap:break-word;">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Coinlist",
  props: ["name","description"],
  
}
</script>

<style scoped>
.list-wrapper{
  margin: 5% 5% 10% 10%;
}
h2 {
  color: #FFFFFE;
}
p {
  color: #A7A9BE;
}
</style>