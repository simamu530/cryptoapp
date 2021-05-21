<template>
  <div>
    <p>this is detail</p>
    <p>{{title}}{{description}}</p>
    <!-- <p>{{detail.id}}</p> -->
    <div class="btn-list">
      <button class="btn-detail">BTC</button>
      <button class="btn-detail">ETH</button>
      <button class="btn-detail">BCH</button>
      <button class="btn-detail">LTC</button>
      <button class="btn-detail">XRP</button>
      <button class="btn-detail">BTC_JPY</button>
      <button class="btn-detail">ETH_JPY</button>
      <button class="btn-detail">BCH_JPY</button>
      <button class="btn-detail">LTC_JPY</button>
      <button class="btn-detail">XRP_JPY</button>
    </div>
    <div>
      <h2>最終取引価格</h2>
      <p>000,0000</p>
    </div>
    <div>
      <h2>価格取得時刻</h2>
      <p>000,000</p>
    </div>
    <div>
      <h2>当日高値</h2>
      <p>000,000</p>
    </div>
    <div>
      <h2>当日安値</h2>
      <p>000,000</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    id:{
      type:Number,
      required:true,
    },
    title:{
      type:String,
      required:true,
    },
    description:{
      type:String,
      required:true,
    }
  },
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

<style scoped>

</style>