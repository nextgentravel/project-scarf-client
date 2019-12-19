<template>
  <div class="q-pa-md q-gutter-y-md">
      <div style="height: 300px;"></div>
      <q-form class="q-gutter-md">
        <div>
          <q-input label="Email" outlined type="text" v-model="email" />
        </div>
        <div>
          <q-input label="Password" outlined type="password" v-model="password" />
        </div>
        <div>
          <q-btn @click="login" color="teal" class="full-width" label="Log In" />
        </div>
        <div>
          <router-link to="/sign-up">Forgot password?</router-link>
          <router-link style="float:right;" to="/sign-up">Sign Up</router-link>
        </div>
      </q-form>
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