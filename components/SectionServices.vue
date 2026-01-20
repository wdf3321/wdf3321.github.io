<template>
  <section id="services" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Visual -->
        <div class="service-card p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300 animate-on-scroll">
          <div class="flex items-center mb-4">
            <div class="text-green-500 mr-3 text-2xl">
              <font-awesome-icon :icon="['fas', 'eye']" />
            </div>
            <h4 class="text-xl font-bold text-gray-800">{{ $t('skills.visual.title') }}</h4>
          </div>
          <ul class="text-gray-600 list-disc list-inside">
            <li v-for="item in $tm('skills.visual.items')" :key="item">{{ $rt(item) }}</li>
          </ul>
        </div>

        <!-- Front End -->
        <div class="service-card p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300 animate-on-scroll" style="animation-delay: 0.1s">
          <div class="flex items-center mb-4">
            <div class="text-green-500 mr-3 text-2xl">
              <font-awesome-icon :icon="['fas', 'desktop']" />
            </div>
            <h4 class="text-xl font-bold text-gray-800">{{ $t('skills.frontend.title') }}</h4>
          </div>
          <ul class="text-gray-600 list-disc list-inside">
            <li v-for="item in $tm('skills.frontend.items')" :key="item">{{ $rt(item) }}</li>
          </ul>
        </div>

        <!-- Back End -->
        <div class="service-card p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300 animate-on-scroll" style="animation-delay: 0.2s">
          <div class="flex items-center mb-4">
            <div class="text-green-500 mr-3 text-2xl">
              <font-awesome-icon :icon="['fas', 'database']" />
            </div>
            <h4 class="text-xl font-bold text-gray-800">{{ $t('skills.backend.title') }}</h4>
          </div>
          <ul class="text-gray-600 list-disc list-inside">
            <li v-for="item in $tm('skills.backend.items')" :key="item">{{ $rt(item) }}</li>
          </ul>
        </div>

        <!-- Tools -->
        <div class="service-card p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300 animate-on-scroll" style="animation-delay: 0.3s">
          <div class="flex items-center mb-4">
            <div class="text-green-500 mr-3 text-2xl">
              <!-- Using code as generic substitution for code-commit if needed, but fa-code-commit is in fas -->
               <font-awesome-icon :icon="['fas', 'code']" />
            </div>
            <h4 class="text-xl font-bold text-gray-800">{{ $t('skills.tools.title') }}</h4>
          </div>
          <ul class="text-gray-600 list-disc list-inside">
            <li v-for="item in $tm('skills.tools.items')" :key="item">{{ $rt(item) }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Using $tm (translate plural/array) requires checking if it returns array.
// But mostly with @nuxtjs/i18n and vue-i18n, accessing array in json works.
</script>

<style scoped>
.animate-on-scroll {
  /* Simple fade in placeholder */
  opacity: 1; 
  /* In real implementation, we would use IntersectionObserver to toggle class */
}
</style>
