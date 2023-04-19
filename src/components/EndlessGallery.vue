<script setup lang="ts">
import { useImageStore } from '@/stores/images'
import GalleryItem from './GalleryItem.vue'

const { images } = useImageStore()
</script>
<template>
  <div data-scroll-section class="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-5 md:gap-y-10">
    <GalleryItem v-for="image of images" :image="image" :key="image" />
  </div>
</template>
