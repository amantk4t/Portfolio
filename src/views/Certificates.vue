<script setup>
const certificates = [
    { name: 'jQuery', url: 'https://www.sololearn.com/Certificate/1082-12032775/jpg/' },
    { name: 'Java', url: 'https://www.sololearn.com/certificates/course/en/12032775/1068/landscape/png' },
    { name: 'HTML', url: 'https://www.sololearn.com/Certificate/1014-12032775/jpg/' },
    { name: 'Responsive Web Design', url: 'https://www.sololearn.com/Certificate/1162-12032775/jpg/' },
    { name: 'JavaScript', url: 'https://www.sololearn.com/certificates/course/en/12032775/1024/landscape/png' },
    { name: 'CSS', url: 'https://www.sololearn.com/Certificate/1023-12032775/jpg/' },
    { name: 'Python for beginners', url: 'https://api2.sololearn.com/v2/certificates/CT-IU8CU3AG/image/png' }
]

</script>

<template>
    <h1 class="text-3xl text-center mb-12">Certificates</h1>
    <main class="flex gap-12 flex-wrap">
        <a class="h-96 w-80 relative shadow-2xl rounded-md" v-for="cert, index in certificates" :key="index"
            :style="'background-image: url(' + cert.url + ');'" style="background-size: 300px 380px" :href="cert.url">
            <!-- <span class="absolute top-1/2 left-1/2">{{ cert.name }}</span> -->
        </a>
        <div class="carousel w-full">
            <div v-for="cert, index in certificates" :key="index" :id="'cert' + index++"
                class="carousel-item relative w-full">
                <img :src="cert.url" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a :href="'#cert' + (--index)" class="btn btn-circle">❮</a>
                    <a :href="'#cert' + (++index)" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    </main>
</template>