<template>
  <div class="login-wrpper">
    <h1>CryptoApp</h1>
    <div class="form-wapper">
      <p>メールアドレス</p>
      <input type="text" v-model="mailAddress" required />
      <p>パスワード</p>
      <input type="text" v-model="pass" required />
      <button @click="login">ログイン</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      mailAddress: "",
      pass:""
    }
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('ログインが完了しました')
          this.$router.push('/')
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/user-disabled':
              alert('ユーザーが無効になっています。')
              break
            case 'auth/user-not-found':
              alert('ユーザーが存在しません。')
              break
            case 'auth/wrong-password':
              alert('パスワードが間違っております。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        })
    },
  },
}

</script>