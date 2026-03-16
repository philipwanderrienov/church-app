<!-- <template>
  <header class="app-header">
    <div class="header-content">
      <div class="flex align-items-center gap-4">
        <Button
          icon="pi pi-bars"
          @click="$emit('toggle-sidebar')"
          text
          rounded
          aria-label="Toggle Sidebar"
          class="header-button md:hidden"
          label=""
        />
      </div>
      <nav class="hidden md:flex align-items-center">
        <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
        <router-link to="/congregations">Congregations</router-link>
      </nav>
    </div>
  </header>
</template> -->

<template>
  <!-- :model sama aja dengan v-bind:model || begitupun :pt sama dengan v-bind:pt-->
   <!-- :pt berfungsi untuk bisa langsung custom css bawaan primevue utk si Menubar nya. -->
  <Menubar :model="items" :pt="{ root: { class: 'justify-end', style: { 'border-radius': '0 0 1rem 1rem', 'padding': '1rem' } } }" />
</template>

<script setup>
import Button from 'primevue/button'
import { ref } from 'vue'
defineEmits(['toggle-sidebar'])

import Menubar from 'primevue/menubar'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    url: '/',
  },
  {
    label: 'Features',
    icon: 'pi pi-star',
    url: '/features',
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Components',
        icon: 'pi pi-bolt',
        url: '/components',
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server',
        url: '/blocks',
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil',
        url: '/ui-kit',
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette',
            url: '/templates/apollo',
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette',
            url: '/templates/ultima',
          },
        ],
      },
    ],
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
  },
])
</script>

<style scoped>
.app-header {
  background-color: #2c3e50;
  color: white;
  background-color: var(--color-background);
  color: var(--color-text);
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
