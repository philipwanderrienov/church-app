<template>
  <header class="app-header">
    <div class="header-content">
      <div class="flex align-items-center gap-4">
        <Button
          icon="pi pi-bars"
          @click="$emit('toggle-sidebar')"
          text
          rounded
          aria-label="Toggle Sidebar"
          class="header-button"
          label=""
        />
        <!-- <h1>Church Apps</h1> -->
      </div>
      <nav class="flex align-items-center">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <!-- Add more navigation links here -->
      </nav>
    </div>
  </header>
</template>

<script setup>
import Button from 'primevue/button'
defineEmits(['toggle-sidebar'])
</script>

<style scoped>
.app-header {
  background-color: #2c3e50;
  color: white;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header-button {
  color: white;
}

.app-header h1 {
  margin: 0;
  font-size: 1.5em;
}

.app-header nav a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.app-header nav a:hover,
.app-header nav a.router-link-active {
  color: #42b983; /* Vue green */
}
</style>
