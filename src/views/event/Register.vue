<template>
  <p>Register for Event</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    register() {
      //Call to api
      //If registered then redirect to event details

      this.GStore.flashMessage =
        'You are successfully registered for ' + this.event.title

      //Pulire il messaggio dopo 3 sec
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)

      this.$router.push({
        name: 'EventDetails'
      })
    }
  }
}
</script>
