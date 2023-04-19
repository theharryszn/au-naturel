<script setup lang="ts"></script>
<template>
  <nav
    data-scroll-sticky
    class="flex items-center justify-between px-5 py-4 md:px-10 gap-10 text-sm"
  >
    <RouterLink to="/" class="shrink opacity-50 hover:opacity-100 transition">HOME</RouterLink>
    <RouterLink to="/about" class="shrink opacity-50 hover:opacity-100 transition"
      >ABOUT</RouterLink
    >
  </nav>
</template>
