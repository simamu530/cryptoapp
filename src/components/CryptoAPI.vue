<template>
  <div class="api-container">
    <div>
      {{btc}}
      <h2>最終取引価格</h2>
      <p>{{btclast}}</p>
    </div>
    <div>
      <h2>価格取得時刻</h2>
      <p>{{btctime}}</p>
    </div>
    <div>
      <h2>当日高値</h2>
      <p>{{btchigh}}</p>
    </div>
    <div>
      <h2>当日安値</h2>
      <p>{{btclow}}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      btc: null,
      btclast: null,
      btctime: null,
      btchigh: null,
      btclow: null,

      eth: null,
      ethlast: null,
      ethtime: null,
      ethhigh: null,
      ethlow: null,
    }
  },
  created(){
    this.$axios.get("/public/v1/ticker?symbol=${this.title}")
    .then(response => {console.log(response);
    this.btc = response;
    this.btclast = response.data.data[5].last;
    this.btctime = response.data.data[5].timestamp;
    this.btchigh = response.data.data[5].high;
    this.btclow = response.data.data[5].low;

    this.ethlast = response.data.data[6].last;
    this.ethtime = response.data.data[6].timestamp;
    this.ethhigh = response.data.data[6].high;
    this.ethlow = response.data.data[6].low;
    })
  },
}
</script>