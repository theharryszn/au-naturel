<script setup lang="ts">
import FooterView from '@/components/FooterView.vue'
import NavbarView from '@/components/NavbarView.vue'
</script>
<template>
  <pageContainer>
    <div
      class="opacity-10 text-[6rem] md:text-[10rem] fixed bottom-0 font-extrabold translate-y-1/3"
    >
      About
    </div>
    <div class="flex flex-col h-screen">
      <NavbarView />
      <main class="p-10 px-5 md:px-10 flex-1">
        <div data-scroll-section class="flex-1">
          <div class="text-lg font-bold">ABOUT</div>
          <div class="py-5 opacity-50 max-w-3xl">
            Hi 👋🏾 I'm Harry the creator of Au Naturel: a web gallery dedicated to showcasing the
            beauty of the human form through nude and self-portrait photography. As the creator of
            this project, I have always been inspired by the unique qualities of the human body.
            From the curves and textures to the intricate details of each individual, there is
            something truly mesmerizing about the way we look and move. And when captured through
            the lens of a skilled photographer, these qualities can be transformed into breathtaking
            works of art.
          </div>
          <div class="py-5 opacity-50 max-w-3xl">
            As a photography enthusiast and art lover, I have always been drawn to the natural
            beauty of the human form. There is something truly special about the way that light
            plays across the curves and contours of our bodies, highlighting every nuance and
            detail. Over the years, I have been particularly inspired by the works of some of my
            favorite photographers who have captured the essence of nude and self-portrait
            photography in stunning detail. Their images evoke a sense of intimacy, vulnerability,
            and raw emotion, while celebrating the beauty of the human form in all its shapes,
            colors, and textures.
          </div>
          <div class="py-5 opacity-50 max-w-3xl">
            It is this inspiration that led me to create Au Naturel, a platform where I could share
            my favorite works with others who appreciate the beauty of the human body in all its
            forms. Through this gallery, I hope to showcase the stunning diversity of the human form
            and inspire others to see the beauty in their own bodies and in the bodies of others.
          </div>
          <div class="py-5 opacity-50 max-w-3xl">
            Whether you are an art lover, a photography enthusiast, or simply someone who
            appreciates the natural beauty of the human form, I invite you to explore the works
            featured in Au Naturel. Each image has been carefully selected for its unique beauty and
            artistic merit, and I hope that they will leave you feeling inspired and awed.
          </div>
          <div class="py-5 opacity-50 max-w-3xl">
            Thank you for visiting Au Naturel, and I hope that you will join me in celebrating the
            beauty of the human form through the art of photography.
          </div>
        </div>
      </main>
      <FooterView />
    </div>
  </pageContainer>
</template>
