<template>
  <section class="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-violet-100 dark:border-violet-900/20" aria-label="How to use">
    <div class="max-w-3xl mx-auto text-center">
      <span class="inline-block text-xs font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3">Simple Setup</span>
      <h2 class="text-3xl sm:text-4xl font-bold mb-4 dark:text-white">How to use Talkie</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400 mb-12">Three steps. That's it.</p>
      <div class="grid sm:grid-cols-3 gap-8 text-left">
        <div v-for="(step, i) in steps" :key="i" class="flex gap-4" :ref="el => setRef(el, i)">
          <span class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg text-white" style="background: linear-gradient(135deg, #7C3AED, #6D28D9);" aria-hidden="true">{{ i + 1 }}</span>
          <div>
            <h3 class="font-semibold mb-1 dark:text-white">{{ step.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const refs = ref([])

function setRef(el, i) {
  if (el) {
    refs.value.push(el)
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = `opacity 0.5s ease-out ${i * 0.15}s, transform 0.5s ease-out ${i * 0.15}s`
  }
}

onMounted(() => {
  nextTick(() => {
    refs.value.forEach((el) => {
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

const steps = [
  { title: 'Connect', description: 'Connect all devices to the same WiFi network.' },
  { title: 'Open', description: 'Launch Talkie on your device.' },
  { title: 'Talk', description: 'Press and hold the button to speak. That\'s it!' },
]
</script>
