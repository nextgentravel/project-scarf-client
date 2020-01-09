<template id="main">
  <div>
    <b-container id="content-container">
      <b-card
        v-for="trip in trips"
        v-bind:key="trip.index"
        @click="$router.push({ name: 'Trip Details', params: { trip } })"
        v-bind:style="{ 
          // backgroundImage: 'url(' + trip.image + ')',
          // backgroundSize: 'cover',
          position: 'relative',
          // overflow: 'hidden',
          minHeight: '230px'
        }"
      >
        <div style="border: 1px solid white; position: absolute; right: 0px; top: 0px; background-color: #ccc; color: #000; width: 25%; height: 15%; text-align: center; line-height: 180%; vertical-align: middle;">
          {{trip.tripStatus}}
        </div>

        <div style="padding-left: 10px; color: #000; position: absolute; left: 0px; bottom: 0px; width: 80%; height: 40%;">
          <h3>{{trip.destination}}</h3>
          <p>{{moment(trip.startDate.toDate()).format('ddd Do MMM')}} - {{moment(trip.endDate.toDate()).format('ddd Do MMM, YYYY')}}</p>
        </div>
        <div style="position: absolute; right: 0px; bottom: 0px; width: 30%; height: 15%; color: #000; text-align: center; line-height: 180%; vertical-align: middle;">
          <b-icon-person font-scale="2" class="border rounded"></b-icon-person>
          <b-icon-person font-scale="2" class="border rounded"></b-icon-person>
          <b-icon-person font-scale="2" class="border rounded"></b-icon-person>
        </div>
      </b-card>
      <b-icon-plus 
        font-scale="4"
        icon="plus"
        class="rounded-circle bg-info p-1"
        variant="light"
        style="position: fixed; bottom: 100; right: 30;"
        @click="$router.push({ name: 'New Trip'})"
      >
      </b-icon-plus>
    </b-container>
    <NavBar />
  </div>
</template>

<script>
  import moment from 'moment';
  import NavBar from '../components/NavBar'
  export default {
    name: 'Home',
    data() {
      return {
        moment,
      }
    },
    components: { NavBar },
    created() {
      this.getTrips();
    },
    methods: {
      getTrips: function () {
        this.$store.dispatch('trips/fetchAndAdd')
      }
    },
    computed: {
      trips () {
        return this.$store.state.trips.data
      }
    }
  }
</script>

