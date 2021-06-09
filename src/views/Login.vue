<template>
  <div class="login-wrpper">
    <h1>CryptoApp</h1>
    <div class="form-wapper">
      <p>メールアドレス</p>
      <input type="email" v-model="mailAddress" required />
      <p>パスワード</p>
      <input type="password" v-model="pass" required />
      <button @click="login">ログイン</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'
export default {
  data(){
    return {
      mailAddress: null,
      pass:null,
    }
  },
  methods: {
    login() {
      if (!this.mailAddress || !this.pass) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(this.mailAddress, this.pass)
        .then(() => {
          alert('ログインが完了しました')
          this.$router.push('/Cryptolist')
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