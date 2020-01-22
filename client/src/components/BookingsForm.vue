<template lang="html">
  <form method="post" v-on:submit="handleSubmit" id="bookings-form" >
    <h2>Add a Booking</h2>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name">
    <br>
    <label for="email">Email:</label>
    <input type="text" id="email" v-model="email">
    <br>
    <input type="submit" id="save" value="save">
  </form>
</template>

<script>

import BookingService from '../services/BookingService.js'

export default {
  name: "bookings-list",
  data(){
    return {
      name: "",
      email: ""
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();

      const payload = {
        name: this.name,
        email: this.email
      };


    }
  }
}
</script>

<style lang="css" scoped>
</style>
