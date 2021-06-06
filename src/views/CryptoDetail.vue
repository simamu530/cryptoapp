<template>
  <div class="crypto-detail">
    <p class="crypto-title">{{title}}</p>
    <div class="btn-list">
      <button class="btn-detail" @click="changeCrypto('BTC')" v-if="this.title !== 'BTC'">BTC</button>
      <button class="btn-detail" @click="changeCrypto('ETH')" v-if="this.title !== 'ETH'">ETH</button>
      <button class="btn-detail" @click="changeCrypto('BCH')" v-if="this.title !== 'BCH'">BCH</button>
      <button class="btn-detail" @click="changeCrypto('LTC')" v-if="this.title !== 'LTC'">LTC</button>
      <button class="btn-detail" @click="changeCrypto('XRP')" v-if="this.title !== 'XRP'">XRP</button>
      <button class="btn-detail" @click="changeCrypto('BTC_JPY')" v-if="this.title !== 'BTC_JPY'">BTC_JPY</button>
      <button class="btn-detail" @click="changeCrypto('ETH_JPY')" v-if="this.title !== 'ETH_JPY'">ETH_JPY</button>
      <button class="btn-detail" @click="changeCrypto('BCH_JPY')" v-if="this.title !== 'BCH_JPY'">BCH_JPY</button>
      <button class="btn-detail" @click="changeCrypto('LTC_JPY')" v-if="this.title !== 'LTC_JPY'">LTC_JPY</button>
      <button class="btn-detail" @click="changeCrypto('XRP_JPY')" v-if="this.title !== 'XRP_JPY'">XRP_JPY</button>
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
    align-content: center;
    padding-top: 15%;
  }
  .crypto-title {
    color: #FFFFFE;
    font-size: 40px;
  }
  .btn-list{
    display: flex;
    flex-wrap: wrap;
    margin-top: 5%;
    margin-left: 15%;
    width: 80%;
  }
  .btn-detail{
    display:block;
    width:10%;
    min-width: 90px;
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
    margin-bottom: 1%;
  }
</style>