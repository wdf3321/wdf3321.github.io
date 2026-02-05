<template>
  <section id="portfolio" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <!-- Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800">{{ $t('portfolio.title') }}</h2>
        <div class="w-16 h-1 bg-green-500 mx-auto mt-4"></div>
      </div>

      <!-- Filters -->
      <!-- <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="filter in filters" 
          :key="filter.key"
          @click="activeFilter = filter.key"
          class="px-6 py-2 rounded-full border transition-all duration-300 uppercase text-sm font-semibold tracking-wide"
          :class="[activeFilter === filter.key ? 'bg-green-500 text-white border-green-500' : 'bg-white text-gray-600 border-gray-300 hover:border-green-500 hover:text-green-500']"
        >
          {{ filter.label }}
        </button>
      </div> -->

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <transition-group name="fade" mode="out-in">
          <div 
            v-for="(item, index) in filteredItems" 
            :key="item.title + index" 
            class="group relative overflow-hidden rounded-lg shadow-md bg-white border border-gray-100"
          >
            <!-- Image -->
            <div class="aspect-w-4 aspect-h-3 overflow-hidden">
               <!-- Use a placeholder or actual image. Assuming paths are correct. -->
              <img :src="'/' + item.img" :alt="item.title" class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
            </div>

            <!-- Overlay -->
            <a :href="item.link || '#'" :target="item.link ? '_blank' : ''" class="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
              <h4 class="text-white text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{{ item.title }}</h4>
              <p class="text-gray-300 text-sm mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 line-clamp-4">
                {{ item.desc }}
              </p>
              <p v-if="item.skills" class="text-green-400 text-xs font-mono transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                {{ item.skills }}
              </p>
            </a>
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const { tm, t, rt } = useI18n()

// Filters keys
const filters = computed(() => [
  { key: 'all', label: t('portfolio.filter.all') },
  { key: 'branding', label: t('portfolio.filter.branding') },
  { key: 'graphic', label: t('portfolio.filter.graphic') },
  { key: 'webdesign', label: t('portfolio.filter.webdesign') },
  { key: 'video', label: t('portfolio.filter.video') }
])

const activeFilter = ref('all')

const filteredItems = computed(() => {
  const rawItems = tm('portfolio.items') as any[]
  // Resolve all fields from AST to string
  const items = rawItems.map(item => ({
    title: rt(item.title),
    category: rt(item.category),
    img: rt(item.img),
    desc: rt(item.desc),
    skills: rt(item.skills),
    link: rt(item.link)
  }))

  if (activeFilter.value === 'all') return items
  // Simple substring check as multiple categories often in class string in isotope
  // In JSON, category is a string "branding graphic", so we check inclusion
  return items.filter((item: any) => item.category && item.category.includes(activeFilter.value))
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
