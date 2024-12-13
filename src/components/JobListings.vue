<script setup lang="ts">
import { defineProps, onMounted, reactive } from 'vue'
import JobListing, { type JobProps } from './JobListing.vue'
import axios from 'axios'

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
})
const state = reactive<{ jobs: JobProps[]; isLoading: Boolean }>({
  jobs: [],
  isLoading: false,
})
onMounted(async () => {
  state.isLoading = true
  try {
    const response = await axios.get('/api/jobs')
    state.jobs = response.data
  } catch (error) {
    console.log(error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
      <div
        v-if="state.isLoading"
        class="text-center text-gray-500 flex justify-center items-center"
      >
        <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" v-else>
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
      <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <a
          href="/jobs"
          class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
          >View All Jobs</a
        >
      </section>
    </div>
  </section>
</template>

<style scoped></style>
