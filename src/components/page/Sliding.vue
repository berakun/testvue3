<template>
  <div class="container mx-auto py-10">
    <Carousel :items-to-show="4" ref="carousel">
      <Slide v-for="item in data.items" :key="item.id">
        <img :src="item.gambar" :alt="item.name" />
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import gambar from '../../assets/gambar/1.jpg';
import 'vue3-carousel/dist/carousel.css'
import { reactive, ref } from 'vue';


const data = reactive({
  items: [
    { id: 1, name: 'Gambar 1', gambar },
    { id: 2, name: 'Gambar 2', gambar },
    { id: 3, name: 'Gambar 3', gambar },
    { id: 4, name: 'Gambar 4', gambar },
    { id: 5, name: 'Gambar 5', gambar },
    { id: 6, name: 'Gambar 6', gambar }
  ]
})

const carousel = ref(null)
const prev = () => {
  carousel.value.prev();
}

const next = () => {
  carousel.value.next();
}

</script>