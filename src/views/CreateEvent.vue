<template>
  <!-- Qui ci va il mio form con tutti i campi -->
  <h1>Create an Event</h1>
  <form>
    <h3>Name e description of the Event</h3>
    <BaseInput v-model="event.title" label="Title" type="text" />
    <BaseInput v-model="event.description" label="Description" type="text" />
    <h3>Where is your Event ?</h3>
    <BaseInput v-model="event.location" label="Location" type="text" />
  </form>
</template>

<script>
import BaseInput from '@/components/BaseInput'
export default {
  data() {
    return {
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      }
    }
  },
  components: {
    BaseInput
  }
}
</script>

<style scoped>
h3 {
  margin: 30px 0;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
