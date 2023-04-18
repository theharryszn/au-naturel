<script setup lang="ts">
import FooterView from '@/components/FooterView.vue'
import NavbarView from '@/components/NavbarView.vue'
import { useImageStore } from '@/stores/images'
import { ref } from 'vue'

const { names } = useImageStore()

const libraries = ref(['TailwindCSS', 'VueJS', 'Locomotive Scroll', 'gsap', 'SASS', 'imagesloaded'])
</script>
<template>
  <pageContainer>
    <div class="opacity-10 text-[10rem] fixed bottom-0 font-extrabold translate-y-1/3">Credits</div>
    <div class="flex flex-col h-screen">
      <NavbarView />
      <main class="p-10 px-5 md:px-10 flex-1">
        <div data-scroll-section class="flex-1">
          <div class="text-lg font-bold">CREDITS</div>
          <div class="grid md:grid-cols-4 py-10 gap-10">
            <div>
              <div class="font-medium">Curated by</div>
              <div class="opacity-50 py-2">Abidemi Ope Harry</div>
            </div>
            <div>
              <div class="font-medium">Developed & Designed by</div>
              <div class="opacity-50 py-2">Abidemi Ope Harry</div>
            </div>
            <div class="col-start-1 col-span-1">
              <div class="font-medium">Featuring works from</div>
              <div class="grid py-2">
                <div :key="name" v-for="name in names" class="opacity-50">{{ name }}</div>
              </div>
            </div>
            <div>
              <div class="font-medium">Frameworks and Libraries</div>
              <div class="grid py-2">
                <div :key="library" v-for="library in libraries" class="opacity-50">
                  {{ library }}
                </div>
              </div>
            </div>
            <div class="col-start-1 col-span-full">
              <a class="shrink opacity-50 hover:opacity-100" href="mailto:opeabidemi@gmail.com"
                >Contact me for Content Removal</a
              >
            </div>
          </div>
        </div>
      </main>
      <FooterView />
    </div>
  </pageContainer>
</template>
