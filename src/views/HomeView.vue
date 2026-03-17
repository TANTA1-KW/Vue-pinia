<script setup>
import { RouterLink } from 'vue-router'
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
</script>

<template>
  <div>
    hello {{  counterStore.firstname }} {{ counterStore.lastname }}
  </div>
  <RouterLink :to="{ name: 'profile-id', params: { id: 1 }, query: { tab: 'info'  } }">
    <button>Go to Profile</button>
  </RouterLink>
</template>
