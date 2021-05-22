<template>
  <div class="api-container">
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
  mounted(){
    const params = {
      "param1": "BTC&page",
      "param2": "1&count"
    }
     this.$axios.get("/v1/trades?symbol=BTC&page=1&count=10", {params: params})
      .then((response => {console.log(response)}))
  },
}
</script>