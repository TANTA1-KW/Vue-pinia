<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    Page
    <RouterLink to="/" style="margin-right: 20px;">Home</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
  </div>
  <RouterView />
</template>

<style>
</style>
