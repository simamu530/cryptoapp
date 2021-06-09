<template>
  <div class="register-wrpper">
    <h1>CryptoApp</h1>
    <div class="form-wapper">
      <p>メールアドレス</p>
      <input type="text" v-model="mailAddress" required />
      <p>パスワード</p>
      <input type="text" v-model="pass" required />
      <button @click="register">新規登録</button>
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
    register() {
      if(!this.mailAddress || !this.pass) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.mailAddress,this.pass)
      .then((data) => {
        data.user.sendEmailVerification().then(()=> {
          this.$router.replace('/login')
        })
      })
      .catch((error) => {
        switch(error.code) {
          case 'auth/invalid-email':
            alert('メールアドレスの形式が違います。')
            break
          case 'auth/email-already-in-use':
            alert('このメールアドレスはすでに使われています。')
            break
          case 'auth/weak-password':
            alert('パスワードは6文字以上で入力してください。')
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
