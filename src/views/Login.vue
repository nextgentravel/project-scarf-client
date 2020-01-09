<template>
  <div class="">
      <!-- <div style="height: 300px;"></div> -->
      <b-form>
        <b-form-group>
          <b-input label="Email" outlined type="text" v-model="email" />
        </b-form-group>
        <b-form-group>
          <b-input label="Password" outlined type="password" v-model="password" />
        </b-form-group>
        <b-form-group>
          <b-button @click="login">Log In</b-button>
        </b-form-group>
        <b-form-group>
          <router-link to="/sign-up">Forgot password?</router-link>
          <router-link style="float:right;" to="/sign-up">Sign Up</router-link>
        </b-form-group>
      </b-form>
    </div>
</template>

<script>
  import firebase from 'firebase/app';
  import 'firebase/auth';
  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
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

<style scoped>  /* "scoped" attribute limit the CSS to this component only */

</style>