<script lang="ts" setup>
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'
import imagesLoaded from 'imagesloaded'
import { onMounted } from 'vue'

onMounted(() => {
  const shrinks = document.querySelectorAll('.shrink')

  shrinks.forEach((el) => {
    el.addEventListener('mouseover', () => {
      gsap.to('.cursor', {
        scale: 0.5,
        duration: 0.5
      })
    })

    el.addEventListener('mouseout', () => {
      gsap.to('.cursor', {
        scale: 1,
        duration: 0.5
      })
    })
  })

  const images = document.querySelectorAll('img')

  const imgLoad = imagesLoaded(images)

  const entranceAnimation = () => {
    const tl = gsap.timeline()
    tl.to('#pre-bottom-curtain-0', {
      top: 0,
      duration: 1,
      ease: 'easeIn'
    })
      .to(
        '#pre-bottom-curtain-1',
        {
          top: 0,
          duration: 1
        },
        '-=0.5'
      )
      .to(
        '#pre-bottom-curtain-2',
        {
          top: 0,
          duration: 1
        },
        '-=0.5'
      )
      .to(
        '#pre-bottom-curtain-3',
        {
          top: 0,
          duration: 1
        },
        '-=0.5'
      )
      .to(
        '#pre-bottom-curtain-4',
        {
          top: 0,
          duration: 1
        },
        '-=0.5'
      )
      .to(
        '.preloader',
        {
          yPercent: -100,
          duration: 1.25,
          ease: 'power4.inOut',
          delay: 1
        },
        0
      )
      .delay(2)
  }

  imgLoad.on('always', function () {
    entranceAnimation()
  })

  let loaded = 0

  const pI = document.getElementById('progress-indicator')

  imgLoad.on('progress', () => {
    loaded++
    if (pI) {
      pI.innerText = ((loaded / images.length) * 100).toFixed(0) + '%'
    }
  })
})
</script>
<template>
  <div class="page full-page">
    <div class="container" data-scroll-container ref="container">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'pageContainer',
  methods: {
    setScroll() {
      const scroller = new this.$locomotiveScroll({
        el: this.$refs.container,
        smooth: true,
        reloadOnContextChange: true
      })
      gsap.registerPlugin(ScrollTrigger)
      scroller.on('scroll', () => {
        ScrollTrigger.update()
      })
      ScrollTrigger.scrollerProxy('.container', {
        scrollTop(value) {
          return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        }
      })

      ScrollTrigger.addEventListener('refresh', () => scroller.update())
      ScrollTrigger.refresh()
    }
  },
  mounted() {
    this.setScroll()
  },
  updated() {
    this.setScroll()
  },
  onUnmounted() {
    ScrollTrigger.removeEventListener('refresh', () => {})
  }
}
</script>
<style>
.container,
.container > * {
  width: 100%;
  min-width: 100%;
}
</style>
