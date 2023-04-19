<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  image: {
    type: String,
    required: true
  }
})

const speed = Math.floor(Math.random() * 3)
const col = Math.ceil(Math.random() * 3)
const imgUrl = new URL(`./img.png${props.image}`, import.meta.url).href
</script>
<template>
  <div
    data-scroll
    :data-scroll-speed="speed"
    :class="`flex flex-col relative group col-span-${col}`"
  >
    <img
      :src="imgUrl"
      class="bg-zinc-800/10 object-cover border border-transparent rounded-sm hover:border-zinc-50/10 transition-all duration-700 group-hover:scale-[1.01] grayscale group-hover:grayscale-0"
    />
    <div class="py-2 transition text-sm md:opacity-0 group-hover:opacity-100">
      @{{ props.image.substring(0, image.indexOf('/')) }}
    </div>
  </div>
</template>
