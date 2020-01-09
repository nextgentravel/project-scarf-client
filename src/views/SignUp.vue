<template>
  <b-container>
    <p>Let's create a new account !</p>
    <b-form>
      <b-form-group>
        <label>Username</label>
        <b-form-input outlined type="text" model="email" placeholder="Email" />
      </b-form-group>
      <b-form-group>
        <label>Password</label>
        <b-form-input outlined type="password" v-model="password" placeholder="Password" />
      </b-form-group>
      <b-button @click="signUp">Sign Up</b-button>
    </b-form>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </b-container>
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