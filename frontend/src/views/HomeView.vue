<script setup>
import AboutView from './AboutView.vue'
import CongregationsView from './CongregationsView.vue'
import heroBackground from '@/assets/image/hero-section-image.jpg'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
</script>

<template>
  <main>
    <!-- Home Section -->
    <section
      id="home"
      class="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      :style="{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="grid grid-rows-2 gap-0 text-white h-50">
        <div class="text-center relative z-10 text-white">
          <h1 class="text-4xl font-bold">Gareja na sari, martangkupas, janah siboan pasu-pasu</h1>
          <p class="mt-4 text-lg">
            Gabe gareja na matoras mambobai kuria gabe angkula ni Kristus na mangoluh
          </p>
        </div>
        <div class="card">
          <Splitter
            :pt="{
              root: {
                style: { height: '200px', opacity: '0.5' },
              },
            }"
          >
            <SplitterPanel class="flex items-center justify-center">
              <div class="text-center relative z-10 text-white">
                <h1 class="text-4xl font-bold">Tema Bulan Maret 2026</h1>
                <p class="mt-4 text-lg">Manggoluh ibagas na sari</p>
              </div>
            </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center">
              <div class="text-center relative z-10 text-white">
                <h1 class="text-4xl font-bold">Tema Mingguan</h1>
                <p class="mt-4 text-lg">Manggoluh gabe anak haliharon</p>
              </div>
            </SplitterPanel>
          </Splitter>
        </div>
      </div>
    </section>

    <!-- Congregations Section -->
    <section id="congregations" class="min-h-screen p-8 border-t bg-gray-50">
      <CongregationsView />
    </section>

    <!-- About Section -->
    <section id="about" class="min-h-screen p-8 border-t">
      <AboutView />
    </section>
  </main>
</template>
