<template>
  <nav
    ref="navEl"
    class="fixed top-0 left-0 right-0 z-40 transition-transform duration-300 glass"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="#" class="flex items-center gap-3 no-underline" aria-label="Talkie home">
        <img src="/assets/app_icon/app_icon.png" alt="Talkie app icon" class="w-8 h-8 rounded-xl" />
        <span class="font-semibold text-lg dark:text-white">Talkie</span>
      </a>
      <div class="flex items-center gap-4 sm:gap-6">
        <a href="#features" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors no-underline">Features</a>
        <a href="#screenshots" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors no-underline hidden sm:inline">Screenshots</a>
        <button
          @click="toggleTheme"
          class="theme-toggle"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="isDark ? 'Light mode' : 'Dark mode'"
        >
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        <a
          href="https://play.google.com/store/apps/details?id=com.dag.ptt_2026"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium text-white px-4 py-2 rounded-full no-underline transition-all hover:shadow-lg"
          style="background: linear-gradient(135deg, #7C3AED, #6D28D9);"
          @mouseenter="e => e.target.style.opacity = '0.9'"
          @mouseleave="e => e.target.style.opacity = '1'"
        >
          <span class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 20.5v-17a.5.5 0 0 1 .5-.5h.15L15 12 3.65 21H3.5a.5.5 0 0 1-.5-.5M15 12l-4.5-4.5L16.5 3l4.99 2.87c.5.29.51 1.06 0 1.35L15 12m0 0 5.49 4.78c.5.29.5 1.06 0 1.35L16.5 21l-6-6L15 12M3.5 3l7.59 5L3 12v-8.5c0-.28.22-.5.5-.5M3 13l8.09 4L3.5 22c-.28 0-.5-.22-.5-.5V13Z"/></svg>
            Get on Play Store
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const navEl = ref(null)
let lastScroll = 0
const isDark = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  const saved = localStorage.getItem('talkie-theme')
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

watch(isDark, (val) => {
  document.documentElement.classList.toggle('dark', val)
  localStorage.setItem('talkie-theme', val ? 'dark' : 'light')
})

function toggleTheme() {
  isDark.value = !isDark.value
}

function handleScroll() {
  const current = window.scrollY
  if (!navEl.value) return
  if (current > 100 && current > lastScroll) {
    navEl.value.classList.add('nav-hidden')
  } else {
    navEl.value.classList.remove('nav-hidden')
  }
  lastScroll = current
}
</script>
