<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import AppSidebar from './components/AppSidebar.vue'
import AppHeader from './components/AppHeader.vue'

const sidebarVisible = ref(false)
const route = useRoute()

function toggleSidebar() {
  sidebarVisible.value = !sidebarVisible.value
}
</script>

<template>
  <!-- <AppHeader @toggle-sidebar="toggleSidebar" /> -->
  <div class="app-layout" :class="{ 'sidebar-open': sidebarVisible }">
    <AppSidebar v-model:visible="sidebarVisible" />
    <AppHeader @toggle-sidebar="toggleSidebar" />
    <main class="main-content" :style="route.name === 'home' ? { padding: 0 } : {}">
      <!-- Remove padding for home route to allow full-width hero section -->
      <router-view />
    </main>
  </div>
</template>

<!-- <template>
  <div id="app-wrapper">
    <AppHeader />
  </div>
</template> -->

<style>
:root {
  --sidebar-width: 20rem; /* Default PrimeVue Drawer width */
}

.app-layout {
  position: relative;
  min-height: 100vh;
}

html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: block; /* Ensures #app is a block container, overriding potential grid styles */
}

#app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the wrapper takes full viewport height */
}

.main-content {
  padding: 1.5rem;
  padding-top: 5rem; /* Add top padding to account for fixed header */
}
</style>
