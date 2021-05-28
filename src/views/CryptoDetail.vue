<template>
  <div>
    <p>this is detail</p>
    <p><CryptoAPI :title="title" />{{title}}</p>
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
    <CryptoAPI></CryptoAPI>
  </div>
</template>

<script>
import CryptoAPI from '../components/CryptoAPI.vue';

export default {
  components: {
    CryptoAPI
  },
  props:{
    // id:{
    //   type:Number,
    //   required:true,
    // },
    title:{
      type:String,
      required:true,
    },
    // description:{
    //   type:String,
    //   required:true,
    // }
  },
}
</script>

<style scoped>

</style>