<template>
  <div>
    <!-- Intro Section -->
    <section 
      id="home"
      class="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat"
      style="background-image: url('/img/banner.png')"
    >
      <div class="absolute inset-0 bg-black/40"></div> <!-- Overlay -->
      
      <div class="relative z-10 text-center px-4">
        <h3 class="text-2xl md:text-3xl font-medium text-green-400 mb-2 animate-fade-in-down">
          {{ $t('intro.welcome') }}
        </h3>
        <h1 class="text-4xl md:text-6xl font-bold text-green-300 mb-8 uppercase animate-zoom-in">
          {{ $t('intro.title') }}
        </h1>
        <a  
          href="#portfolio" 
          class="inline-block px-8 py-3 border-2 border-green-500 text-green-500 font-bold uppercase hover:bg-green-500 hover:text-white transition-all duration-300 rounded-sm animate-fade-in-up"
        >
          {{ $t('intro.btn') }}
        </a>
      </div>
    </section>

    <!-- Services (Skills) -->
    <SectionServices />

    <!-- About -->
    <SectionAbout />

    <!-- Resume (Education & Work) -->
    <SectionResume />

    <!-- Portfolio -->
    <SectionPortfolio />

    <!-- Call to Action -->
    <SectionCallToAction />

    <!-- Contact -->
    <SectionContact />
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported in Nuxt 3
</script>

<style scoped>
/* Simple CSS Animations to replace WOW.js */
.animate-fade-in-down {
  animation: fadeInDown 1s ease-out;
}
.animate-zoom-in {
  animation: zoomIn 1s ease-out;
}
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out 0.5s backwards;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes zoomIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
