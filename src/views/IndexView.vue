<script setup lang="ts">
import EndlessGallery from '@/components/EndlessGallery.vue'
import FooterView from '@/components/FooterView.vue'
import NavbarView from '@/components/NavbarView.vue'
</script>

<template>
  <pageContainer>
    <NavbarView />
    <main class="p-10 px-5 md:px-10">
      <section id="section-1" class="flex flex-col items-center p-20 gap-10" data-scroll-section>
        <div
          class="flex justify-center flex-col items-center sticky"
          data-scroll
          data-scroll-sticky
          data-scroll-speed="2"
          data-scroll-target="#section-1"
        >
          <div class="text-3xl">AU NATUREL</div>
          <p>Curated by Harry</p>
        </div>
      </section>
      <EndlessGallery />
    </main>
    <FooterView />
  </pageContainer>
</template>
