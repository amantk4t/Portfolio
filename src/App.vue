<script setup>
import Navbar from "./components/Navbar.vue";
// import Home from "./views/Home.vue";
// import Certificates from "./views/Certificates.vue";
// import Projects from "./views/Projects.vue";
// import About from "./views/About.vue";
// import Contact from "./views/Contact.vue";
</script>

<template>
  <Navbar class="z-10" />
  <router-view></router-view>
  <!-- <Home />
  <Projects />
  <Certificates />
  <Contact />
  <About /> -->
</template>

<style>
* {
  font-family: "Alfa Slab One", "Times new roman";
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-gray-900 text-white min-h-screen;
}

h1 {
  @apply text-2xl;
}
</style>
