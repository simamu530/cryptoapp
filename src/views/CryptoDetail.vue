<template>
  <div class="crypto-detail">
    <p class="crypto-title">{{title}}</p>
    <div class="btn-list">
      <button class="btn-detail" @click="changeCrypto('BTC')">BTC</button>
      <button class="btn-detail" @click="changeCrypto('ETH')">ETH</button>
      <button class="btn-detail" @click="changeCrypto('BCH')">BCH</button>
      <button class="btn-detail" @click="changeCrypto('LTC')">LTC</button>
      <button class="btn-detail" @click="changeCrypto('XRP')">XRP</button>
      <button class="btn-detail" @click="changeCrypto('BTC_JPY')">BTC_JPY</button>
      <button class="btn-detail" @click="changeCrypto('ETH_JPY')">ETH_JPY</button>
      <button class="btn-detail" @click="changeCrypto('BCH_JPY')">BCH_JPY</button>
      <button class="btn-detail" @click="changeCrypto('LTC_JPY')">LTC_JPY</button>
      <button class="btn-detail" @click="changeCrypto('XRP_JPY')">XRP_JPY</button>
    </div>
    <CryptoAPI :title="title"></CryptoAPI>
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
  created() {
    console.log(this.title);
  },
  methods: {
    changeCrypto(name){
      this.$router.push({ name: 'CryptoDetail', params: {title: name}})//titleとしてETHなどが送られる
    }
  }
}
</script>

<style scoped>
  .crypto-detail{
    background: #0F0E17;
    text-align: center;
    padding-top: 15%;
  }
  .crypto-title {
    color: #FFFFFE;
    font-size: 40px;
  }
  .btn-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    width: 100%;
  }
  .btn-detail{
    display:block;
    width:9%;
    text-decoration: none;
    background:#FF8906;
    text-align:center;
    color:#FFFFFE;
    border-radius:13px;
    -webkit-border-radius:13px;
    -moz-border-radius:13px;
    padding-top: 1%;
    padding-bottom: 1%;
    margin-right: 1%;
  }
</style>