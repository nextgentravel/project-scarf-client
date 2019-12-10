<template>
  <div class="sign-up">
    <p>Let's create a new account !</p>
    <form>
      <div>
        <label>Username</label>
        <q-input outlined type="text" v-model="email" placeholder="Email" />
      </div>
      <div>
        <label>Password</label>
        <q-input outlined type="password" v-model="password" placeholder="Password" />
      </div>
      <button @click="signUp">Sign Up</button>
    </form>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

 <script>
  import firebase from 'firebase/app';
  import 'firebase/auth';
  export default {
    name: 'signUp',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          () => {
            this.$router.replace('home')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

 <style scoped>
</style>