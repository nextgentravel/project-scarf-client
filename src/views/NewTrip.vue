<template>
  <div>
    <b-container id="content-container" style="overflow: scroll;">
        <h1>New Trip</h1>
        <b-form>
            <b-form-group>
                <label>Origin</label>
                <b-input label="Origin" type="text" v-model="origin" />
            </b-form-group>
            <b-form-group>
                <label>Destination</label>
                <b-input label="Destination" type="text" v-model="destination" />
            </b-form-group>
            <b-form-group>
                <label>Depart Date</label>
                <b-input label="Depart Date" type="text" v-model="startDate" />
            </b-form-group>
            <b-form-group>
                <label>Return Date</label>
                <b-input label="Return Date" type="text" v-model="endDate" />
            </b-form-group>
            <b-form-group>
                <label>Accomodations Booked</label>
                <b-input label="Accomodations Booked" type="hidden" v-model="accommodationsBooked" />
            </b-form-group>
            <b-form-group>
                <label>Accomodations Rate</label>
                <b-input label="Accomodations Rate" type="hidden" v-model="accommodationsRate" />
            </b-form-group>
            <b-form-group>
                <label>Accomodations Estimate</label>
                <b-input label="Accomodations Estimate" type="hidden" v-model="accommodationsEstimate" />
            </b-form-group>
            <b-form-group>
                <label>Approval Date</label>
                <b-input label="Approval Date" type="hidden" v-model="approvalDate" />
            </b-form-group>
            <b-form-group>
                <label>Ground Transportation Estimate</label>
                <b-input label="Ground Transportation Estimate" type="hidden" v-model="groundTransportationEstimate" />
            </b-form-group>
            <b-form-group>
                <label>Image</label>
                <b-input label="Image" type="hidden" v-model="image" />
            </b-form-group>
            <b-form-group>
                <label>Transportation Booked</label>
                <b-input label="Transportation Booked" type="hidden" v-model="transporationBooked" />
            </b-form-group>
            <b-form-group>
                <label>Transportation Type</label>
                <b-input label="Transportation Type" type="hidden" v-model="transporationType" />
            </b-form-group>
            <b-form-group>
                <label>Transportation Estimate</label>
                <b-input label="Transportation Estimate" type="hidden" v-model="transporationEstimate" />
            </b-form-group>
            <b-form-group>
                <b-button @click="submit">Submit</b-button>
            </b-form-group>
        </b-form>
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
        accommodationsBooked: false,
        accommodationsRate: '',
        accommodationsEstimate: 0,
        approvalDate: '',
        groundTransportationEstimate: 0,
        image: '',
        transporationBooked: false,
        transporationType: '',
        transporationEstimate: 0,
      }
    },
    components: { NavBar },
  }
</script>