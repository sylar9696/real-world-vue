<template>
  <p>Register for Event</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['event'],
  methods: {
    register() {
      //Call to api
      //If registered then redirect to event details
      this.$router.push({
        name: 'EventDetails'
      })
    }
  }
}
</script>
