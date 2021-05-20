<template>
  <div>
    <p>this is detail</p>
    <p>{{id}}</p>
  </div>
</template>

<script>
export default {
  props: [id],
  mounted(){
    console.log(this.$route)
  }
}
</script>