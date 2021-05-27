<template>
  <div class="list-container">
    <div class="list-title">
      <p>銘柄一覧</p>
    </div>
    <div class="card-wrapper">
      <div class="list-card"  v-for="detail in details" :key="detail.id">
        <Coinlist :name="detail.title" />
        <Coinlist :description="detail.description" />
        <router-link :to="{ name: 'CryptoDetail',params: {id:detail.id,title:detail.title,description:detail.description}}">
        <button class="btn-detail">詳細</button>
        </router-link>
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
          title:'BTC',
          description: "ビットコイン（現物取引）"
        },
        {
          id:2,
          title:'ETH',
          description: "イーサリアム（現物取引）"
        },
        {
          id:3,
          title:'BCH',
          description: "ビットコインキャッシュ（現物取引）"
        },
        {
          id:4,
          title:'LTC',
          description: "ライトコイン（現物取引）"
        },
        {
          id:5,
          title:'XRP',
          description: "リップル（現物取引）"
        },
        {
          id:6,
          title:'BTC_JPY',
          description: "ビットコイン/円（レバレッジ取引）"
        },
        {
          id:7,
          title:'ETH_JPY',
          description: "イーサリアム/円（レバレッジ取引）"
        },
        {
          id:8,
          title:'BCH_JPY',
          description: "ビットコインキャッシュ/円（レバレッジ取引）"
        },
        {
          id:9,
          title:'LTC_JPY',
          description: "ライトコイン/円（レバレッジ取引）"
        },
        {
          id:10,
          title:'XRP_JPY',
          description: "リップル/円（レバレッジ取引）"
        },
      ]
    }
  },
  methods: {
    transition() {
      this.$router.push({ name: "CryptoDetail", params: { id: 2}})
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