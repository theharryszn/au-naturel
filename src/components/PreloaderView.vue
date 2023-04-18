<script setup lang="ts"></script>
<template>
  <div class="preloader">
    <div class="flex items-center flex-1 justify-center p-10">
      <div class="animate-pulse">Photography is the purest form of art.</div>
      <div class="absolute bottom-10 right-10 text-3xl" id="progress-indicator"></div>
    </div>
    <div id="pre-bottom-curtain-0" class="bg-zinc-100/5 h-screen w-full absolute top-[98%]"></div>
    <div id="pre-bottom-curtain-1" class="bg-zinc-500 h-screen w-full absolute top-[98%]"></div>
    <div id="pre-bottom-curtain-2" class="bg-zinc-800 h-screen w-full absolute top-[98%]"></div>
    <div id="pre-bottom-curtain-3" class="bg-zinc-950 h-screen w-full absolute top-[98%]"></div>
    <div id="pre-bottom-curtain-4" class="bg-zinc-900 h-screen w-full absolute top-[98%]"></div>
  </div>
</template>
<style scoped lang="scss">
.preloader {
  position: fixed;
  width: 100%;
  height: 100%;
  @apply flex flex-col items-center justify-center bg-zinc-50;
  overflow: hidden;
  z-index: 999;
}
</style>
