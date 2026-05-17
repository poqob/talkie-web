<template>
  <section class="py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="use-cases" aria-label="Use cases">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span class="inline-block text-xs font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3">Perfect For</span>
        <h2 class="text-3xl sm:text-4xl font-bold dark:text-white">Who is Talkie for?</h2>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(item, i) in useCases" :key="item.title" class="feature-card text-center" :ref="el => setCardRef(el, i)">
          <div class="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mx-auto mb-4" v-html="item.icon"></div>
          <h3 class="font-semibold mb-1 dark:text-white">{{ item.title }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ item.description }}</p>
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
    el.style.transform = 'translateY(20px)'
    el.style.transition = `opacity 0.5s ease-out ${i * 0.1}s, transform 0.5s ease-out ${i * 0.1}s`
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

const useCases = [
  {
    title: 'Home',
    description: 'Call family to dinner without shouting across the house.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  },
  {
    title: 'Office',
    description: 'Quick inter-office communication without Slack ping-pong.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  },
  {
    title: 'Events',
    description: 'Coordinate setup at events or construction sites.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    title: 'Everyone',
    description: 'Anyone who loves simple, beautifully designed tools.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>`,
  },
]
</script>
