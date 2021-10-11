<template>
  <!-- Qui ci va il mio form con tutti i campi -->
  <h1>Create an Event</h1>
  <form @submit.prevent="sendForm">
    <h3>Select a Category</h3>
    <BaseSelect
      :options="categories"
      v-model="event.category"
      label="Select a category"
    />
    {{ event }}
    <h3>Name e description of the Event</h3>
    <BaseInput v-model="event.title" label="Title" type="text" />
    <BaseInput v-model="event.description" label="Description" type="text" />
    <h3>Where is your Event ?</h3>
    <BaseInput v-model="event.location" label="Location" type="text" />
    <h3>Extra</h3>
    <BaseCheckbox v-model="event.extras.catering" label="Catering" />
    <BaseCheckbox v-model="event.extras.music" label="Music" />
    <h3>Are pets Allowed ?</h3>
    <div>
      <BaseRadioGroup v-model="event.pets" name="pets" :options="petOptions" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import BaseInput from '@/components/BaseInput'
import BaseSelect from '@/components/BaseSelect'
import BaseCheckbox from '@/components/BaseCheckbox'
import BaseRadioGroup from '@/components/BaseRadioGroup'
import axios from 'axios'

export default {
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
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
      },
      petOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
      ]
    }
  },
  components: {
    BaseInput,
    BaseSelect,
    BaseCheckbox,
    BaseRadioGroup
  },
  methods: {
    sendForm() {
      axios
        .post(
          //'https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events',
          'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router',
          this.event
        )
        .then(function(response) {
          console.log('Response', response)
        })
        .catch(function(err) {
          console.log('Error', err)
        })
    }
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
