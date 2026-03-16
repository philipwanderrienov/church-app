<template>
  <!-- :model sama aja dengan v-bind:model || begitupun :pt sama dengan v-bind:pt-->
  <!-- :pt berfungsi untuk bisa langsung custom css bawaan primevue utk si Menubar nya. -->
  <Menubar
    :model="items"
    :pt="{
      root: {
        class: 'justify-center fixed top-0 left-0 right-0 z-50',
        style: { 'border-radius': '0 0 1rem 1rem' },
      },
    }"
  />
</template>

<script setup>
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

<style scoped></style>
