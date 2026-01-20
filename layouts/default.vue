<template>
  <div class="flex flex-col min-h-screen font-sans">
    <TheNavbar />
    <main class="flex-grow">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
