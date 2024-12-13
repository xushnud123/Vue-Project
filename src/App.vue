<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNavbar from './components/MainNavbar.vue'
import 'vue3-toastify/dist/index.css'
</script>

<template>
  <MainNavbar />
  <RouterView />
</template>

<style scoped></style>
