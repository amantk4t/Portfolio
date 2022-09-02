<script setup>
const nav = [
  { name: "Home", icon: "assets/icons/home.png", path: "/" },
  { name: "Projects", icon: "assets/icons/projects.png", path: "/work" },
  { name: "Skills", icon: "assets/icons/skill.png", path: "/skills" },
  { name: "Certificates", icon: "assets/icons/certificate.png", path: "/cert" },
  { name: "About", icon: "assets/icons/about.png", path: "/about" },
];
</script>

<template>
  <nav class="w-screen tabs tabs-boxed justify-center fixed bottom-0 rounded-none">
    <router-link
      v-for="(link, index) in nav"
      :key="index"
      :class="{ 'tab-active': $route.name == link.name }"
      class="tab tab-lifted"
      :to="link.path"
    >
      <img class="p-2 w-8 h-8 md:hidden" :src="link.icon" />
      <button class="hidden md:flex">{{ link.name }}</button>
    </router-link>
  </nav>
</template>
