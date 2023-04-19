<script setup lang="ts">
import { useImageStore } from '@/stores/images'

const { images } = useImageStore()
</script>
<template>
  <div data-scroll-section class="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-5 md:gap-y-10">
    <div
      v-for="image of images"
      v-bind:key="image"
      data-scroll
      :data-scroll-speed="Math.floor(Math.random() * 3)"
      :class="`flex flex-col relative group md:col-span-${Math.ceil(Math.random() * 3)}`"
    >
      <img
        :src="'/src/assets/images/gallery/' + image"
        class="bg-zinc-800/10 object-cover border border-transparent rounded-sm hover:border-zinc-50/10 transition-all duration-700 group-hover:scale-[1.01] grayscale group-hover:grayscale-0"
      />
      <div class="py-2 transition text-sm md:opacity-0 group-hover:opacity-100">
        @{{ image.substring(0, image.indexOf('/')) }}
      </div>
    </div>
  </div>
</template>
