<script setup>
import { ref, onMounted } from 'vue'
import apiService from '../api/apiService.js'
import Drawer from 'primevue/drawer'

const congregations = ref([]) // ref() means to make it reactive, so the UI updates when it changes.
// Vue auto-unwraps refs in the template, so we can use congregations directly in the template without .value.
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    // Fetch congregations using our new API service
    const response = await apiService.getCongregations()

    // Assign the data to the reactive ref.
    // We use response.data if the backend wraps the array in a "data" field,
    // otherwise we use response directly if it returns a plain array.
    congregations.value = response.data || response
    console.log('Fetched congregations:', congregations.value)
  } catch (e) {
    // Enhance error handling
    if (e.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      error.value = `Error ${e.response.status}: ${e.response.data.error || e.message}`
    } else {
      // Something happened in setting up the request that triggered an Error (e.g. network error)
      error.value = e.message
    }
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <h1>Congregations</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error" class="error">Error: {{ error }}</div>
    <ul v-if="congregations && congregations.length">
      <li v-for="congregation in congregations" :key="congregation.id">
        <strong>{{ congregation.name }}</strong> - {{ congregation.location }}
      </li>
    </ul>
    <div v-else-if="!loading && !error">No congregations found.</div>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
</style>
