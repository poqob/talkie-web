<template>
  <section class="py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="features" aria-label="Features">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span class="inline-block text-xs font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3">Features</span>
        <h2 class="text-3xl sm:text-4xl font-bold dark:text-white">Everything you need. Nothing you don't.</h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Designed with a philosophy of "Invisible Interface" — no logins, no accounts, no complex settings.
        </p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(feat, i) in features"
          :key="feat.title"
          class="feature-card"
          :ref="el => setCardRef(el, i)"
        >
          <div class="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4" v-html="feat.icon"></div>
          <h3 class="text-lg font-semibold mb-2 dark:text-white">{{ feat.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{{ feat.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const cardRefs = ref([])

function setCardRef(el, i) {
  if (el) {
    cardRefs.value.push(el)
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    el.style.transition = `opacity 0.6s ease-out ${i * 0.08}s, transform 0.6s ease-out ${i * 0.08}s`
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

const features = [
  {
    title: 'Zero Internet Required',
    description: 'Works seamlessly on your local WiFi or Hotspot. Perfect for home, office, or places with spotty reception.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>`,
  },
  {
    title: 'Instant PTT',
    description: 'Experience real-time voice transmission with zero lag. Press and hold to talk — release to listen.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  },
  {
    title: 'Private & Secure',
    description: 'Your voice data never leaves your local network. No cloud servers, no tracking, no accounts.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  },
  {
    title: 'Haptic Touch',
    description: 'Feel the click. High-quality haptic feedback makes the on-screen button feel like a real mechanical switch.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 12h12"/><path d="M12 6v12"/></svg>`,
  },
  {
    title: 'Minimalist Design',
    description: 'Clean, modern interface inspired by high-end industrial design. Focus only on what matters: Voice.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  },
  {
    title: 'Battery Efficient',
    description: 'Optimized to run in the background without draining your power. Talk all day on a single charge.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="10" x2="23" y2="14"/><line x1="7" y1="10" x2="7" y2="14"/><line x1="11" y1="10" x2="11" y2="14"/><line x1="15" y1="10" x2="15" y2="14"/></svg>`,
  },
]
</script>
