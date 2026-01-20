<template>
  <section class="py-16 bg-white text-center">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">{{ $t('cta.title') }}</h2>
      <a 
        href="https://github.com/wdf3321" 
        target="_blank" 
        class="inline-block px-8 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
      >
        {{ $t('cta.btn') }}
      </a>
    </div>
  </section>
</template>
