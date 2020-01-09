<template>
  <b-container>
      <b-button
        @click="$router.go(-1)"
      >Back</b-button>
      <div v-for="(value, name) in this.$route.params.trip" v-bind:key="name"><strong>{{name}}:</strong> {{value}}</div>
  </b-container>
</template>

