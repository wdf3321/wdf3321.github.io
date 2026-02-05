<template>
  <header 
    class="fixed top-0 w-full z-50 transition-all duration-300"
    :class="[isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4']"
  >
    <nav class="container mx-auto px-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="logo-wrap">
        <NuxtLink :to="localePath('/')" class="text-2xl font-bold text-emerald-600 hover:text-green-500 transition-colors">
          <!-- Yutung Yang -->
        </NuxtLink>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <!-- Language Switcher -->
        <div class="relative group">
          <button class="flex items-center space-x-1 text-emerald-600 hover:text-green-500 font-medium uppercase text-sm tracking-wide">
            <span>{{ locale === 'en' ? 'English' : locale === 'jp' ? '日本語' : '繁體中文' }}</span>
            <!-- <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-xs ml-1" /> -->
          </button>
          <!-- Dropdown -->
          <div class="absolute right-0 top-full pt-4 w-32 hidden group-hover:block">
            <div class="bg-white shadow-xl rounded-md overflow-hidden border border-gray-100 animate-fade-in-up">
              <NuxtLink 
                :to="switchLocalePath('en')" 
                class="block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors"
                @click="isOpen = false"
              >
                English
              </NuxtLink>
              <NuxtLink 
                :to="switchLocalePath('jp')" 
                class="block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors"
                @click="isOpen = false"
              >
                日本語
              </NuxtLink>
              <NuxtLink 
                :to="switchLocalePath('zh')" 
                class="block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors"
                @click="isOpen = false"
              >
                繁體中文
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Links -->
        <a 
          v-for="item in navItems" 
          :key="item.href" 
          :href="item.href"
          class="text-sm uppercase tracking-wide text-emerald-600 hover:text-green-500 transition-colors"
        >
          {{ item.label }}
        </a>
      </div>

      <!-- Mobile Toggle -->
      <!-- Mobile Toggle -->
      <button @click="isOpen = !isOpen" class="md:hidden text-emerald-600 hover:text-green-500 p-2 focus:outline-none">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div v-show="isOpen" class="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 top-full">
      <div class="flex flex-col p-4 space-y-4">
        <div class="flex items-center justify-between border-b pb-2">
          <span class="text-sm font-bold text-gray-400 uppercase">Language</span>
          <div class="flex space-x-3">
            <NuxtLink 
              :to="switchLocalePath('en')" 
              class="text-sm font-medium" 
              :class="locale === 'en' ? 'text-green-600' : 'text-gray-500'"
              @click="isOpen = false"
            >
              EN
            </NuxtLink>
            <NuxtLink 
              :to="switchLocalePath('jp')" 
              class="text-sm font-medium"
              :class="locale === 'jp' ? 'text-green-600' : 'text-gray-500'"
              @click="isOpen = false"
            >
              JP
            </NuxtLink>
            <NuxtLink 
              :to="switchLocalePath('zh')" 
              class="text-sm font-medium"
              :class="locale === 'zh' ? 'text-green-600' : 'text-gray-500'"
              @click="isOpen = false"
            >
              ZH
            </NuxtLink>
          </div>
        </div>

        <a 
          v-for="item in navItems" 
          :key="item.href" 
          :href="item.href"
          class="text-sm font-bold uppercase tracking-wide text-gray-600 hover:text-green-500"
          @click="isOpen = false"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
const { locale, t } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const isOpen = ref(false)
const isScrolled = ref(false)

const navItems = computed(() => [
  { label: t('nav.home'), href: '#home' },
  { label: t('nav.skill'), href: '#services' },
  { label: t('nav.about'), href: '#about' },
  { label: t('nav.portfolio'), href: '#portfolio' },
  { label: t('nav.contact'), href: '#contact' },
])

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Optional: Smooth transition for mobile menu */
.animate-fade-in-up {
  animation: fadeInUp 0.2s ease-out forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
