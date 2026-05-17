<template>
  <section class="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-label="Hero">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 left-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/15 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-20 right-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
      <div ref="heroContent" class="reveal-left">
        <div class="flex items-center gap-3 mb-6">
          <img src="/assets/app_icon/app_icon.png" alt="Talkie app icon" class="w-14 h-14 rounded-2xl shadow-lg ring-2 ring-violet-200 dark:ring-violet-800" />
          <span class="text-3xl sm:text-4xl font-bold dark:text-white">Talkie</span>
        </div>
        <p class="text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3">
          WiFi Walkie Talkie
        </p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight dark:text-white">
          <span>Instant, secure and offline </span>
          <span class="text-violet-600 dark:text-violet-400">voice communication</span>
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mt-4 mb-8 max-w-lg">
          Turn your phone into a premium Push-to-Talk device. No internet. No accounts. Just pure, instant voice.
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.dag.ptt_2026"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold text-lg rounded-full no-underline transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            style="background: linear-gradient(135deg, #7C3AED, #6D28D9);"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Now
          </a>
          <a href="#features" class="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-gray-800 dark:text-gray-200 font-semibold text-lg rounded-full no-underline border-2 border-gray-300 dark:border-gray-600 transition-all hover:border-violet-500 hover:text-violet-700 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20">
            Learn More
          </a>
        </div>
        <div class="flex items-center gap-4 mt-8 text-sm text-gray-500 dark:text-gray-400">
          <span class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            100% Free
          </span>
          <span class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
            No Data Required
          </span>
        </div>
      </div>

      <div ref="heroImage" class="flex justify-center lg:justify-end reveal-right">
        <div class="device-frame w-64 sm:w-72 animate-float">
          <img
            src="/assets/mockup/s20/main_page-portrait.png"
            alt="Talkie main screen showing the push-to-talk interface"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { el: heroContent } = useScrollReveal()
const { el: heroImage } = useScrollReveal()
</script>
