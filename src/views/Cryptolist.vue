<template>
  <div id="list-container">
    <div class="list-title">
      <p>銘柄一覧</p>
    </div>
    <div class="card-wrapper">
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
}
</script>

<style scoped>
#list-container {
background: #0F0E17;
}
.card-wrapper {
  flex-wrap: wrap;
  justify-content: space-between;
}
.list-card {
  text-align: center;
}
.h2 {
  color: FFFFFE;
}
</style>