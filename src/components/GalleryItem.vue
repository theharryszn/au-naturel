<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps({
  image: {
    type: String,
    required: true
  }
})

const speed = ref(Math.floor(Math.random() * 3))
const col = ref(Math.ceil(Math.random() * 3))
const imageUrl = new URL(`/src/assets/images/gallery/${props.image}`, import.meta.url).href
</script>
<template>
  <div
    data-scroll
    :data-scroll-speed="speed"
    :class="`flex flex-col relative group col-span-1 md:col-span-${col}`"
  >
    <img
      :src="imageUrl"
      class="bg-zinc-800/10 object-cover border border-transparent rounded-sm hover:border-zinc-50/10 transition-all duration-700 group-hover:scale-[1.01] grayscale group-hover:grayscale-0"
    />
    <div class="py-2 transition text-sm md:opacity-0 group-hover:opacity-100">
      @{{ props.image.substring(0, image.indexOf('/')) }}
    </div>
  </div>
</template>
