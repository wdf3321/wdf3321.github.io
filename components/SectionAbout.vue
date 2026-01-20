<template>
  <section id="about" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div class="h-full">
          <!-- Using inline style for height to match legacy look if needed, or just object-cover -->
          <img src="/img/216762.jpg" alt="About Image" class="w-full h-auto rounded-lg shadow-lg object-cover" />
        </div>

        <!-- Content -->
        <div>
          <div class="mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-2">{{ $t('about.title') }}</h2>
            <div class="w-16 h-1 bg-green-500"></div>
          </div>
          
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>{{ $t('about.p1') }}</p>
            <p>{{ $t('about.p2') }}</p>
            <p v-if="$t('about.p3')">{{ $t('about.p3') }}</p>
          </div>

          <div class="mt-8">
            <a href="#contact" class="inline-block px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-colors">
              {{ $t('about.btn') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
