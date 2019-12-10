<template>
  <div class="q-pa-md q-gutter-y-md">
      <div style="height: 200px;"></div>
      <q-form class="q-gutter-md">
        <div>
          <q-input outlined type="text" v-model="email" placeholder="Email" />
        </div>
        <div>
          <q-input outlined type="password" v-model="password" placeholder="Password" />
        </div>
        <div>
          <q-btn @click="signUp" color="teal" class="full-width" label="Sign Up" />
        </div>
        <div>
          <router-link to="/sign-up">Forgot password?</router-link>
          <router-link style="float:right;" to="/login">Log In</router-link>
        </div>
    </q-form>
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