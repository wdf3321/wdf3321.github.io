<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Education -->
        <div>
          <h3 class="text-2xl font-bold mb-8 pb-2 border-b-2 border-green-500 inline-block">{{ $t('resume.education.title') }}</h3>
          <div class="space-y-8">
            <div 
              v-for="(item, index) in $tm('resume.education.items')" 
              :key="index"
              class="relative pl-8 border-l-2 border-gray-200 hover:border-green-300 transition-colors"
            >
              <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-500 ring-4 ring-white"></div>
              <span class="text-sm font-bold text-green-600 block mb-1 uppercase tracking-wide">{{ $rt(item.period) }}</span>
              <h4 class="text-xl font-bold">{{ $rt(item.school) }}</h4>
              <p class="text-gray-600 mb-2">{{ $rt(item.desc) }}</p>
              <p class="text-gray-500 text-sm">{{ $rt(item.details) }}</p>
            </div>
          </div>
        </div>

        <!-- Work Experience -->
        <div>
          <h3 class="text-2xl font-bold mb-8 pb-2 border-b-2 border-green-500 inline-block">{{ $t('resume.experience.title') }}</h3>
          <div class="space-y-8">
            <div 
              v-for="(item, index) in $tm('resume.experience.items')" 
              :key="index"
              class="relative pl-8 border-l-2 border-gray-200 hover:border-green-300 transition-colors"
            >
              <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-500 ring-4 ring-white"></div>
              <span class="text-sm font-bold text-green-600 block mb-1 uppercase tracking-wide">{{ $rt(item.period) }}</span>
              <h4 class="text-xl font-bold">{{ $rt(item.company) }}</h4>
              <p class="text-green-600 mb-2 font-medium">{{ $rt(item.role) }}</p>
              <ul class="list-disc list-inside text-gray-600 text-sm">
                <li v-for="task in item.tasks" :key="task">{{ $rt(task) }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Using $rt (resolve translation) helper from vue-i18n for array items
</script>
