<template>
  <div class="list-container">
    <div class="list-title">
      <p>銘柄一覧</p>
    </div>
    <div class="card-wrapper">
      <div class="list-card">
        <Coinlist name = "BTC" />
        <Coinlist description = "ビットコイン（現物取引）" />
        <button class="coin-detail" @click="transition(detail.id)">詳細</button>
      </div>
      <div class="list-card">
        <Coinlist name = "BTC" />
        <Coinlist description =
         "ビットコイン
        （現物取引）" />
        <button class="coin-detail">詳細</button>
      </div>
      <div class="list-card">
        <Coinlist name = "BTC" />
        <Coinlist description = "ビットコイン（現物取引）" />
        <button class="coin-detail">詳細</button>
      </div>
      <div class="list-card">
        <Coinlist name = "BTC" />
        <Coinlist description = "ビットコイン（現物取引）" />
        <button class="coin-detail">詳細</button>
      </div>
      <div class="list-card">
        <Coinlist name = "BTC" />
        <Coinlist description = "ビットコイン（現物取引）" />
        <button class="coin-detail">詳細</button>
      </div>
      <div class="list-card">
        <Coinlist name = "BTC" />
        <Coinlist description = "ビットコイン（現物取引）" />
        <button class="coin-detail">詳細</button>
      </div>
      <div class="list-card">
        <Coinlist name = "BTC" />
        <Coinlist description = "ビットコイン（現物取引）" />
        <button class="coin-detail">詳細</button>
      </div>
    </div>
  </div>
</template>

<script>
import Coinlist from "@/components/Coinlist.vue";

export default {
  name: "Cryptolist",
  components: {
    Coinlist,
  },
  data(){
    return {
      details: [
        {
          id:1,
          title:"BTC"
        },
        {
          id:2,
          title:"ETH"
        },
        {
          id:3,
          title:"BCH"
        },
        {
          id:4,
          title:"LTC"
        },
        {
          id:5,
          title:"XRP"
        },
        {
          id:6,
          title:"BTC_JPY"
        },
        {
          id:7,
          title:"ETH_JPY"
        },
        {
          id:8,
          title:"BCH_JPY"
        },
        {
          id:9,
          title:"LTC_JPY"
        },
        {
          id:10,
          title:"XRP_JPY"
        },
      ]
    }
  },
  methods: {
    transition(dataId) {
      this.$router.push({ name: "detail",params: { id: dataId }});
    }
  }
}
</script>

<style scoped>
.list-container {
  width: 100%;
  height: 100vh;
  background: #0F0E17;
  position: relative;
  display: block;
}
.list-title{
  display: flex;
  justify-content: center;
  flex: wrap;
}
p {
  color: #FFFFFE;
  font-size: 64px;
  font-weight: bold;
  justify-content: center;
}
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
  width: 60%;
  top: 45%;
  margin: 0 auto;

}
.list-card {
  text-align: center;
  margin: 1em 1em 1em 1em;
}

@media screen and (max-width: 768px){

}
</style>