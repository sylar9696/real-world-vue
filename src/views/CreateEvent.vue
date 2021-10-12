<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="sendForm">
      <BaseSelect
        :options="categories"
        v-model="event.category"
        label="Select a category"
      />

      <fieldset>
        <legend>Name & describe your event</legend>

        <BaseInput v-model="event.title" label="Title" type="text" />

        <BaseInput
          v-model="event.description"
          label="Description"
          type="text"
        />
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>

        <BaseInput v-model="event.location" label="Location" type="text" />
      </fieldset>

      <fieldset>
        <legend>Pets</legend>

        <p>Are pets allowed?</p>
        <div>
          <BaseRadioGroup
            v-model="event.pets"
            name="pets"
            :options="petOptions"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckbox v-model="event.extras.catering" label="Catering" />
        </div>

        <div>
          <BaseCheckbox v-model="event.extras.music" label="Live music" />
        </div>
      </fieldset>

      <button type="submit">Submit</button>
    </form>

    <pre>{{ event }}</pre>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput'
import BaseSelect from '@/components/BaseSelect'
import BaseCheckbox from '@/components/BaseCheckbox'
import BaseRadioGroup from '@/components/BaseRadioGroup'
import EventService from '@/services/EventService.js'

import { v4 as uuidv4 } from 'uuid'

//import axios from 'axios'

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
        id: '',
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        organizer: '',
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
      this.event.id = uuidv4() // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
      this.event.organizer = this.$store.state.user
      console.log('Event:', this.event)
      EventService.postEvent(this.event)
        .then(() => {
          // add event to vuex state using mutations
          this.$store.commit('ADD_EVENT', this.event)
        })
        .catch(error => {
          console.log(error)
        })

      // axios
      //   .post(
      //     //'https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events',
      //     'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router',
      //     this.event
      //   )
      //   .then(function(response) {
      //     console.log('Response', response)
      //   })
      //   .catch(function(err) {
      //     console.log('Error', err)
      //   })
    }
  }
}
</script>

<style>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
</style>
