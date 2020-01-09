<template>
  <div>
    <b-container id="content-container" style="overflow: scroll;">
        <h1>New Trip</h1>
        <b-form>
            <b-form-group>
                <label>Origin</label>
                <b-input label="Origin" v-model="origin" />
            </b-form-group>
            <b-form-group>
                <label>Destination</label>
                <b-input label="Destination" v-model="destination" />
            </b-form-group>
            <b-form-group>
                <label>Depart Date</label>
                <b-input label="Depart Date" v-model="startDate" />
            </b-form-group>
            <b-form-group>
                <label>Return Date</label>
                <b-input label="Return Date" v-model="endDate" />
            </b-form-group>
            <b-form-group>
                <label>Accomodations Booked</label>
                <b-input label="Accomodations Booked" v-model="accommodationsBooked" />
            </b-form-group>
            <b-form-group>
                <label>Accomodations Rate</label>
                <b-input label="Accomodations Rate" v-model="accommodationsRate" />
            </b-form-group>
            <b-form-group>
                <label>Accomodations Estimate</label>
                <b-input label="Accomodations Estimate" v-model="accommodationsEstimate" />
            </b-form-group>
            <b-form-group>
                <label>Approval Date</label>
                <b-input label="Approval Date" v-model="approvalDate" />
            </b-form-group>
            <b-form-group>
                <label>Ground Transportation Estimate</label>
                <b-input label="Ground Transportation Estimate" v-model="groundTransportationEstimate" />
            </b-form-group>
            <b-form-group>
                <label>Image</label>
                <b-input label="Image" v-model="image" />
            </b-form-group>
            <b-form-group>
                <label>Transportation Booked</label>
                <b-input label="Transportation Booked" v-model="transportationBooked" />
            </b-form-group>
            <b-form-group>
                <label>Transportation Type</label>
                <b-input label="Transportation Type" v-model="transportationType" />
            </b-form-group>
            <b-form-group>
                <label>Transportation Estimate</label>
                <b-input label="Transportation Estimate" v-model="transportationEstimate" />
            </b-form-group>
            <b-form-group>
                <b-button @click="submit">Submit</b-button>
            </b-form-group>
        </b-form>
        <br><br><br><br>
    </b-container>
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
        origin: '',
        destination: '',
        startDate: '',
        endDate: '',
        accommodationsBooked: '',
        accommodationsRate: '',
        accommodationsEstimate: 0,
        approvalDate: '',
        groundTransportationEstimate: 0,
        image: '',
        transportationBooked: '',
        transportationType: '',
        transportationEstimate: 0,
      }
    },
    methods: {
        submit() {
            let doc = {
                origin: this.origin,
                destination: this.destination,
                // startDate: this.startDate,
                // endDate: this.endDate,
                startDate: new Date("December 10, 1815"),
                endDate: new Date("December 10, 1815"),
                accommodationsBooked: this.accommodationsBooked,
                accommodationsRate: this.accommodationsRate,
                accommodationsEstimate:this.accommodationsEstimate,
                approvalDate: this.approvalDate,
                groundTransportationEstimate: this.groundTransportationEstimate,
                image: this.image,
                transportationBooked: this.transportationBooked,
                transportationType: this.transportationType,
                transportationEstimate: this.transportationEstimate,
            }
            this.$store.dispatch('trips/set', doc)
        },
    },
    components: { NavBar },
  }
</script>