<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Previous</router-link
      >

      <div class="numPages">
        <router-link
          v-for="numeroPagina in countPages"
          :key="numeroPagina"
          :to="{ name: 'EventList', query: { page: numeroPagina } }"
        >
          {{ numeroPagina }}
        </router-link>
      </div>

      <router-link
        id="page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next &#62;</router-link
      >
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { watchEffect } from 'vue'

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard
  },
  data() {
    return {
      events: null,
      totalEvents: 0
    }
  },
  created() {
    //Permette con vue 3 di controllare quando viene modificato un componente senza riaggiornare la pagina
    watchEffect(() => {
      //2 numero di eventi per pagina, this.page numero della pagina
      EventService.getEvents(2, this.page)
        .then(response => {
          console.log(response.headers)
          this.events = response.data
          this.totalEvents = response.headers['x-total-count']
        })
        .catch(() => {
          this.$router.push({
            name: 'NetworkError'
          })
        })
    })
  },
  computed: {
    hasNextPage() {
      // First, calculate total pages
      var totalPages = Math.ceil(this.totalEvents / 2) // 2 is events per page

      // Then check to see if the current page is less than the total pages.
      return this.page < totalPages
    },
    countPages() {
      var totalPages = Math.ceil(this.totalEvents / 2)
      return totalPages
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
.numPages a {
  margin: 0 5px;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
