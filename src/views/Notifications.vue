<template>
  <div class="about">
    <h1>Notications</h1>
    <NavBar />
  </div>
</template>

<script>
  import moment from 'moment';
  import NavBar from '../components/NavBar'
  export default {
    name: 'Notifications',
    data() {
      return {
        moment,
      }
    },
    components: { NavBar },
  }
</script>