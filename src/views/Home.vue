<script setup>import { useRoute } from 'vue-router';
const route = useRoute()
const name = "amanuel";
let fName, lName;
console.log(route)
fName = name.split('');
for (let i = 0; i < 7; i++) {
  console.log(fName)
}
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-cont text-center">
      <div class="max-w-md">
        <div class="waviy">
          <span class="name">
            <h2 class="">AMANUEL</h2>
          </span>
          <span class="name">
            <h2 class="text-red-500">TEKALGN</h2>
          </span>
        </div>
        <h4 class="py-6 text-3xl text-gray-200">
          <strong>Web developer, <span v-for="ch, i in 'UI/UX'" :style="'--i:' + i">{{ ch }}</span> designer</strong>.
        </h4>
        <router-link to="/about" class="btn btn-primary">About me</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.waviy {
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  font-size: 40px;
}

.waviy .name span {
  font-family: "Alfa Slab One", cursive;
  position: relative;
  display: inline-block;
  color: #fff;
  text-transform: uppercase;
  animation: waviy 1.5s infinite;
  animation-delay: calc(0.1s * var(--i));
}

@keyframes waviy {

  0%,
  40%,
  100% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(-20px);
  }
}

.waviy2 {
  position: relative;
}

.waviy2 .name span {
  position: relative;
  display: inline-block;
  font-size: 40px;
  color: #fff;
  text-transform: uppercase;
  animation: flip 2s infinite;
  animation-delay: calc(0.2s * var(--i));
}

@keyframes flip {

  0%,
  80% {
    transform: rotateY(360deg);
  }
}
</style>