<template>
  <div class="q-pa-md q-gutter-y-md">
    <q-btn-group spread>
      <q-btn outline color="black" label="All" />
      <q-btn outline color="black" label="Pending"/>
      <q-btn outline color="black" label="Approved" />
      <q-btn outline color="black" label="Past" />
    </q-btn-group>

    <q-card @click="$router.push({ name: 'TripDetails', params: { userId: '123' } })" class="my-card q-gutter-y" style="border-radius: 30px;">
      <q-img
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        basic
      >

        <div class="absolute-top-right text-right">
          <h6>Pending</h6>
        </div>

        <div class="absolute-bottom-left text-left" style="background: transparent;">
          <h6>Winnipeg</h6>
          <p>Tues, Mar 17 - Thurs, Mar 26 2020</p>
        </div>

        <div class="absolute-bottom-right text-center" style="background: transparent;">
          <q-icon style="font-size: 1.8em; background-color: transparent;" name="airplanemode_active" />
          <q-icon style="font-size: 1.8em; background-color: transparent;" name="local_taxi" />
          <q-icon style="font-size: 1.8em; background-color: transparent;" name="king_bed" />
        </div>
      </q-img>
    </q-card>

    <q-card @click="$router.push({ name: 'TripDetails', params: { userId: '123' } })"  class="my-card q-gutter-y" style="border-radius: 30px;">
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        basic
      >

        <div class="absolute-top-right text-right">
          <h6>Pending</h6>
        </div>

        <div class="absolute-bottom-left text-left" style="background: transparent;">
          <h6>Winnipeg</h6>
          <p>Tues, Mar 17 - Thurs, Mar 26 2020</p>
        </div>

        <div class="absolute-bottom-right text-center" style="background: transparent;">
          <q-icon style="font-size: 1.8em;" name="airplanemode_active" />
          <q-icon style="font-size: 1.8em;" name="local_taxi" />
          <q-icon style="font-size: 1.8em;" name="king_bed" />
        </div>
      </q-img>
    </q-card>

    <q-card @click="$router.push({ name: 'TripDetails', params: { userId: '123' } })" class="my-card q-gutter-y" style="border-radius: 30px;">
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        basic
      >

        <div class="absolute-top-right text-right">
          <h6>Pending</h6>
        </div>

        <div class="absolute-bottom-left text-left" style="background: transparent;">
          <h6>Winnipeg</h6>
          <p>Tues, Mar 17 - Thurs, Mar 26 2020</p>
        </div>

        <div class="absolute-bottom-right text-center" style="background: transparent;">
          <q-icon style="font-size: 1.8em;" name="airplanemode_active" />
          <q-icon style="font-size: 1.8em;" name="local_taxi" />
          <q-icon style="font-size: 1.8em;" name="king_bed" />
        </div>
      </q-img>
    </q-card>

    <div style="height: 100px;"></div>

    <div class="fixed-bottom">
        <q-tabs
          dense
          class="bg-white text-grey"
          style="border-top: 1px solid grey; padding-top: 10px;"
        >
          <q-tab style="border: 1px solid grey; border-radius: 5px; margin: 10px; padding: 6px; font-size: 1.4em;" name="home" icon="home" />
          <q-tab style="border: 1px solid grey; border-radius: 5px; margin: 10px; padding: 6px; font-size: 1.4em;" name="search" icon="search" />
          <q-tab style="border: 1px solid grey; border-radius: 5px; margin: 10px; padding: 6px; font-size: 1.4em;" name="alarm" icon="alarm" />
          <q-tab style="border: 1px solid grey; border-radius: 5px; margin: 10px; padding: 6px; font-size: 1.4em;" name="person" icon="account_circle" />
        </q-tabs>
        <q-btn class="absolute-bottom-right" round color="teal" icon="add" />
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'home',
}

</script>

