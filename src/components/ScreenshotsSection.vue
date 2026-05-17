<template>
  <section class="py-20 sm:py-28 border-y border-violet-100 dark:border-violet-900/20 px-4 sm:px-6 lg:px-8" id="screenshots" aria-label="Screenshots">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span class="inline-block text-xs font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3">Screenshots</span>
        <h2 class="text-3xl sm:text-4xl font-bold dark:text-white">See Talkie in action.</h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">A clean, intuitive interface designed for instant communication.</p>
      </div>

      <div class="mb-16">
        <h3 class="text-lg font-semibold mb-6 text-center text-gray-500 dark:text-gray-400 uppercase tracking-wider text-sm">Phone</h3>
        <div class="screenshot-scroll">
          <div v-for="(img, i) in phoneScreenshots" :key="'phone-'+i" class="device-frame w-52" :ref="el => setCardRef(el, i, 'phone')">
            <img :src="img.src" :alt="img.alt" loading="lazy" />
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-6 text-center text-gray-500 dark:text-gray-400 uppercase tracking-wider text-sm">Tablet</h3>
        <div class="screenshot-scroll">
          <div v-for="(img, i) in tabletScreenshots" :key="'tab-'+i" class="device-frame-tablet w-72" :ref="el => setCardRef(el, i, 'tab')">
            <img :src="img.src" :alt="img.alt" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const phoneScreenshots = [
  { src: '/assets/mockup/s20/main_page-portrait.png', alt: 'Talkie main page on phone' },
  { src: '/assets/mockup/s20/labs-portrait.png', alt: 'Talkie labs screen on phone' },
  { src: '/assets/mockup/s20/settings_top-portrait.png', alt: 'Talkie settings top on phone' },
  { src: '/assets/mockup/s20/settings_down-portrait.png', alt: 'Talkie settings bottom on phone' },
]
const tabletScreenshots = [
  { src: '/assets/mockup/tablet/main_page-portrait.png', alt: 'Talkie main page on tablet' },
  { src: '/assets/mockup/tablet/labs-portrait.png', alt: 'Talkie labs screen on tablet' },
  { src: '/assets/mockup/tablet/settings_top-portrait.png', alt: 'Talkie settings top on tablet' },
  { src: '/assets/mockup/tablet/settings_down-portrait.png', alt: 'Talkie settings bottom on tablet' },
]

const cardRefs = ref([])

function setCardRef(el, i) {
  if (el) {
    cardRefs.value.push(el)
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = `opacity 0.6s ease-out ${i * 0.1}s, transform 0.6s ease-out ${i * 0.1}s`
  }
}

onMounted(() => {
  nextTick(() => {
    cardRefs.value.forEach((el) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.unobserve(el)
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
      )
      observer.observe(el)
    })
  })
})
</script>
