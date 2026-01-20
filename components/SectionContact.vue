<template>
  <section id="contact" class="py-24 bg-gray-900 text-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-2">{{ $t('contact.title') }}</h2>
        <div class="w-16 h-1 bg-white mx-auto mt-4"></div>
      </div>

      <div class="flex flex-col md:flex-row justify-center items-center gap-12">
        <!-- Github -->
        <a href="https://github.com/wdf3321" target="_blank" class="flex flex-col items-center group">
          <div class="w-16 h-16 rounded-full border-2 border-gray-600 flex items-center justify-center mb-4 group-hover:border-green-500 group-hover:bg-green-500 transition-all duration-300">
            <font-awesome-icon :icon="['fab', 'github']" size="2x" />
          </div>
          <h4 class="text-lg font-bold mb-1 group-hover:text-green-500 transition-colors">{{ $t('contact.github') }}</h4>
          <p class="text-gray-400">https://github.com/wdf3321</p>
        </a>

        <!-- Email -->
        <a href="mailto:wdf332@gmail.com" class="flex flex-col items-center group">
          <div class="w-16 h-16 rounded-full border-2 border-gray-600 flex items-center justify-center mb-4 group-hover:border-green-500 group-hover:bg-green-500 transition-all duration-300">
            <font-awesome-icon :icon="['fas', 'envelope']" size="2x" />
          </div>
          <h4 class="text-lg font-bold mb-1 group-hover:text-green-500 transition-colors">{{ $t('contact.email') }}</h4>
          <p class="text-gray-400">wdf332@gmail.com</p>
        </a>
      </div>
    </div>
  </section>
</template>
