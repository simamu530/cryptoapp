<template>
  <div>
    <p>this is detail</p>
    <p>{{detail.id}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      details: [
        {
          id:1,
          title:'BTC'
        },
        {
          id:2,
          title:'ETH'
        },
        {
          id:3,
          title:'BCH'
        },
        {
          id:4,
          title:'LTC'
        },
        {
          id:5,
          title:'XRP'
        },
        {
          id:6,
          title:'BTC_JPY'
        },
        {
          id:7,
          title:'ETH_JPY'
        },
        {
          id:8,
          title:'BCH_JPY'
        },
        {
          id:9,
          title:'LTC_JPY'
        },
        {
          id:10,
          title:'XRP_JPY'
        },
      ]
    }
  },
  compute:{
    detail(){
      return this.details.find(detail => detail.id ==this.$route.params.id)
    }
  },
  mounted(){
    console.log(this.$route)
  }
}
</script>