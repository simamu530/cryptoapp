<template>
  <div class="api-wrapper">
    <div class="api-container">
      <h2>最終取引価格</h2>
      <p>{{lastjpy}}</p>
    </div>
    <div class="api-container">
      <h2>価格取得時刻</h2>
      <p>{{btctime}}</p>
    </div>
    <div class="api-container">
      <h2>当日高値</h2>
      <p>{{highjpy}}</p>
    </div>
    <div class="api-container">
      <h2>当日安値</h2>
      <p>{{lowjpy}}</p>
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
      getMonth: null,
      getYear: null,
      getDay: null,
      getHour: null,
      getMinutes: null,
      getSecond: null,
      btchigh: null,
      btclow: null,
      lastjpy: null,
      highjpy: null,
      lowjpy: null,
      cryptoLabel: null,
    }
  },
  created(){
    this.cryptoLabel = this.title
    this.getPrice()
  },
  watch: {
    title: function(newTitle) {//tutleがpropsのタイトルを刺してる
      this.cryptoLabel = newTitle;
      this.getPrice();
      console.log(newTitle);
    }
  },
  methods: {
    getPrice(){
      this.$axios.get(`/public/v1/ticker?symbol=${this.cryptoLabel}`)
      .then(response => {console.log(response);
      this.btclast = parseInt(response.data.data[0].last);
      this.getYear = new Date(response.data.data[0].timestamp).getFullYear();
      this.getMonth = new Date(response.data.data[0].timestamp).getMonth();
      this.getDay = new Date(response.data.data[0].timestamp).getDate();
      this.getHour = new Date(response.data.data[0].timestamp).getHours();
      this.getMinutes = new Date(response.data.data[0].timestamp).getMinutes();
      this.getSecond = new Date(response.data.data[0].timestamp).getSeconds();
      this.btctime = this.getYear + "年" + this.getMonth + "月" + this.getDay +"日" + this.getHour + "時" + this.getMinutes + "分" + this.getSecond +"秒";
      this.btchigh = parseInt(response.data.data[0].high);
      this.btclow = parseInt(response.data.data[0].low);
      this.lastjpy = this.btclast.toLocaleString('ja-JP', {style:'currency', currency: 'JPY'});
      this.highjpy = this.btchigh.toLocaleString('ja-JP', {style:'currency', currency: 'JPY'});
      this.lowjpy = this.btclow.toLocaleString('ja-JP', {style:'currency', currency: 'JPY'});
      })
    }
  }
}
</script>

<style scoped>
.api-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #0F0E17;
  position: relative;
}
.api-container {
  width: 45%;
  margin: 1%;
  padding: 2%;
  background: #FFFFFE;
  border-radius: 10px;
  text-align: center;
}
h2{
  font-size: 30px;
  font-weight: normal;
}
p {
  font-size: 25px;
  font-weight: bold;
  margin-top: 10%;
}
</style>